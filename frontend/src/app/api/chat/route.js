import { NextResponse } from 'next/server'
import { Langfuse } from 'langfuse'

// Initialize Langfuse client
const langfuse = new Langfuse({
  publicKey: process.env.LANGFUSE_PUBLIC_KEY,
  secretKey: process.env.LANGFUSE_SECRET_KEY,
  baseUrl: process.env.LANGFUSE_BASE_URL || 'http://localhost:3001',
  flushAt: 1,
  flushInterval: 1000,
})

export async function POST(request) {
  const startTime = Date.now()
  let trace = null
  
  try {
    const { messages, sessionId, userId } = await request.json()

    // Create a trace for this conversation turn
    trace = langfuse.trace({
      name: 'chatbot-conversation',
      sessionId: sessionId || `session-${Date.now()}`,
      userId: userId || 'anonymous',
      metadata: { source: 'ad-meliora-chatbot' },
      tags: ['production'],
    })

    const apiKey = process.env.GROQ_API_KEY
    if (!apiKey) {
      trace.update({ level: 'ERROR', statusMessage: 'GROQ_API_KEY not set' })
      return NextResponse.json(
        { error: 'GROQ_API_KEY environment variable is not set.' },
        { status: 500 }
      )
    }

    const systemPrompt = `You are a helpful, professional, and sophisticated AI assistant for Ad Meliora (Latin for "towards better things"), a premium enterprise AI automation agency.

Your main goal is to introduce users to Ad Meliora's capabilities, build trust, answer questions about our services and methodology, and guide qualified leads to book a consultation.

ABOUT AD MELIORA:
1. Core Mission: We bridge the gap between complex enterprise data and actionable automation, uncovering hidden inefficiencies and maximizing productivity with zero disruption to the client's existing stack.
2. Services/Solutions:
   - Workflow Sync: Synchronize data across 200+ applications with zero latency and intelligent error handling.
   - Neural Analytics: Predictive insights that help clients understand business velocity before the quarter ends.
   - Custom AI Nodes: Tailor-made AI agents trained on proprietary data for ultra-specific business logic.
3. Methodology (The Automation Pipeline):
   - Phase 01 (Discovery): Mapping manual bottlenecks and opportunity surface across workflows.
   - Phase 02 (Architect): Designing custom AI logic, neural flows, and integration blueprints.
   - Phase 03 (Deploy): Live scaling and continuous optimization with real-time monitoring and audits.
4. Contact & Consultations:
   - CRITICAL: Never provide a direct email address, phone number, or physical address. If asked for contact details, do not make them up.
   - Instead, instruct the user to go to the **Contact Us** page to **Book a Consultation** (link directly to '/book-consultation').
   - Alternatively, mention they can reach out to Ad Meliora on **LinkedIn** or **Instagram**.

CHATBOT GUIDELINES:
- CRITICAL: Keep your responses extremely short, concise, and direct. Limit responses to 1-2 sentences or a quick bulleted list where possible. Never write long paragraphs or verbose explanations.
- Be friendly, innovative, professional, and polished.
- Do not make up facts or services not listed here. If a user asks about services we do not provide, politely clarify that we focus specifically on workflow automation, custom AI nodes, and neural analytics.
- If the user shows strong interest in scheduling a meeting or getting started, invite them to use the "Book Consultation" page. Use markdown formatting to bold text or create small headers, but keep it clean.`;

    const groqMessages = [
      { role: 'system', content: systemPrompt },
      ...messages.map(msg => ({
        role: msg.role === 'assistant' || msg.role === 'bot' || msg.role === 'model' ? 'assistant' : 'user',
        content: msg.text || ''
      }))
    ]

    // Create a generation span for the LLM call
    const generation = trace.generation({
      name: 'groq-completion',
      model: 'gpt-oss-120b',
      input: groqMessages,
      metadata: { provider: 'groq' },
    })

    // Current working models on Groq (as of 2025)
    const modelsToTry = [
      'openai/gpt-oss-120b',
      'openai/gpt-oss-20b',
      'meta-llama/Llama-3.3-70B-Instruct'
    ]

    let response = null
    let lastErrorText = ''

    for (const model of modelsToTry) {
      try {
        generation.update({ model })
        response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: model,
            messages: groqMessages,
            temperature: 0.5,
            max_tokens: 1024
          })
        })

        if (response.ok) {
          break
        } else {
          lastErrorText = await response.text()
          console.warn(`Groq model ${model} failed:`, lastErrorText)
        }
      } catch (err) {
        lastErrorText = err.message || String(err)
        console.warn(`Error connecting to Groq model ${model}:`, err)
      }
    }

    if (!response || !response.ok) {
      generation.end({ level: 'ERROR', statusMessage: lastErrorText })
      console.error('All Groq API models failed. Last error:', lastErrorText)
      return NextResponse.json(
        { error: `Groq API call failed: ${lastErrorText}` },
        { status: response ? response.status : 500 }
      )
    }

    const data = await response.json()
    const botText = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't generate a response."

    // End generation with output + usage
    generation.end({
      output: botText,
      usage: {
        promptTokens: data.usage?.prompt_tokens || 0,
        completionTokens: data.usage?.completion_tokens || 0,
        totalTokens: data.usage?.total_tokens || 0,
      },
      metadata: { model: data.model },
    })

    // Ensure traces are sent before response returns
    await langfuse.flushAsync()

    return NextResponse.json({ text: botText })
  } catch (error) {
    console.error('Chat route error:', error)
    if (trace) trace.update({ level: 'ERROR', statusMessage: error.message })
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  } finally {
    await langfuse.flushAsync()
  }
}