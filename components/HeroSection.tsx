import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-teal-50 pt-20 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-teal-700 text-xs font-semibold uppercase tracking-widest">
                Business · AI · Sustainability
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 leading-tight mb-6">
              Thinking at the edge of{" "}
              <span className="text-teal-600">business, AI &amp; sustainability.</span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
              Thoughtful, practical writing on technology, analytics, and the
              decisions that shape how we work and live — written by Sameer
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/blog" className="btn-primary">
                Read the Blog
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/about" className="btn-outline">
                About Me
              </Link>
            </div>

            {/* Stat pills */}
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                { value: "4+", label: "Topic areas" },
                { value: "Monthly", label: "New articles" },
                { value: "Free", label: "Newsletter" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 bg-white border border-slate-100 rounded-full px-4 py-2 shadow-sm"
                >
                  <span className="text-base font-bold text-teal-700">{stat.value}</span>
                  <span className="text-xs text-slate-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Headshot */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative background ring */}
              <div className="absolute -inset-5 rounded-3xl bg-gradient-to-br from-teal-100 to-slate-100 opacity-70" />

              <div className="relative w-72 h-80 sm:w-80 sm:h-[26rem] rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-slate-200 to-slate-300">
                <Image
                  src="/headshot.jpg"
                  alt="Sameer — writer and analyst"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 288px, 320px"
                />
              </div>

              {/* Floating name card */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3 border border-slate-100 whitespace-nowrap">
                <span className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-sm shrink-0">S</span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Sameer</p>
                  <p className="text-xs text-slate-400">Singapore · samspoke.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
