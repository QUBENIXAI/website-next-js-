import Image from "next/image";
import FaqSection from "@/components/faq-section";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <FaqSection />
    </div>
  );
}
