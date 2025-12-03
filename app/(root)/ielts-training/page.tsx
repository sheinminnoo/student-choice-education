import type { Metadata } from "next";
import IELTSHeroSlider from "./components/IELTSHeroSlider";
import IeltsIntroSection from "./components/IeltsIntroSection";
import IeltsCoursesOverviewSection from "./components/IeltsCoursesOverviewSection";
import BandScoreSection from "./components/BandScoreSection";
import IeltsWritingCourseSection from "./components/IeltsWritingCourseSection";
import StudyWithoutIeltsSection from "./components/StudyWithoutIeltsSection";
import IeltsBenefitsGridSection from "./components/IeltsBenefitsGridSection";
import IeltsEnquiryForm from "./components/IeltsEnquiryForm";
import IeltsFoundationCourseSection from "./components/IeltsFoundationCourseSection";
import IeltsSpeakingCourseSection from "./components/IeltsSpeakingCourseSection";

export const metadata: Metadata = {
  title:
    "IELTS Training with British Council Partner | Student Choice Education",
  description:
    "Structured IELTS Academic and UKVI preparation for UK study and visas, delivered by British Council–trained advisers.",
};

export default function IeltsTrainingPage() {
  return (
    <main className="bg-white text-slate-900">
      <IELTSHeroSlider />
      <IeltsIntroSection />
      <IeltsCoursesOverviewSection />
      <IeltsFoundationCourseSection />
      <IeltsWritingCourseSection />
      <IeltsSpeakingCourseSection />
      <StudyWithoutIeltsSection />
      <IeltsBenefitsGridSection />
      <IeltsEnquiryForm />
    </main>
  );
}
