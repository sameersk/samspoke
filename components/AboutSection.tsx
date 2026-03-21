import Link from "next/link";

const topics = [
  { icon: "🤖", label: "AI & Technology" },
  { icon: "🌱", label: "Sustainability" },
  { icon: "📊", label: "Data Analytics" },
  { icon: "💼", label: "Business Strategy" },
  { icon: "⚡", label: "Productivity" },
];

export default function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Topic tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {topics.map((t) => (
              <div
                key={t.label}
                className="card p-5 flex flex-col items-center justify-center text-center gap-2 hover:border-teal-200 hover:bg-teal-50 transition-colors cursor-default"
              >
                <span className="text-3xl">{t.icon}</span>
                <span className="text-sm font-medium text-slate-700">{t.label}</span>
              </div>
            ))}

            {/* "And more" tile */}
            <div className="card p-5 flex flex-col items-center justify-center text-center gap-2 bg-teal-600 border-teal-600 hover:bg-teal-700 transition-colors cursor-default">
              <span className="text-3xl">✍️</span>
              <span className="text-sm font-medium text-white">& More</span>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="tag tag-teal mb-4 inline-block">About Sameer</span>
            <h2 className="section-heading">
              Making complex ideas<br />
              <span className="text-teal-600">accessible and actionable.</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              Sameer is a writer and analyst exploring the intersection of business
              strategy, data analytics, artificial intelligence, and sustainability.
              Based in Singapore, he writes to make complex ideas accessible and
              actionable — from how AI is reshaping industries to the small habits
              that compound into big results.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              samspoke is where those ideas find a home: a space for clear
              thinking, honest analysis, and the occasional contrarian take on how
              businesses and individuals can thrive in a rapidly changing world.
            </p>

            <div className="flex gap-4">
              <Link href="/about" className="btn-primary">
                Read More About Me
              </Link>
              <Link href="#newsletter" className="btn-outline">
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
