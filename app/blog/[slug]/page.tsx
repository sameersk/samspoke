import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";
import NewsletterCTA from "@/components/NewsletterCTA";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const ogImage = post.image || "https://samspoke.com/og-default.jpg";

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://samspoke.com/blog/${post.slug}`,
      siteName: "samspoke",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 600,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
      creator: "@samspoke",
    },
  };
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const categoryColors: Record<string, string> = {
    "AI & Technology": "bg-blue-50 text-blue-700",
    Sustainability: "bg-emerald-50 text-emerald-700",
    "Data & Analytics": "bg-violet-50 text-violet-700",
    Productivity: "bg-amber-50 text-amber-700",
  };
  const colorClass =
    categoryColors[post.category] ?? "bg-slate-100 text-slate-600";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-50 to-teal-50 px-4 sm:px-6 lg:px-8 pt-14 pb-12 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-teal-600 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-slate-600 truncate max-w-[200px]">
              {post.title}
            </span>
          </nav>

          <span className={`tag ${colorClass} mb-4 inline-block`}>
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed mb-6">
            {post.excerpt}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-xs">
                S
              </div>
              <span className="font-medium text-slate-700">Sameer</span>
            </div>
            <span>·</span>
            <time>{post.date}</time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </div>

      {/* Article image */}
      {post.image && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        </div>
      )}

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author / Subscribe row */}
        <div className="border-t border-slate-100 mt-12 pt-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold">
                S
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Written by Sameer
                </p>
                <p className="text-xs text-slate-400">
                  samspoke.com · Singapore
                </p>
              </div>
            </div>
            <Link href="#newsletter" className="btn-primary text-sm">
              Subscribe to the newsletter
            </Link>
          </div>
        </div>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <div className="bg-slate-50 px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              More articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Newsletter */}
      <NewsletterCTA />
    </div>
  );
}
