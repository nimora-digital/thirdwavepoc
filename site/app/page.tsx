'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PageWrapper } from './components/PageWrapper';

const FlipCard = ({
  title,
  flipped,
  onFlip,
}: {
  title: string;
  flipped: boolean;
  onFlip: () => void;
}) => {
  return (
    <div
      className={`relative w-full sm:w-[320px] md:w-[360px] lg:w-[400px] ${
        flipped ? 'h-64' : 'h-40'
      } perspective cursor-pointer transition-all duration-500`}
      onClick={onFlip}
    >
      <div
        className={`transition-transform duration-700 transform-style preserve-3d w-full h-full rounded-xl shadow-md ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-[#0a1f63] text-white flex items-center justify-center rounded-xl border-2 border-[#ffe66d] hover:bg-[#11275c] transition">
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#ffe66d] text-black flex items-center justify-center rounded-xl border-2 border-[#ffe66d] px-4 text-center">
          <p className="text-sm">Information coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default function HomePage() {
  const titles = ['Who We Are', 'What We Do', 'How We Work', 'Why It Works'];
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);


  return (
    <PageWrapper>
      <div>
        {/* Hero Section */}
        <section className="text-center py-12 px-4">
          <h1 className="text-4xl font-bold mb-4 text-[#ffe66d]">Because Identity is Everything.</h1>
          <p className="text-lg max-w-xl mx-auto mb-8">
            We help you design and implement secure identity and access systems that actually work.
          </p>
          <div className="max-w-5xl mx-auto px-4">
            <Link href="/consultation">
              <button className="w-full sm:w-[280px] bg-[#ffe66d] text-black font-semibold py-3 px-6 rounded-xl shadow-lg transition hover:scale-105 hover:shadow-yellow-200/50">
                Book A Free Consultation Now
              </button>
            </Link>
          </div>
        </section>

{/* Ticker Strip */}
<section className="ticker-wrapper">
  <div className="ticker-content">
    {[...Array(4)].flatMap((_, i) =>
      [
        'Enterprise IAM solutions',
        'AD and Entra ID Experts',
        'Audit-Ready Delivery',
        'SailPoint, CyberArk, StrongDM',
        'Identity is Everything',
      ].map((text, index, arr) => (
        <span
          key={`${i}-${index}`}
          className={`ticker-item ${index !== arr.length - 1 ? 'ticker-divider' : ''}`}
        >
          {text}
        </span>
      ))
    )}
  </div>
</section>



        {/* Flip Card Grid */}
        <section className="relative z-10 py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-blue-500/10 rounded-xl blur-2xl opacity-30 -z-10 mx-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto justify-items-center">
            {titles.map((title, index) => (
              <FlipCard
                key={title}
                title={title}
                flipped={flippedIndex === index}
                onFlip={() => setFlippedIndex(flippedIndex === index ? null : index)}
              />
            ))}
          </div>
        </section>

        {/* How It Works Strip */}
        <section className="text-center py-16 px-6 text-white mt-10">
          <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
          <ol className="flex flex-col md:flex-row justify-center gap-6 text-left max-w-4xl mx-auto">
            <li className="flex-1">
              <strong>1. Book Free Consultation</strong>
              <br />
              Speak with IAM experts for free.
            </li>
            <li className="flex-1">
              <strong>2. Get Tailored Plan</strong>
              <br />
              Receive a security roadmap based on your needs.
            </li>
            <li className="flex-1">
              <strong>3. Scalable Implementation</strong>
              <br />
              We design, deploy, and support your solution.
            </li>
          </ol>
        </section>
      </div>
    </PageWrapper>
  );
}
