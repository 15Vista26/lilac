import Image from 'next/image';

export default function OfficeSection() {
    return (
        <section className="bg-[#8B8B6B] w-full flex flex-col md:flex-row">
            {/* Left: Info */}
            <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center text-cream">
                <div className="max-w-md mx-auto md:mx-0 space-y-12">
                    <div>
                        <h2 className="text-4xl font-serif mb-6">My Office</h2>
                        <div className="font-sans text-lg space-y-2">
                            <p>123 Example Street</p>
                            <p>Minneapolis, MN</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-serif mb-6">Hours</h2>
                        <div className="font-sans text-lg space-y-2">
                            <p>Monday – Friday</p>
                            <p>10am – 6pm</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Map */}
            {/* Right: Map */}
            <div className="md:w-1/2 relative bg-gray-200 min-h-[400px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180633.3768393539!2d-93.41249105437968!3d44.970675276536034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b333909377bbbd%3A0x939fc9842f7aee07!2sMinneapolis%2C%20MN!5e0!3m2!1sen!2sus!4v1707255866172!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '400px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                ></iframe>
            </div>
        </section>
    );
}
