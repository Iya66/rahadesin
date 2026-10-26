import TestimonialMarquee from "@/components/ui/marquee-01";

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-[#1c1e17] text-[#f7f4ee] flex flex-col justify-between selection:bg-[#d8a989] selection:text-[#1c1e17]">
      {/* Top Bar */}
      <header className="border-b border-white/10 bg-[#1c1e17]/80 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 text-inherit no-underline">
            <span className="w-8 h-8 rounded-full border border-white/20 grid place-items-center text-xs font-serif italic text-[#d8a989]">
              R
            </span>
            <div className="flex flex-col leading-none">
              <strong className="text-sm tracking-wider font-serif">RAHA</strong>
              <span className="text-[9px] tracking-widest text-[#d8a989] uppercase">Interior Decors</span>
            </div>
          </a>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a href="/" className="text-[#c9c8bc] hover:text-white transition-colors">
              ← Back to Home
            </a>
            <a
              href="https://maps.app.goo.gl/C9ShEj7ArCXMQ7H77"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded border border-[#d8a989]/40 text-[#d8a989] hover:bg-[#d8a989]/10 transition-colors"
            >
              Google Reviews ↗
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 px-4 flex-1 flex flex-col items-center justify-center">
        <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
          {/* Header */}
          <div className="text-center max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-widest text-[#d8a989] font-bold mb-3">
              Client Feedback &amp; Testimonials
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4 text-[#fbf7ee]">
              Loved by homeowners in Puducherry.
            </h1>
            <p className="text-sm md:text-base text-[#c9c8bc] leading-relaxed">
              Real experiences from people who trusted RAHA INTERIOR DECORS to transform their spaces.
            </p>
            <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
              <span className="text-[#e6b885] tracking-widest text-lg">★★★★★</span>
              <span className="font-semibold text-base md:text-lg">5.0 on Google Maps</span>
              <span className="text-white/20">|</span>
              <a
                href="https://maps.app.goo.gl/C9ShEj7ArCXMQ7H77"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-[#e6b885] hover:underline"
              >
                Read or Leave a Review ↗
              </a>
            </div>
          </div>

          {/* Marquee Showcase */}
          <div className="w-full">
            <TestimonialMarquee />
          </div>

          {/* CTA */}
          <div className="mt-16 text-center max-w-md mx-auto">
            <p className="text-sm text-[#b4b5a8] mb-4">Ready to create a space that feels like yours?</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#d8a989] text-[#1c1e17] hover:bg-[#e4bba0] font-semibold text-xs tracking-wider transition-all"
              >
                Start Your Project ↗
              </a>
              <a
                href="tel:+919080612510"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-white/20 text-white hover:bg-white/5 font-semibold text-xs tracking-wider transition-all"
              >
                Call +91 90806 12510
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-xs text-[#8a8a7e]">
        <p>© {new Date().getFullYear()} RAHA INTERIOR DECORS · Puducherry, India · All reviews verified on Google Maps</p>
      </footer>
    </div>
  );
}
