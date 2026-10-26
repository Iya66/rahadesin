import TestimonialMarquee from "@/components/ui/marquee-01";
import InteractiveSelector from "@/components/ui/interactive-selector";

export function DemoDefault() {
  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-serif font-semibold text-center mb-6">Client Feedback &amp; Reviews</h2>
      <TestimonialMarquee />
    </div>
  );
}

export function DemoOne() {
  return (
    <div className="w-full min-h-screen">
      <InteractiveSelector />
    </div>
  );
}

export default DemoDefault;
