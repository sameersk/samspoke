import Link from "next/link";
import type { Post } from "@/lib/posts";

const categoryColors: Record<string, string> = {
  "AI & Technology": "bg-blue-50 text-blue-700",
  Sustainability: "bg-emerald-50 text-emerald-700",
  Analytics: "bg-violet-50 text-violet-700",
  Productivity: "bg-amber-50 text-amber-700",
  Business: "bg-teal-50 text-teal-700",
};

export default function BlogCard({ post }: { post: Post }) {
  const colorClass = categoryColors[post.category] ?? "bg-slate-100 text-slate-600";
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="card h-full flex flex-col p-6 hover:border-teal-200 transition-all duration-200">
        <div className="flex items-center justify-between mb-4">
          <span className={`tag ${colorClass}`}>{post.category}</span>
          <span className="text-xs text-slate-400">{post.readingTime}</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-teal-700 transition-colors">{post.title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
          <time className="text-xs text-slate-400">{post.date}</time>
          <span className="text-xs font-semibold text-teal-600 group-hover:text-teal-800 flex items-center gap-1">
            Read more
            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </span>
        </div>
      </article>
    </Link>
  );
}
