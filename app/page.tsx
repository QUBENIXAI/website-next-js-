import FaqSection from "@/components/faq-section";
import Card1 from "@/components/what-we-do/Card1";

export default function Home() {
  return (
    <div className="flex w-full flex-1 flex-col items-center bg-background font-sans">
      <Card1 />
      <FaqSection />
    </div>
  );
}
