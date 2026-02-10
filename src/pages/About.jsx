import {
  Briefcase,
  GraduationCap,
  Building2,
  Code2,
  Award,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import ajayImg from "../assets/AjayR.jpg";
import rohanImg from "../assets/RohanR.jpg";

const leadership = [
  {
    name: "Ajay Ramani",
    role: "Director & Founder",
    tagline: "The Strategic Architect",
    image: ajayImg,
    initials: "AR",
    bio: "A seasoned industry veteran with over 30 years of executive experience across Telecom, Distribution, and High-Volume Sales. Rising from humble roots in Madhya Pradesh to key leadership roles at global conglomerates like Samsung, Reliance, and Tata Group, Ajay is the operational bedrock of Fresh & Select.",
    extendedBio:
      "A serial entrepreneur and distinguished visiting consultant to leading hedge funds, he ensures the company operates with the financial discipline of a Fortune 500 firm and the agility of a startup.",
    highlights: [
      { icon: <Briefcase size={16} />, text: "30+ Years Executive Experience" },
      { icon: <Building2 size={16} />, text: "Samsung, Reliance, Tata Group" },
      { icon: <TrendingUp size={16} />, text: "Serial Entrepreneur" },
      { icon: <Award size={16} />, text: "Hedge Fund Consultant" },
    ],
  },
  {
    name: "Rohan Ajay Ramani",
    role: "Director — Ops & Tech",
    tagline: "The Tech Operator",
    image: rohanImg,
    initials: "RR",
    bio: "Rohan brings Silicon Valley-grade process efficiency to logistics. An IIT Madras Data Science alumnus and SRM Academic Medalist, his background is steeped in high-frequency technology.",
    extendedBio:
      "Formerly a Software Engineer at JPMorgan Chase, he optimizes global market ecosystems. At Fresh & Select, he applies this rigor to the ground level — implementing Ozone washing for safety and data analytics for pick-path optimization. A former Airbnb Superhost and Associate at Adani Wilmar, Rohan ensures every dark store runs like a refined algorithm.",
    highlights: [
      { icon: <GraduationCap size={16} />, text: "IIT Madras — Data Science" },
      { icon: <Code2 size={16} />, text: "Ex-JPMorgan Chase Engineer" },
      { icon: <Award size={16} />, text: "SRM Academic Medalist" },
      { icon: <Building2 size={16} />, text: "Ex-Adani Wilmar Associate" },
    ],
  },
];

export default function About() {
  return (
    <div className="bg-cream">
      {/* ─── Section Header ─── */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-semibold text-forest/60 uppercase tracking-widest mb-3">
            Our Story
          </p>
          <h1 className="font-heading text-2xl md:text-3xl font-semibold text-forest mb-3">
            Leadership & Legacy
          </h1>
          <p className="text-forest/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            30 years of operational excellence. Built from the ground up. Trusted by
            India's fastest platforms.
          </p>
        </div>
      </section>

      {/* ─── Company Story ─── */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl border border-forest/5 p-8 md:p-12 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-forest mb-6">
              About Fresh & Select
            </h2>
            <div className="space-y-4 text-forest/70 leading-relaxed">
              <p>
                <strong className="text-forest">Fresh & Select Groceries Private Limited</strong> is
                India's premier warehousing and fulfillment agency, specializing in dark
                store operations for the Quick Commerce sector.
              </p>
              <p>
                We manage a network of <strong className="text-forest">25+ dark stores</strong> for
                India's leading platforms — Zepto, Blinkit, and Amazon Now — processing
                thousands of orders daily across the Mumbai Metropolitan Region.
              </p>
              <p>
                Our mission is simple: bring institutional-grade operational excellence to
                the hyper-local delivery ecosystem. From Ozone washing protocols to
                AI-powered inventory management, we combine grassroots operational scale
                with cutting-edge technology.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-10 border-t border-forest/5">
              {[
                { value: "25+", label: "Dark Stores" },
                { value: "30+", label: "Years Experience" },
                { value: "99.9%", label: "Accuracy Rate" },
                { value: "3", label: "Platform Partners" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-heading text-2xl md:text-3xl font-bold text-forest">
                    {stat.value}
                  </div>
                  <div className="text-xs text-forest/50 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Leadership Cards ─── */}
      <section className="py-20 px-6 bg-forest/[0.03]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-forest/60 max-w-lg mx-auto">
              The vision and expertise driving India's most reliable dark store network.
            </p>
          </div>

          <div className="space-y-10">
            {leadership.map((person, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl border border-forest/5 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Photo / Avatar Side */}
                  <div className="lg:w-80 bg-gradient-to-br from-forest to-forest-600 flex items-center justify-center p-12 lg:p-16">
                    <div className="w-40 h-40 rounded-full bg-white/10 border-4 border-white/20 overflow-hidden flex items-center justify-center">
                      {person.image ? (
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="font-heading text-5xl font-bold text-white">
                          {person.initials}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="flex-1 p-8 md:p-12">
                    <span className="inline-block text-xs font-semibold text-coral uppercase tracking-widest mb-2">
                      {person.tagline}
                    </span>

                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-forest mb-1">
                      {person.name}
                    </h3>
                    <p className="text-sm text-forest/50 font-medium mb-6">
                      {person.role}
                    </p>

                    <p className="text-forest/70 leading-relaxed mb-4">
                      {person.bio}
                    </p>
                    <p className="text-forest/70 leading-relaxed mb-8">
                      {person.extendedBio}
                    </p>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {person.highlights.map((h, hi) => (
                        <div
                          key={hi}
                          className="flex items-center gap-3 bg-forest/5 rounded-xl px-4 py-3"
                        >
                          <div className="text-forest">{h.icon}</div>
                          <span className="text-sm text-forest/80 font-medium">
                            {h.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
