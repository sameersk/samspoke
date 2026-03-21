import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-sm">
                S
              </span>
              <span className="font-bold text-white text-lg tracking-tight">
                samspoke
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Insights at the intersection of business, AI, and sustainability.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "About", href: "/about" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Topics</h4>
            <ul className="space-y-2">
              {["AI & Technology", "Sustainability", "Business Strategy", "Data & Analytics", "Productivity"].map((topic) => (
                <li key={topic}>
                  <Link href="/blog" className="text-sm hover:text-teal-400 transition-colors">
                    {topic}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} samspoke.com — All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Written by Sameer · Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
