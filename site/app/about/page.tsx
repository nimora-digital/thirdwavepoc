'use client';

import { useState } from 'react';
import { PageWrapper } from '../components/PageWrapper';
import Image from 'next/image';

const team = [
  {
    name: 'Jean-Paul Srivastava',
    role: 'Co-Founder & IAM Architect',
    img: '/file.svg',
    bio: `With 17+ years in consulting, Jean-Paul specialises in IAM and PAM, expertly leading major security projects in the public and finance sectors. His strategic management of large-scale initiatives and deep understanding of security frameworks make him a key player in delivering effective solutions.`,
  },
  {
    name: 'Maria DeVito',
    role: 'Advisory Lead',
    img: '/globe.svg',
    bio: `Maria leads strategic advisory across enterprise and public sector, helping clients navigate compliance and scale IAM with ease.`,
  },
  {
    name: 'Thomas Keane',
    role: 'PAM Engineer',
    img: '/window.svg',
    bio: `Thomas specialises in PAM architecture and has delivered secure vault implementations across global organisations.`,
  },
];

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <PageWrapper>
      <div className="px-6 py-12 max-w-7xl mx-auto">
        {/* Info Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow text-black">
            <h2 className="text-2xl font-semibold mb-2">About Us</h2>
            <p>
              Third Wave Identity was founded by a team of experts who wanted to raise the bar for IAM consulting.
              With experience delivering enterprise solutions and a background at Big Four consultancies, we provide secure,
              scalable identity systems tailored to your people and data.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-black">
            <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
            <p>
              From strategy to technical implementation, our experts deliver IAM and PAM systems that work for your
              business — not the other way around. We tailor access controls, policies, and workflows to your goals using best-in-class tools.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <h2 className="text-3xl font-bold text-center mb-8 text-white">The Team</h2>
        <div className="flex flex-wrap justify-center gap-6 transition-all">
          {team.map((member, index) => (
            <div
              key={index}
              className={`relative bg-white text-black p-4 rounded-xl shadow-md transition-all duration-500 ${
                activeIndex === index ? 'flex-grow max-w-2xl' : 'w-36'
              }`}
              onClick={() => setActiveIndex(index === activeIndex ? null : index)}
            >
              <Image
                src={member.img}
                alt={member.name}
                width={64}
                height={64}
                className="mx-auto rounded-full mb-2"
              />
              <h3 className="font-medium text-center">{member.name.split(' ')[0]}</h3>
              {activeIndex === index && (
                <div className="mt-4">
                  <p className="text-sm italic text-center">{member.role}</p>
                  <p className="text-sm mt-2 text-left">{member.bio}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
