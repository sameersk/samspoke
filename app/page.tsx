import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedPosts from "@/components/FeaturedPosts";
import BlogGrid from "@/components/BlogGrid";
import NewsletterCTA from "@/components/NewsletterCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedPosts />
      <AboutSection />
      <BlogGrid />
      <NewsletterCTA />
    </>
  );
}
