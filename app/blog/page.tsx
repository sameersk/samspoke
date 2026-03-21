import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on business strategy, AI, sustainability, analytics, and productivity by Sameer.",
};

const categories = ["All", "AI & Technology", "Sustainability", "Analytics", "Productivity"];

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-slate-50 to-teal-50 px-4 sm:px-6 lg:px-8 pt-16 pb-14 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <span className="tag tag-teal mb-3 inline-block">Writing</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            The Blog
          </h1>
          <p className="text-slate-500 text-lg max-w-xl">
            Practical insights on the forces reshaping business, technology, and
            everyday life. New articles every week.
          </p>
          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                  i === 0
                    ? "bg-teal-600 text-white"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-teal-300 hover:text-teal-700"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
