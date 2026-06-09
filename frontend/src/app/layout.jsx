import React from 'react';
import './globals.css';
import Header from '../components/header';

export default function Layout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poetsen+One&amp;family=Poltawski+Nowy:ital,wght@0,400..700;1,400..700&amp;family=Pontano+Sans:wght@300..700&amp;display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface text-on-surface selection:bg-primary/30 font-body-md">
        <Header />
        {children}
      </body>
    </html>
  );
}
