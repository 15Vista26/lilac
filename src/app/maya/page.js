import MayaHero from "@/components/maya/MayaHero";
import MayaServices from "@/components/maya/MayaServices";
import MayaAbout from "@/components/maya/MayaAbout";
import MayaOffice from "@/components/maya/MayaOffice";
import MayaFAQ from "@/components/maya/MayaFAQ";

export default function MayaPage() {
    return (
        <div className="bg-maya-bg text-maya-text min-h-screen font-sans selection:bg-maya-accent selection:text-white">
            <MayaHero />
            <MayaServices />
            <MayaAbout />
            <MayaOffice />
            <MayaFAQ />
            {/* Footer will be validated next */}
        </div>
    );
}
