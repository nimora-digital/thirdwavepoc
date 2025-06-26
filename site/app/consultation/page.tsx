'use client';

import { useState } from 'react';
import { PageWrapper } from '../components/PageWrapper';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function ConsultationPage() {
  const [wantsCall, setWantsCall] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    date: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', { ...form, date: selectedDate });
    alert('Consultation request submitted!');
  };

  return (
    <PageWrapper>
      <div className="px-6 py-12 max-w-3xl mx-auto text-white">
        <h1 className="text-3xl font-bold text-[#ffe66d] text-center mb-6">Book a Free Consultation</h1>
        <p className="text-center text-gray-300 mb-10">
          Tell us a bit about yourself and we’ll get you booked in with one of our specialists.
        </p>

        <div className="bg-white text-black p-6 rounded-xl shadow-lg space-y-4 transition-all duration-300">
          <p className="text-lg font-semibold">Would you like to schedule a call?</p>

          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="wantsCall"
                value="yes"
                checked={wantsCall === 'yes'}
                onChange={() => setWantsCall('yes')}
              />
              Yes
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="wantsCall"
                value="no"
                checked={wantsCall === 'no'}
                onChange={() => setWantsCall('no')}
              />
              No
            </label>
          </div>

          {wantsCall === 'yes' && (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 pt-4 transition-all duration-500"
            >
              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />
              <input
                name="company"
                placeholder="Company (optional)"
                value={form.company}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />

              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date);
                  setForm((prev) => ({
                    ...prev,
                    date: date ? date.toISOString() : '',
                  }));
                }}
                showTimeSelect
                timeIntervals={30}
                dateFormat="MMMM d, yyyy h:mm aa"
                placeholderText="Select a date and time"
                className="w-full border p-2 rounded"
              />

              <textarea
                name="message"
                placeholder="Optional message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />

              <button
                type="submit"
                className="bg-[#ffe66d] px-4 py-2 rounded font-semibold hover:scale-105 transition"
              >
                Submit Consultation
              </button>
            </form>
          )}

          {wantsCall === 'no' && (
            <div className="space-y-4 pt-4 text-sm text-gray-700 animate-fade-in">
              <p>You can send us a message or reach out by phone any time.</p>
              <textarea
                name="message"
                placeholder="Your message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <div className="flex gap-4">
                <button
                  onClick={handleSubmit}
                  className="bg-[#ffe66d] px-4 py-2 rounded font-semibold hover:scale-105 transition"
                >
                  Send Message
                </button>
                <a
                  href="tel:+442080788469"
                  className="px-4 py-2 border border-[#ffe66d] text-[#ffe66d] rounded hover:bg-[#ffe66d] hover:text-black transition font-semibold"
                >
                  Call Us
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
