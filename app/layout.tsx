import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vexor // Dead Calm',
  description: 'Luxury cyberpunk developer brand experience for @yovexor',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
