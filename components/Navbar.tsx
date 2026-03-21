"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-sm group-hover:bg-teal-700 transition-colors">
            S
          </span>
          <span className="font-bold text-slate-900 text-lg tracking-tight">
            samspoke
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
          >
            About
          </Link>
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link href="#newsletter" className="btn-primary hidden md:inline-flex">
            Subscribe
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-teal-600 hover:bg-slate-50 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-4">
          <Link href="/" className="text-sm font-medium text-slate-700 hover:text-teal-600" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/blog" className="text-sm font-medium text-slate-700 hover:text-teal-600" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/about" className="text-sm font-medium text-slate-700 hover:text-teal-600" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="#newsletter" className="btn-primary text-center" onClick={() => setMenuOpen(false)}>Subscribe</Link>
        </div>
      )}
    </header>
  );
}
