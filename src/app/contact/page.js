import ContactHero from "@/components/ContactHero";
import BookingSection from "@/components/BookingSection";
import OfficeSection from "@/components/OfficeSection";
import SocialSection from "@/components/SocialSection";

export const metadata = {
    title: "Contact - Lilac Template",
    description: "Get in touch for a free consultation at our Minneapolis office.",
};

export default function ContactPage() {
    return (
        <main>
            <ContactHero />
            <BookingSection />
            <OfficeSection />
            <SocialSection />
        </main>
    );
}
