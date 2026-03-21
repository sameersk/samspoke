import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/posts";

export default function BlogGrid() {
  const posts = getAllPosts();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="tag tag-teal mb-2 inline-block">All Articles</span>
            <h2 className="section-heading">Latest writing</h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-1 text-sm font-semibold text-teal-600 hover:text-teal-800 transition-colors"
          >
            See all posts
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/blog" className="btn-outline">
            Browse all articles
          </Link>
        </div>
      </div>
    </section>
  );
}
