import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-10 py-20 grid md:grid-cols-2 gap-16 items-center">
      
      {/* Left Content */}
      <div>
        <p className="uppercase tracking-widest text-sm mb-4">
          Minneapolis, MN
        </p>

        <h2 className="text-5xl font-serif leading-tight mb-6">
          Helping you feel <br /> more like yourself
        </h2>

        <p className="text-lg mb-8 max-w-md">
          Therapy for adults navigating anxiety, burnout, and
          life transitions.
        </p>

        <button className="border border-black px-8 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition">
          CONNECT WITH ME →
        </button>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <Image
          src="/images/hero.webp"
          alt="Hero"
          width={420}
          height={520}
          className="rounded-full object-cover"
          priority
        />
      </div>
    </section>
  );
}