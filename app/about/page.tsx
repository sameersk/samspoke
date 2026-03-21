import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import NewsletterCTA from "@/components/NewsletterCTA";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sameer is a writer and analyst exploring the intersection of business strategy, data analytics, AI, and sustainability — based in Singapore.",
};

const focusAreas = [
  {
    icon: "🤖",
    title: "AI & Technology",
    desc: "How artificial intelligence is transforming industries, workflows, and decision-making.",
  },
  {
    icon: "🌱",
    title: "Sustainability",
    desc: "The business case for green, the tensions between growth and planet, and what real progress looks like.",
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    desc: "Making sense of data to make better decisions — frameworks, pitfalls, and practical tools.",
  },
  {
    icon: "💼",
    title: "Business Strategy",
    desc: "How companies compete, adapt, and build lasting advantage in a changing world.",
  },
  {
    icon: "⚡",
    title: "Productivity",
    desc: "The habits, systems, and environments that help individuals do their best work consistently.",
  },
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
                I&apos;m a writer and analyst exploring the intersection of business
                strategy, data analytics, artificial intelligence, and
                sustainability. Based in Singapore, I write to make complex ideas
                accessible and actionable.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                From how AI is reshaping industries to the small habits that
                compound into big results — samspoke is my space to think in
                public, share what I&apos;m learning, and start conversations about
                the ideas that matter.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/blog" className="btn-primary">Read the Blog</Link>
                <Link href="#newsletter" className="btn-outline">Subscribe</Link>
              </div>
            </div>

            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-teal-100 to-slate-100 opacity-70" />
                <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="/headshot.jpg"
                    alt="Sameer — writer and analyst"
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

      {/* What I write about */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10">
          <h2 className="section-heading">What I write about</h2>
          <p className="section-subheading">Five lenses on the modern world of work and technology.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {focusAreas.map((area) => (
            <div key={area.title} className="card p-6 hover:border-teal-200 hover:bg-teal-50/30 transition-all">
              <span className="text-3xl mb-3 block">{area.icon}</span>
              <h3 className="font-bold text-slate-900 mb-2">{area.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why I write */}
      <div className="bg-slate-50 px-4 sm:px-6 lg:px-8 py-20 border-t border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <span className="tag tag-teal mb-4 inline-block">Philosophy</span>
          <h2 className="section-heading mb-6">Why I write</h2>
          <div className="space-y-4 text-slate-600 text-base leading-relaxed">
            <p>
              Writing forces clarity. Most ideas sound good in your head — it&apos;s
              only when you try to explain them on paper that you discover whether
              they actually hold up. That tension between thinking and writing is
              where the interesting work happens.
            </p>
            <p>
              I started samspoke because I wanted a place to work through
              ideas at the intersection of business and technology — topics I care
              about and find genuinely interesting, not just professionally relevant.
              The goal has always been to write things I&apos;d want to read myself:
              clear-eyed, evidence-informed, and useful without being preachy.
            </p>
            <p>
              If something I write makes you see a problem differently, or gives
              you a framework you didn&apos;t have before, that&apos;s a win. If it
              starts a conversation — even better.
            </p>
          </div>
        </div>
      </div>

      {/* Recent posts */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-heading">Recent articles</h2>
          <Link href="/blog" className="text-sm font-semibold text-teal-600 hover:text-teal-800 transition-colors flex items-center gap-1">
            View all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <NewsletterCTA />
    </div>
  );
}
