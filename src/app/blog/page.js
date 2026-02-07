import BlogHero from "@/components/blog/BlogHero";
import SubscribeSection from "@/components/blog/SubscribeSection";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata = {
    title: "The Lilac Blog",
    description: "Healing, heart, and wholeness.",
};

export default function BlogPage() {
    return (
        <div className="bg-cream min-h-screen">
            <BlogHero />
            <SubscribeSection />
            <BlogGrid />
        </div>
    );
}
