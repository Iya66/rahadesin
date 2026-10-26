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
    name: "Ken Masters",
    username: "@kmasters",
    body: "“Our productivity has nearly doubled since onboarding. Automation features removed repetitive tasks, allowing our team to focus on building instead of managing operations.”",
    profile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Kira Athrun",
    username: "@kathrun",
    body: "“What surprised us most was how quickly our team adapted. Minimal learning curve, excellent documentation, and powerful features make it a must-have for modern SaaS companies.”",
    profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Lirael Nassun",
    username: "@lnassun",
    body: "“This is easily one of the most reliable tools we’ve adopted. The UI is intuitive, integrations are seamless, and it saves us countless hours every week.”",
    profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Jessica",
    username: "@jessica",
    body: "“Switching to this platform streamlined our entire workflow. Setup was effortless, performance improved instantly, and our team now ships features faster.”",
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
    <Card className="relative h-full w-72 cursor-pointer overflow-hidden border-border bg-card shadow-sm hover:shadow-md transition-shadow p-4">
      <CardContent className="p-0 flex flex-col gap-2">
        <div className="flex flex-row items-center gap-3">
          <img
            className="rounded-full object-cover w-9 h-9"
            width="36"
            height="36"
            alt={name}
            src={profile}
          />
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-foreground">{name}</p>
            <p className="text-xs font-medium text-muted-foreground">
              {username}
            </p>
          </div>
        </div>
        <p className="text-sm line-clamp-3 text-foreground/90 leading-relaxed">{body}</p>
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
