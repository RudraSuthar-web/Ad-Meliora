---
name: Teal Horizon
colors:
  surface: '#0f1416'
  surface-dim: '#0f1416'
  surface-bright: '#353a3c'
  surface-container-lowest: '#0a0f11'
  surface-container-low: '#171c1e'
  surface-container: '#1b2022'
  surface-container-high: '#262b2d'
  surface-container-highest: '#303637'
  on-surface: '#dfe3e5'
  on-surface-variant: '#bdc8cc'
  inverse-surface: '#dfe3e5'
  inverse-on-surface: '#2c3133'
  outline: '#879396'
  outline-variant: '#3e484c'
  surface-tint: '#70d4ef'
  primary: '#70d4ef'
  on-primary: '#003641'
  primary-container: '#2e9db7'
  on-primary-container: '#002e38'
  inverse-primary: '#00687b'
  secondary: '#c0c6db'
  on-secondary: '#293040'
  secondary-container: '#404758'
  on-secondary-container: '#aeb5c9'
  tertiary: '#efc200'
  on-tertiary: '#3c2f00'
  tertiary-container: '#cea700'
  on-tertiary-container: '#4e3e00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#aeecff'
  primary-fixed-dim: '#70d4ef'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5d'
  secondary-fixed: '#dce2f7'
  secondary-fixed-dim: '#c0c6db'
  on-secondary-fixed: '#141b2b'
  on-secondary-fixed-variant: '#404758'
  tertiary-fixed: '#ffe083'
  tertiary-fixed-dim: '#eec200'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#574500'
  background: '#0f1416'
  on-background: '#dfe3e5'
  surface-variant: '#303637'
typography:
  display-lg:
    fontFamily: Poetsen One
    fontSize: 72px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-md:
    fontFamily: Poetsen One
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: 0em
  headline-lg:
    fontFamily: Poetsen One
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Poetsen One
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Poltawski Nowy
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Poltawski Nowy
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Pontano Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 48px
  margin-mobile: 20px
---

## Brand & Style

This design system is engineered for a premium AI automation agency, shifting from high-energy neon to a more grounded, "Industrial Precision" aesthetic. The visual narrative centers on "The Deep Signal"—where sophisticated teal-based depths meet high-visibility technical highlights.

The style remains a synthesis of **Modern Minimalism** and **Glassmorphism**, but with a focus on professional clarity and data-driven confidence. It utilizes expansive negative space and translucent surfaces, replacing the "neon energy" of the past with a refined, atmospheric glow. The emotional response is one of reliability, clinical precision, and strategic intelligence.

- **Visual Tone:** Professional, calibrated, and sophisticated.
- **Imagery:** High-fidelity 3D renders with brushed metallic textures and focused, electric light sources.
- **Key Motifs:** Precision lines, high-contrast data-visualization glows, and layered depth.

## Colors

The palette is anchored by **Deep Teal (#0b8da6)** and a **Deep Midnight (#111827)**, providing a high-contrast foundation that feels technical rather than purely decorative. 

- **Primary (Deep Teal):** Used for primary actions, branding, and core technical highlights.
- **Secondary (Deep Midnight):** Used for structural grounding, high-contrast backgrounds, and technical UI depth.
- **Tertiary (Electric Gold):** A high-visibility accent (#FACC15) reserved for critical status indicators, alerts, and highlighting specific AI-driven insights.
- **Surface Strategy:** Backgrounds utilize the midnight tones and neutral grey (#73787a) to create a tiered environment that prevents "flat" blacks while maintaining an industrial edge.
- **Glows:** Primary and tertiary colors are applied as low-opacity radial gradients (10-15% opacity) behind key components to simulate technical luminescence and focus.

## Typography

The typography strategy balances high-tech character with a sophisticated, editorial touch, introducing a unique visual hook through the contrast of its faces.

**Poetsen One** is the display powerhouse. Its soft yet bold geometric curves provide a distinct "engineered" personality that stands out against the dark technical backdrop. It is used for all major headlines and impactful numerical data to give the brand a recognizable, custom-tooled feel.

**Poltawski Nowy** serves as the primary body font. This high-contrast serif introduces a "New York Times" level of sophistication and intellectual rigor to the technical design, ensuring long-form content feels premium and authoritative. Body text should maintain a high line-height (1.6) for breathability.

**Pontano Sans** is reserved for labels and metadata. This clean, minimalist sans-serif provides exceptional legibility at small scales. Use it in uppercase with increased letter-spacing to mimic technical schematics and HUD interfaces, maintaining functional clarity for UI controls.

## Layout & Spacing

The design system utilizes a **12-column Fluid Grid** for desktop and a **4-column grid** for mobile. 

The layout philosophy is "Atmospheric Density." Large sections are separated by significant vertical gaps (120px+) to allow the interface to breathe. Content within modules, however, should feel precise and tightly aligned to a technical grid.

- **Desktop:** 1280px max-width container, centered.
- **Mobile:** Full width with 20px side margins.
- **Rhythm:** All spacing (padding, margins) must be multiples of the 8px base unit to maintain mathematical consistency.

## Elevation & Depth

Depth is achieved through technical layering and light emission rather than traditional shadows.

- **Level 1 (Base):** Deep Midnight (#111827).
- **Level 2 (Containers):** Neutral surface with a 1px border at 10% white opacity.
- **Level 3 (Interactive):** Glassmorphic surfaces with a `backdrop-filter: blur(20px)` and a gradient stroke (White 10% to Primary 20%).
- **Luminescence:** High-priority cards should have a "Primary Glow"—a soft, 40px feathered radial gradient of Deep Teal positioned subtly behind the top-left corner of the card. Critical alerts may swap this for a subtle Electric Gold glow.

## Shapes

The shape language is "Refined Tech." We avoid both sharp industrial corners and overly playful pill shapes.

Standard components use a **0.5rem (8px)** radius, providing a modern, software-centric feel. Larger cards or sections may scale up to **1rem (16px)** to emphasize the "container" feel of the AI modules. Iconography should follow a linear, 2px stroke style with subtle rounded terminals to match the UI radius.

## Components

### Buttons
- **Primary:** Solid fill (Deep Teal), white text, Poetsen One. On hover, increase the subtle outer glow intensity.
- **Secondary:** Ghost style with a 1px Midnight stroke or Neutral outline. 10% background opacity on hover. Uses Poltawski Nowy for a refined call-to-action.

### Cards
- Surfaces use the "Level 2" elevation specs, anchored by the Deep Midnight palette. 
- Headlines within cards should use Poetsen One and be strictly capped at 2-3 lines to maintain grid verticality.

### Inputs
- Background: Desaturated Dark Surface (Midnight).
- Border: 1px solid #73787a at 20% opacity.
- Focus State: Border changes to Deep Teal with a 4px soft outer glow.

### Chips / Status Indicators
- Small, uppercase labels using Pontano Sans. 
- Use "Deep Teal" for active AI processes and "Electric Gold" for critical alerts, priority warnings, or completed high-impact automation steps.
- Include a small glowing dot for live status indicators.

### AI Visualizers
- Incorporate thin, animated SVG lines or "nodes" that react to scroll or hover, reinforcing the AI automation theme throughout the interface.