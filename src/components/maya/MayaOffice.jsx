import Image from "next/image";

export default function MayaOffice() {
    return (
        <section className="bg-white dark:bg-dark-bg py-24 px-10 transition-colors duration-300 border-4 border-red-500">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <p className="uppercase tracking-widest text-sm text-maya-primary dark:text-maya-accent font-medium mb-3 transition-colors duration-300">
                    The Space
                </p>
                <h2 className="text-4xl font-playfair text-maya-text dark:text-cream transition-colors duration-300">
                    A Calm Space for Healing
                </h2>
                <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
                    My Santa Monica office is designed to be a quiet, private sanctuary where you can step away from the noise of daily life. With natural light and a comfortable, uncluttered environment, the space itself supports the work of slowing down and reconnecting.
                </p>
            </div>

            {/* Image Grid - Updated for 2 images */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg shadow-md">
                    <Image
                        src="/officeImages/office1.jpeg"
                        alt="Therapy Office Seating"
                        fill
                        className="object-cover hover:scale-105 transition duration-700"
                    />
                </div>
                <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg shadow-md md:mt-12">
                    <Image
                        src="/officeImages/office2.jpeg"
                        alt="Natural Light in Office"
                        fill
                        className="object-cover hover:scale-105 transition duration-700"
                    />
                </div>
            </div>

            <div className="text-center mt-12 space-y-4">
                <div className="mb-8 max-w-lg mx-auto">
                    <p className="text-lg font-serif italic text-maya-primary dark:text-maya-accent mb-2">
                        "Your sanctuary for growth and healing."
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Conveniently located in the heart of Santa Monica, accessible yet tucked away for your privacy.
                    </p>
                </div>

                <div>
                    <p className="text-base font-semibold text-maya-text dark:text-cream transition-colors duration-300">
                        123th Street 45 W, Santa Monica, CA 90401
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 transition-colors duration-300 uppercase tracking-wider">
                        In-person & Secure Telehealth Available
                    </p>
                </div>
            </div>
        </section>
    );
}
