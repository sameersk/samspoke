"use client";

import { useState } from "react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section
      id="newsletter"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-700 to-teal-900"
    >
      <div className="max-w-2xl mx-auto text-center">
        <span className="inline-block bg-teal-600 text-teal-100 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
          Newsletter
        </span>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Stay in the loop.
        </h2>

        <p className="text-teal-200 text-lg mb-8 leading-relaxed">
          Get new articles on business, AI, and sustainability delivered to your
          inbox — no noise, just signal. Join readers who want to think better
          and act smarter.
        </p>

        {submitted ? (
          <div className="bg-teal-600/40 border border-teal-400/50 rounded-2xl px-8 py-6">
            <div className="text-4xl mb-3">🎉</div>
            <p className="text-white font-semibold text-lg">You&apos;re in!</p>
            <p className="text-teal-200 text-sm mt-1">
              Thanks for subscribing. Watch your inbox for the next issue.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 border border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition-colors text-sm shrink-0"
            >
              Subscribe Free
            </button>
          </form>
        )}

        <p className="text-teal-400 text-xs mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
