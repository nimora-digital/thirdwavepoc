import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { PreloadAllPages } from './components/PreLoadAllPages';

import UnderwaterBackground from './components/UnderwaterBackground';

export const metadata = {
  title: 'Third Wave Identity',
  description: 'Enterprise-grade Identity and Access Management Consultancy',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative flex flex-col min-h-screen text-white font-sans overflow-x-hidden">
        {/* Animated background with light reflections */}
        <UnderwaterBackground />

        <Navbar />

        <PreloadAllPages />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
