import './globals.css';
import { Inter, Outfit, Fira_Code } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' });

export const metadata = {
  title: 'Aman Singh — ML Engineer & Developer',
  description: 'Explore my portfolio — machine learning projects, deep learning research, and software development work.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.variable} ${outfit.variable} ${firaCode.variable}`}>
      <body>{children}</body>
    </html>
  );
}
