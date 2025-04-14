import './globals.css';
import type { Metadata } from 'next';
import { Inter, Noto_Serif_Devanagari } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter'
});

const notoDevanagari = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '700'],
  variable: '--font-noto-devanagari'
});

export const metadata: Metadata = {
  title: 'मुंशी प्रेमचंद साहित्य संग्रह',
  description: 'मुंशी प्रेमचंद की कालजयी रचनाओं का संग्रह - उपन्यास, कहानियां और निबंध',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi" className={`${inter.variable} ${notoDevanagari.variable}`}>
      <body>
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}