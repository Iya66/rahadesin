import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee-01-utils/marquee";

export interface ReviewItem {
  name: string;
  username: string;
  body: string;
  profile: string;
}

export interface TestimonialMarqueeProps {
  reviews?: ReviewItem[];
  className?: string;
}

const defaultReviews: ReviewItem[] = [
  {
    name: "VIJAY",
    username: "@lonely_feels_",
    body: "“Absolutely loved the interior work done for our home! Beautiful designs, excellent finishing, and great attention to detail.”",
    profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Karthik R.",
    username: "@karthik_pdy",
    body: "“Very professional team and on-time completion. The modular kitchen and false ceiling design completely transformed our living space. Highly recommended!”",
    profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Anitha Sundaram",
    username: "@anitha_s",
    body: "“Great craftsmanship on the custom wardrobes and storage joinery. They listened patiently to our requirements and delivered exactly what we envisioned.”",
    profile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Suresh Kumar",
    username: "@suresh_k",
    body: "“Quality materials and neat execution. From the initial layout planning to the final finishing touches, the whole journey was smooth and completely stress-free.”",
    profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Priya & Rajesh",
    username: "@priya_rajesh",
    body: "“RAHA designed our 3BHK interior in Pondicherry. The living room TV unit and lighting work gave our home such a luxury hotel feel. Worth every rupee!”",
    profile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Mohammed Arshad",
    username: "@arshad_m",
    body: "“Superb interior decorators in Puducherry. Clean work, transparent estimation, and polite carpenters. Would definitely hire them again!”",
    profile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Dr. Meenakshi V.",
    username: "@dr_meenakshi",
    body: "“The clinic reception and consulting room interiors look stunning and soothing. All our patients praise the ambience and modern wall paneling.”",
    profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Vignesh S.",
    username: "@vignesh_decor",
    body: "“Modern false ceiling with profile LED lighting and customized pooja unit came out beyond our expectations. Thank you RAHA team!”",
    profile: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
  },
];

const ReviewCard = ({
  profile,
  name,
  username,
  body,
}: {
  profile: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <Card className="relative h-full w-80 cursor-pointer overflow-hidden border-border/60 bg-card/90 shadow-sm hover:shadow-md transition-all p-4">
      <CardContent className="p-0 flex flex-col gap-2.5">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-3">
            <img
              className="rounded-full object-cover w-9 h-9 border border-border"
              width="36"
              height="36"
              alt={name}
              src={profile}
            />
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-foreground leading-tight">{name}</p>
              <p className="text-xs font-medium text-muted-foreground">
                {username}
              </p>
            </div>
          </div>
          <span className="text-xs text-[#e6b885] tracking-widest font-semibold" aria-label="5 stars">★★★★★</span>
        </div>
        <p className="text-sm line-clamp-3 text-foreground/90 leading-relaxed font-serif italic">{body}</p>
        <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 font-medium">
            <svg className="w-3 h-3" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/></svg>
            Google Verified
          </span>
          <span className="text-[#d8a989] font-medium">Puducherry</span>
        </div>
      </CardContent>
    </Card>
  );
};

export function TestimonialMarqueeDemo({
  reviews = defaultReviews,
  className = "",
}: TestimonialMarqueeProps) {
  const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
  const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

  return (
    <div className={`relative flex w-full flex-col items-center justify-center overflow-hidden py-4 ${className}`}>
      <Marquee pauseOnHover className="[--duration:25s]">
        {firstRow.map((review, i) => (
          <ReviewCard key={`${review.username}-${i}`} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25s]">
        {secondRow.map((review, i) => (
          <ReviewCard key={`${review.username}-${i}`} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}

export default TestimonialMarqueeDemo;
