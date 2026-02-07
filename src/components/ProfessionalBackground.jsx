import Accordion from "./Accordion";

const backgroundItems = [
    {
        title: "Education",
        content: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea."
    },
    {
        title: "Licensure",
        content: "Content about licensure goes here. This area is expandable to show details."
    },
    {
        title: "Certifications",
        content: "Content about certifications goes here. This area is expandable to show details."
    }
];

export default function ProfessionalBackground() {
    return (
        <section className="bg-[#E6E0D6] dark:bg-dark-surface px-6 py-32 transition-colors duration-300">
            {/* Note: Screenshot shows this section might correspond to the beige background or similar. 
        Actually, looking at the scrollbar in screenshot #2 (batch 4), the 'My Professional Background' 
        seems to be on the same background as 'FAQ' which is Cream. 
        But wait, screenshot #2 shows a slightly darker background for this section? 
        The footer screenshot #4 is definitely two-tone. 
        Let's stick to 'bg-[#E6E0D6]' (muted) for Professional Background if it looks like a separate band,
        OR 'bg-cream' if it's seamless. 
        Screenshot #2 shows it's quite light, maybe just cream. 
        Let's use bg-[#E6E0D6] to match the footer bottom bar style if it's meant to be a contrast section, 
        or stick to cream. Let's use cream but ensure the lines are distinct.
        Actually, let's look at screenshot #2 again. It looks like the same background color as the rest.
        I will use 'bg-cream' for seamless look, but full width lines.
    */}
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-serif text-green-900 dark:text-cream text-center mb-16 transition-colors duration-300">
                    My Professional Background
                </h2>

                {/* Helper to style the accordion specifically for this section if needed, 
            but the generic Accordion component should work if passed correctly.
            We might need to adjust the Accordion component to allow custom styling or ensure it's minimal enough.
        */}
                <div className="border-t border-green-900/50 dark:border-white/50 transition-colors duration-300">
                    <Accordion items={backgroundItems} />
                </div>
            </div>
        </section>
    );
}
