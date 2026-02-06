import Image from 'next/image';

export default function ContactHero() {
    return (
        <section className="bg-cream pt-20 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-6xl md:text-7xl font-serif text-green-900 mb-16">
                    Let’s Connect
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column: Text + Images */}
                    <div className="space-y-12">
                        <div className="space-y-6 text-green-900 font-sans text-lg">
                            <p>Starting therapy is courageous.</p>
                            <p>
                                Get in touch for questions, or to book a free 15-minute
                                consultation.
                            </p>
                        </div>

                        {/* Overlapping Images Container */}
                        <div className="relative w-full max-w-md h-[500px] mt-12 mx-auto lg:mx-0">
                            {/* Main Arched Image */}
                            <div className="absolute top-0 left-0 w-[80%] h-[90%] rounded-t-[1000px] overflow-hidden z-0">
                                <div className="w-full h-full bg-sage/20 relative">
                                    <Image
                                        src="/images/contact-hero.webp"
                                        alt="Person holding purple lilacs"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Overlay Circle Image */}
                            <div className="absolute bottom-0 right-0 w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-8 border-cream z-10">
                                <div className="w-full h-full relative">
                                    <Image
                                        src="/images/contact-overlay.webp"
                                        alt="White flowers detail"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Disclaimer Box */}
                    <div>
                        <div className="bg-green-900 text-cream p-12 md:p-16 h-full flex flex-col justify-center">
                            <p className="font-sans text-lg leading-relaxed">
                                <strong className="font-bold">PLEASE NOTE:</strong> If you opt to use a “Form Block” on your contact
                                page this is not HIPAA-compliant. Squarespace stores data that is
                                input into forms in the Marketing tab under Profiles. Instead, you
                                can embed a HIPAA-compliant form, a link to your client portal, or
                                simply put your email address.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
