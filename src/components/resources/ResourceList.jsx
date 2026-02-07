import Image from "next/image";

const books = [
    {
        title: "The Body Keeps the Score",
        author: "Bessel van der Kolk",
        desc: "Essential reading for understanding how trauma affects the body and mind.",
        color: "bg-[#E6E0D6]"
    },
    {
        title: "Attached",
        author: "Amir Levine & Rachel Heller",
        desc: "A practical guide to understanding your attachment style and relationships.",
        color: "bg-[#D8DCD6]"
    },
    {
        title: "Burnout",
        author: "Emily Nagoski & Amelia Nagoski",
        desc: "The secret to unlocking the stress cycle and reclaiming your life.",
        color: "bg-[#F3EFE7]"
    }
];

const apps = [
    {
        title: "Calm",
        desc: "Meditation and sleep stories to help reduce anxiety and improve sleep quality.",
        tag: "Mindfulness"
    },
    {
        title: "Insight Timer",
        desc: "A vast library of free meditations for stress, focus, and sleep.",
        tag: "Meditation"
    },
    {
        title: "Daylio",
        desc: "A micro-journaling app to track your mood and activities without writing words.",
        tag: "Tracking"
    }
];

export default function ResourceList() {
    return (
        <section id="resources-list" className="py-24 px-6 max-w-7xl mx-auto">

            {/* Books Section */}
            <div className="mb-24">
                <div className="inline-block px-6 py-3 rounded-lg dark:bg-[#1E1E1E] mb-12 transition-colors duration-300 w-full md:w-auto">
                    <h2 className="lilac-heading text-3xl font-serif border-b border-green-900/10 dark:border-white/10 pb-2 inline-block">
                        Recommended Reading
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {books.map((book, idx) => (
                        <div key={idx} className={`${book.color} dark:!bg-[#1E1E1E] p-8 rounded-sm hover:-translate-y-1 transition duration-300 shadow-sm dark:shadow-none`}>
                            <h3 className="lilac-heading text-xl font-serif mb-1">{book.title}</h3>
                            <p className="text-xs uppercase tracking-widest text-green-900/60 dark:!text-white/60 mb-4">{book.author}</p>
                            <p className="lilac-text leading-relaxed text-sm">{book.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Digital Tools Section */}
            <div>
                <div className="inline-block px-6 py-3 rounded-lg dark:bg-[#1E1E1E] mb-12 transition-colors duration-300 w-full md:w-auto">
                    <h2 className="lilac-heading text-3xl font-serif border-b border-green-900/10 dark:border-white/10 pb-2 inline-block">
                        Digital Tools
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {apps.map((app, idx) => (
                        <div key={idx} className="border border-green-900/10 dark:border-white/10 p-8 rounded-sm hover:border-green-900/30 dark:hover:border-white/30 transition duration-300 group">
                            <span className="lilac-tag inline-block px-3 py-1 text-[10px] uppercase tracking-widest font-bold mb-4 rounded-full transition-colors">
                                {app.tag}
                            </span>
                            <h3 className="lilac-heading text-xl font-serif mb-3">{app.title}</h3>
                            <p className="lilac-text leading-relaxed text-sm">{app.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
