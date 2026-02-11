import { useEffect, useRef, useState } from "react";
import mangalaPatternOne from "../assets/mangala pattern-1.png";
import mangalaPatternTwo from "../assets/mangala pattern-2.png";
import mangalaPatternThree from "../assets/mangala pattern-3.png";

function AnimatedCounter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const step = end / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function MetricsTicker() {
  const metrics = [
    {
      value: 20,
      suffix: "+",
      label: "Dark Store Operations",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      value: 99.9,
      suffix: "%",
      label: "Technology Platform",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      value: 2,
      suffix: " Min",
      label: "Last-Mile Support",
      prefix: "< ",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {metrics.map((metric, i) => (
        <div
          key={i}
          className="relative group bg-[#FCF8F0] border border-forest/10 rounded-2xl p-6 text-center shadow-md shadow-forest/10 transition-all duration-300 overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.12]"
            style={{
              backgroundImage: `url(${mangalaPatternOne}), url(${mangalaPatternTwo}), url(${mangalaPatternThree})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "520px auto, 520px auto, 520px auto",
              backgroundPosition: "-80px -60px, 50% 10%, calc(100% + 60px) calc(100% + 40px)",
            }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-forest/5 text-forest mb-3">
              {metric.icon}
            </div>
            <div className="font-heading text-3xl font-bold text-forest">
              {metric.prefix || ""}
              <AnimatedCounter end={metric.value} suffix={metric.suffix} />
            </div>
            <p className="text-sm text-forest/60 mt-1 font-medium">{metric.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
