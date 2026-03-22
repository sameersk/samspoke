import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import NewsletterCTA from "@/components/NewsletterCTA";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sameer is a healthcare business consultant at ZS Associates and writer exploring business strategy, data, lifestyle, and sustainability",
};

const focusAreas = [
  {
    icon: "🤖",
    title: "AI & Technology",
    desc: "How artificial intelligence is transforming industries, workflows, and decision-making — and where the hype ends and real value begins.",
  },
  {
    icon: "🌱",
    title: "Sustainability",
    desc: "The business case for green, the tensions between growth and planet, and what genuine progress looks like beyond the press release.",
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    desc: "Making sense of data to make better decisions — frameworks, pitfalls, and the gap between what the numbers say and what they mean.",
  },
  {
    icon: "💼",
    title: "Business Strategy",
    desc: "How companies compete, adapt, and build lasting advantage — and the commercial decisions that separate good analysis from real impact.",
  },
  {
    icon: "⚡",
    title: "Productivity",
    desc: "The habits, systems, and mental models that help people do their best work consistently — without burning out.",
  },
];

const highlights = [
  { stat: "6+", label: "years involved in the intersection of healthcare and business" },
  { stat: "245K+", label: "people reached through social initiatives" },
  { stat: "8", label: "Countries explored" },
  { stat: "∞", label: "Curiosity for people and new ideas" },
];

export default function AboutPage() {
  const recentPosts = getAllPosts().slice(0, 2);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-50 to-teal-50 px-4 sm:px-6 lg:px-8 pt-16 pb-20 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div>
              <span className="tag tag-teal mb-4 inline-block">About</span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Hi, I&apos;m Sameer.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-5">
                I&apos;m a business consultant at{" "}
                <span className="font-semibold text-slate-800">ZS Associates</span>, where I work
                with Fortune 500 pharmaceutical companies on brand strategy, commercial analytics,
                and the data infrastructure behind major product decisions. 
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                I started samspoke as a place to think in public — to write about the ideas that
                interest me at the intersection of business, data, and technology. Mostly things I
                wish someone had explained more clearly when I was trying to figure them out myself.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/blog" className="btn-primary">
                  Read the Blog
                </Link>
                <Link href="#newsletter" className="btn-outline">
                  Subscribe
                </Link>
              </div>
            </div>

            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-teal-100 to-slate-100 opacity-70" />
                <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="/headshot.jpg"
                    alt="Sameer — business consultant and writer"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 256px, 288px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* By the numbers */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {highlights.map((h) => (
              <div key={h.stat} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-teal-600 mb-1">
                  {h.stat}
                </div>
                <div className="text-sm text-slate-500 leading-snug">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* My story */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="tag tag-teal mb-4 inline-block">Background</span>
            <h2 className="section-heading mb-6">An unlikely path to analytics</h2>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                I studied Biotechnology at R.V. College of Engineering in Bengaluru — not the most obvious starting point for a career in commercial analytics, but one that shaped how I think in lasting ways. It became a crash course in problem-solving, teaching me to break down complex questions, connect scientific thinking with real-world business decisions, and build a foundation for the work I do today in the pharmaceutical industry.
              </p>
              <p>
                During my degree I worked on a predictive AI tool for identifying Alzheimer&apos;s-linked
                genetic mutations, and presented COVID-19 treatment protocol research at a national
                bioengineering conference. What I found, doing that work, was that the most
                interesting problems weren&apos;t the science itself — they were the decisions the science
                was supposed to inform.
              </p>
              <p>
                That instinct led me to ZS Associates, a global consultancy focused on healthcare
                commercial strategy. Since joining in 2023, I&apos;ve worked with Fortune 500 pharma
                clients on brand analytics, field-force strategy, forecasting models, and product
                launch execution — the decisions that determine whether a drug actually reaches the
                patients who need it.
              </p>
            </div>
          </div>
          <div>
            <span className="tag tag-teal mb-4 inline-block">Today</span>
            <h2 className="section-heading mb-6">What I do now</h2>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                I&apos;m currently leading brand strategy and analytics engagements with a
                team, managing end-to-end delivery across stakeholder management, solution
                design, and finding insights. It&apos;s the kind of work where the quality of the
                analysis is only half the challenge; the other half is making sure the right people
                find the business relevance and act on it.
              </p>
         
              <p>
                Away from consulting, I&apos;ve always had one foot in education and social impact. Early
                in my career I helped design an entrepreneurship programmes and continue to be involved in tutoring young kids, indulging them in sports, career guidance and also offering guest lectures on healthcare analytics at my alma-matter RVCE.
                He enjoys travelling as a way to step into new environments and experience different ways of life. For him, meeting new people and understanding new perspectives is one of the most meaningful parts of the journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What I write about */}
      <div className="bg-slate-50 px-4 sm:px-6 lg:px-8 py-20 border-t border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="section-heading">What I write about</h2>
            <p className="section-subheading">
              Five lenses on the modern world of work and technology.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="card p-6 hover:border-teal-200 hover:bg-teal-50/30 transition-all"
              >
                <span className="text-3xl mb-3 block">{area.icon}</span>
                <h3 className="font-bold text-slate-900 mb-2">{area.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why I write */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <span className="tag tag-teal mb-4 inline-block">Philosophy</span>
        <h2 className="section-heading mb-6">Why I write</h2>
        <div className="space-y-4 text-slate-600 text-base leading-relaxed">
          <p>
            A lot of my work involves turning complex analyses into decisions — and the hardest
            part is usually not the analysis. It&apos;s the communication: making sure the insight
            actually lands with the person who needs to act on it. Writing is, in many ways, the
            same problem at a different scale.
          </p>
          <p>
            I started samspoke because I kept noticing ideas I couldn&apos;t find explained clearly
            anywhere — about how data misleads, how persuasion actually works, why some people
            avoid burnout while others don&apos;t. Writing them out forces me to test whether I
            actually understand them, or whether I just think I do. The tension between those two
            things is where most of the interesting work happens.
          </p>
          <p>
            The goal has always been to write things I&apos;d want to read myself: specific,
            evidence-informed, honest about uncertainty. If something I write gives you a framework
            you didn&apos;t have before — or makes you question one you did — that&apos;s a win.
          </p>
        </div>
      </div>

      {/* Recent posts */}
      <div className="bg-slate-50 px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-heading">Recent articles</h2>
            <Link
              href="/blog"
              className="text-sm font-semibold text-teal-600 hover:text-teal-800 transition-colors flex items-center gap-1"
            >
              View all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <NewsletterCTA />
    </div>
  );
}
