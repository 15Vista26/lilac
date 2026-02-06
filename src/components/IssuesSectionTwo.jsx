import Image from "next/image";
import Link from "next/link";

export default function IssuesSectionTwo() {
    return (
        <section className="w-full">

            {/* Bottom Part: Split Layout (Image Left, Text Right) */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left: Image */}
                <div className="relative min-h-[500px] bg-muted">
                    <Image
                        src="/images/issuesOne.webp"
                        alt="Woman seeking help"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="bg-[#C6C5D0] p-12 md:p-20 flex flex-col justify-center">
                    {/* Note: Background color updated to match screenshot lavender/grey #C6C5D0 */}

                    <h2 className="text-5xl font-serif text-green-900 mb-8">
                        You don’t have to do this all alone.
                    </h2>
                    <p className="font-sans text-lg text-green-900 mb-8">
                        If you are facing any of these, there's hope:
                    </p>
                    <ul className="space-y-4 font-sans text-lg text-green-900 list-disc pl-5 marker:text-green-900">
                        <li>Persistent feelings of sadness or hopelessness</li>
                        <li>Trouble focusing or making decisions</li>
                        <li>Difficulty maintaining relationships</li>
                        <li>Feeling constantly exhausted or unmotivated</li>
                        <li>A pervasive sense of being overwhelmed</li>
                    </ul>

                    <p className="mt-12 font-sans text-lg text-green-900">
                        With empathy and guidance, we'll work together to navigate the challenges life throws your way.
                    </p>

                    <div className="mt-12 bg-green-900 text-cream p-4 text-center">
                        <Link href="/contact" className="uppercase tracking-widest text-sm hover:opacity-90">
                            Work With Me →
                        </Link>
                    </div>
                </div>
            </div>

            
        </section>
    );
}
