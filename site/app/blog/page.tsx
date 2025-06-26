'use client';

import { useEffect, useState } from 'react';
import { PageWrapper } from "../components/PageWrapper";

interface BlogPost {
  title: string;
  date: string;
  author: string;
  summary: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Mock data; eventually this could fetch from LinkedIn or Notion API
    setPosts([
      {
        title: 'Best Practices for Identity Governance in 2025',
        date: 'June 20, 2025',
        author: 'Jean-Paul Srivastava',
        summary: 'Explore the key changes in regulatory compliance, lifecycle automation, and AI-based access reviews.',
      },
      {
        title: 'Why PAM Maturity Is Critical for Mid-Market Security',
        date: 'June 10, 2025',
        author: 'Maria DeVito',
        summary: 'Understanding where your privileged access controls sit and how to close the gaps that matter most.',
      },
      {
        title: 'How Third Wave Identity Helped Cut Risk 60%',
        date: 'May 22, 2025',
        author: 'Thomas Keane',
        summary: 'Case study: Read how we helped a financial client modernise IAM infrastructure with measurable impact.',
      },
    ]);
  }, []);

  return (
    <PageWrapper>
      <div className="px-6 py-12 max-w-7xl mx-auto">
        <h1
          className="text-3xl font-bold text-center mb-10"
          style={{ color: '#ffe66d' }}
        >
          Our Latest Posts
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white text-black p-6 rounded-xl shadow-lg flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-1">
                  {post.date} · {post.author}
                </p>
                <p className="text-sm mt-2">{post.summary}</p>
              </div>
              <button className="mt-6 self-start text-sm text-blue-600 font-medium hover:underline">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
