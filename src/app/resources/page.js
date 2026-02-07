import ResourceHero from "@/components/resources/ResourceHero";
import ResourceList from "@/components/resources/ResourceList";
import CrisisSupport from "@/components/resources/CrisisSupport";

export const metadata = {
    title: "Resources | Lilac",
    description: "Curated tools, reading lists, and support for your healing journey.",
};

export default function ResourcesPage() {
    return (
        <div className="bg-cream min-h-screen font-sans text-green-900">
            <ResourceHero />
            <ResourceList />
            <CrisisSupport />
        </div>
    );
}
