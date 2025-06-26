'use client';

import { useState } from 'react';
import { PageWrapper } from '../components/PageWrapper';

const services = [
  {
    title: 'Application Onboarding',
    details: `Our onboarding method supports roles like Read, Write, Flat File and automates:
- Proper access control
- Easy password + permission setup
- Day-one access
- Seamless offboarding
- Reduced errors + config drift`,
  },
  {
    title: 'Current State Assessment',
    details: `Before suggesting improvements, we evaluate:
- People: how your teams interact with identity systems
- Process: how approvals & workflows function
- Technology: what tools/platforms are in place
This provides a plan of action supported by data.`,
  },
  {
    title: 'IAM and PAM Implementation',
    details: `From Azure AD to CyberArk, we deploy enterprise-grade IAM & PAM tailored to your business.
We work with stakeholders across departments to ensure least privilege, secure auditability, and role-based access.`,
  },
  {
    title: '24 x 7 Support',
    details: `We offer flexible SLAs with:
- Dedicated contacts
- Technical troubleshooting
- Security patching
- Vendor issue resolution
- Usage analytics
Let us manage your IAM so you can focus on delivery.`,
  },
];

export default function ServicesPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <PageWrapper>
      <div className="px-6 py-12 max-w-5xl mx-auto">
        <h1
          className="text-3xl font-bold text-center mb-10"
          style={{ color: '#ffe66d' }}
        >
          Our Services
        </h1>

        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setActive(active === index ? null : index)}
              className={`transition-all duration-500 ease-in-out rounded-xl p-6 shadow bg-white text-black cursor-pointer overflow-hidden ${
                active === index ? 'max-h-[500px]' : 'max-h-[80px]'
              }`}
            >
              <h2 className="text-xl font-semibold">{service.title}</h2>
              {active === index && (
                <p className="mt-4 whitespace-pre-line">{service.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
