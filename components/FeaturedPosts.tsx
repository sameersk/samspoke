import Link from "next/link";
import { getFeaturedPosts } from "@/lib/posts";

const categoryColors: Record<string, string> = {
  "AI & Technology": "bg-blue-50 text-blue-700",
  Sustainability: "bg-emerald-50 text-emerald-700",
  Analytics: "bg-violet-50 text-violet-700",
  Productivity: "bg-amber-50 text-amber-700",
};

export default function FeaturedPosts() {
  const featured = getFeaturedPosts();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="tag tag-teal mb-2 inline-block">Featured</span>
            <h2 className="section-heading">Must-read articles</h2>
          </div>
          <Link href="/blog" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-teal-600 hover:text-teal-800 transition-colors">
            View all posts
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((post, i) => {
            const colorClass =
              categoryColors[post.category] ?? "bg-slate-100 text-slate-600";
            const isFirst = i === 0;

            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article
                  className={`relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 p-8 h-full flex flex-col ${
                    isFirst
                      ? "bg-gradient-to-br from-teal-700 to-teal-900 text-white"
                      : "bg-white"
                  }`}
                >
                  {/* Decorative circle */}
                  {isFirst && (
                    <div className="absolute top-0 right-0 w-48 h-48 bg-teal-600/30 rounded-full -translate-y-1/2 translate-x-1/4" />
                  )}

                  <div className="relative">
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className={`tag ${
                          isFirst
                            ? "bg-teal-600 text-teal-100"
                            : colorClass
                        }`}
                      >
                        {post.category}
                      </span>
                      <span
                        className={`text-xs ${
                          isFirst ? "text-teal-200" : "text-slate-400"
                        }`}
                      >
                        {post.readingTime}
                      </span>
                    </div>

                    <h3
                      className={`text-2xl font-bold mb-3 leading-snug group-hover:opacity-90 transition-opacity ${
                        isFirst ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {post.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed mb-6 flex-1 ${
                        isFirst ? "text-teal-100" : "text-slate-500"
                      }`}
                    >
                      {post.excerpt}
                    </p>

                    <div
                      className={`flex items-center justify-between pt-4 border-t ${
                        isFirst ? "border-teal-600" : "border-slate-100"
                      }`}
                    >
                      <time
                        className={`text-xs ${
                          isFirst ? "text-teal-200" : "text-slate-400"
                        }`}
                      >
                        {post.date}
                      </time>
                      <span
                        className={`text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all ${
                          isFirst ? "text-teal-100" : "text-teal-600"
                        }`}
                      >
                        Read article
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
