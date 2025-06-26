'use client';
import { PageWrapper } from "../components/PageWrapper";
import { useState } from 'react';

const jobs = [
  {
    id: 1,
    title: 'IAM SME',
    type: 'Full-time · Remote',
    department: 'Engineering',
    description: `We’re looking for an Identity SME with experience in SailPoint, Azure AD, and Okta. Must be comfortable designing RBAC frameworks and integrating complex apps.`,
  },
  {
    id: 2,
    title: 'PAM SME',
    type: 'Contract · Hybrid',
    department: 'Infrastructure Security',
    description: `Looking for a CyberArk expert to support onboarding of privileged accounts, vault architecture and password rotation strategies.`,
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);

  return (
    <PageWrapper>
      <div className="px-6 py-12 max-w-7xl mx-auto space-y-10">
        <h1
          className="text-3xl font-bold text-center"
          style={{ color: '#ffe66d' }}
        >
          Join The Team
        </h1>

        {/* Job & Form Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Job List */}
          <div className="bg-white text-black rounded-xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">Job Offers</h2>
            <ul className="space-y-4">
              {jobs.map((job) => (
                <li key={job.id}>
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="text-left w-full hover:bg-yellow-100 p-3 rounded-md border border-gray-300 transition"
                  >
                    <p className="font-semibold">{job.title}</p>
                    <p className="text-sm text-gray-600">{job.type}</p>
                    <p className="text-xs text-gray-500">{job.department}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Job Application Form */}
          <div className="bg-white text-black rounded-xl p-6 shadow space-y-4">
            <h2 className="text-xl font-semibold">
              {selectedJob ? `Apply for ${selectedJob.title}` : 'Contact Us'}
            </h2>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 rounded"
              />
              {selectedJob && (
                <input
                  type="file"
                  className="w-full border p-2 rounded text-sm text-gray-600"
                />
              )}
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full border p-2 rounded"
              />
              <button
                type="submit"
                className="bg-[#ffe66d] text-black px-4 py-2 rounded font-semibold hover:scale-105 hover:shadow-lg transition"
              >
                {selectedJob ? 'Submit Application' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Where To Find Us</h3>
          <iframe
            title="Third Wave Identity London Office"
            className="w-full h-64 rounded-xl border-2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.7386830928234!2d-0.078493!3d51.506517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603559e3a6a4f%3A0xf3c7c08d4f1fae8b!2s7%20Marsh%20Wall%2C%20London%20E14%209SH!5e0!3m2!1sen!2suk!4v1680000000000!5m2!1sen!2suk"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </PageWrapper>
  );
}
