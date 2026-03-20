"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    "w-full border border-charcoal/20 rounded-xl px-4 py-3 bg-white text-ink placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/50 transition-all text-sm";

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl border border-gold/15 shadow-sm p-10 flex flex-col items-center justify-center text-center gap-5 min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
          <span className="text-gold text-2xl">✓</span>
        </div>
        <h3 className="font-display text-2xl text-ink">Message Received!</h3>
        <p className="text-charcoal-light max-w-sm leading-relaxed">
          Thank you for reaching out. A member of our team will get back to you
          within 1–2 business days.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", company: "", message: "" });
          }}
          className="text-gold text-sm font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-gold/15 shadow-sm p-8 md:p-10">
      <h2 className="font-display text-2xl text-ink mb-2">Send Us a Message</h2>
      <p className="text-charcoal-light text-sm mb-8">
        Fill out the form below and we&apos;ll be in touch shortly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-charcoal mb-2 tracking-wide uppercase">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-charcoal mb-2 tracking-wide uppercase">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="jane@company.com"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-charcoal mb-2 tracking-wide uppercase">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Your Company Ltd."
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-charcoal mb-2 tracking-wide uppercase">
            Message *
          </label>
          <textarea
            name="message"
            required
            rows={6}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your business and what you're looking for..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <Button type="submit" size="lg" className="w-full justify-center">
          Send Message
        </Button>
      </form>
    </div>
  );
}
