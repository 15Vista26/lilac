import Image from 'next/image';
export default function BookingSection() {
    return (
        <section className="bg-cream py-20 px-6 border-t border-green-900/10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-4xl md:text-5xl font-serif text-green-900">
                    Book an appointment.
                </h2>
                <p className="text-green-900 font-sans max-w-2xl mx-auto">
                    Add some text here if you like, and add your scheduling widget below (you can get one by
                    signing up for a scheduling account through Squarespace, the top-tier plan is HIPAA
                    compliant OR you can use your client portal).
                </p>

                {/* Widget Placeholder */}
                <div className="mt-12 bg-white p-12 shadow-sm border border-gray-200 inline-block min-w-[300px]">
                    <h3 className="font-serif text-xl mb-4">This page is not active</h3>
                    <p className="text-xs text-gray-500 mb-6 max-w-xs mx-auto">
                        If you're the owner, please log into your account to start a free trial or subscribe.
                    </p>
                    <button className="bg-black text-white px-6 py-3 text-xs uppercase tracking-widest font-bold">
                        Go to Account
                    </button>
                </div>

                {/* Powered by text */}
                <div className="mt-8 flex flex-col items-center justify-center space-y-1">
                    <span className="font-sans text-sm text-gray-600">Powered by</span>
                    <span className="font-serif text-2xl font-bold text-black tracking-tight">
                        acuity:scheduling
                    </span>
                </div>

            </div>
        </section>
    );
}
