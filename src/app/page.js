import HeroSection from "@/components/HeroSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import BioSection from "@/components/BioSection";
import ProfessionalBackground from "@/components/ProfessionalBackground";
import FAQSection from "@/components/FAQSection";
// import IssuesSection from "@/components/IssuesSectionTwo";
import IssuesSectionOne from "@/components/IssuesSectionOne";
import IssuesSectionTwo from "@/components/IssuesSectionTwo";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <IssuesSectionOne />
      <SpecialtiesSection />
      <IssuesSectionTwo />
      <BioSection />
      <FAQSection />
      <ProfessionalBackground />
      <CTASection />
    </div>
  );
}