import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Blog Post One",
    image: "/images/blog_post_1.png",
    link: "#"
  },
  {
    id: 2,
    title: "Blog Post Two",
    image: "/images/blog_post_2.png",
    link: "#"
  },
  {
    id: 3,
    title: "Blog Post Three",
    image: "/images/blog_post_3.png",
    link: "#"
  },
  {
    id: 4,
    title: "Blog Post Four",
    image: "/images/blog_post_4.png",
    link: "#"
  }
];

export default function BlogGrid() {
  return (
    <section className="px-6 py-24 bg-cream dark:bg-[#121212] transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-16">
        {blogPosts.map((post) => (
          <div key={post.id} className="group cursor-pointer">
            <div className="relative aspect-[4/3] w-full overflow-hidden mb-4">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-sans text-green-900 dark:text-cream mb-1 transition-colors duration-300">
              {post.title}
            </h3>
            <span className="text-xs font-bold text-green-900 dark:text-cream border-b border-green-900/40 dark:border-cream/40 pb-0.5 uppercase tracking-wide group-hover:border-green-900 dark:group-hover:border-cream transition-colors duration-300">
              Read More
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
