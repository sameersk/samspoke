import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const categoryColors: Record<string, string> = {
    "AI & Technology": "bg-blue-50 text-blue-700",
    Sustainability: "bg-emerald-50 text-emerald-700",
    Analytics: "bg-violet-50 text-violet-700",
    Productivity: "bg-amber-50 text-amber-700",
  };
  const colorClass = categoryColors[post.category] ?? "bg-slate-100 text-slate-600";

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-slate-50 to-teal-50 px-4 sm:px-6 lg:px-8 pt-14 pb-12 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-teal-600 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-slate-600 truncate max-w-[200px]">{post.title}</span>
          </nav>
          <span className={`tag ${colorClass} mb-4 inline-block`}>{post.category}</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed mb-6">{post.excerpt}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-xs">S</div>
              <span className="font-medium text-slate-700">Sameer</span>
            </div>
            <span>·</span>
            <time>{post.date}</time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className="border-t border-slate-100 mt-12 pt-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold">S</div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Written by Sameer</p>
                <p className="text-xs text-slate-400">samspoke.com · Singapore</p>
              </div>
            </div>
            <Link href="#newsletter" className="btn-primary text-sm">Subscribe to the newsletter</Link>
          </div>
        </div>
      </div>
      {related.length > 0 && (
        <div className="bg-slate-50 px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-bold text-slate-900 mb-6">More articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((p) => (<BlogCard key={p.slug} post={p} />))}
            </div>
          </div>
        </div>
      )}
      <section id="newsletter" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-700 to-teal-900 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">Enjoyed this article?</h2>
          <p className="text-teal-200 mb-6 text-sm">Get new articles delivered to your inbox — free, weekly.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-lg bg-white text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300" />
            <button type="submit" className="px-5 py-3 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition-colors text-sm shrink-0">Subscribe Free</button>
          </form>
        </div>
      </section>
    </div>
  );
}
