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
import mangalaPatternOne from "../assets/mangala pattern-1.png";
import mangalaPatternTwo from "../assets/mangala pattern-2.png";
import mangalaPatternThree from "../assets/mangala pattern-3.png";

const leadership = [
  {
    name: "Ajay Ramani",
    role: "Founder & Director",
    tagline: "",
    image: ajayImg,
    initials: "AR",
    bio:
      "A veteran of scale with over 30 years of executive leadership in Telecom, FMCG distribution, and Sales. Ajay’s career tracks the growth of modern India, from humble beginnings in Madhya Pradesh to commanding roles at Samsung, Reliance, and the Tata Group.",
    extendedBio:
      "As the architect of Fresh & Select, he combines deep operational grit with high-level corporate governance. A serial entrepreneur and advisor to hedge funds, Ajay brings the stability required for public markets while retaining the aggressive execution speed needed to win the hyper-local category.",
    highlights: [
      { icon: <Briefcase size={16} />, text: "30+ Years Executive Experience" },
      { icon: <Building2 size={16} />, text: "Samsung, Reliance, Tata Group" },
      { icon: <TrendingUp size={16} />, text: "Serial Entrepreneur" },
      { icon: <Award size={16} />, text: "Hedge Fund Advisor" },
    ],
  },
  {
    name: "Rohan Ramani",
    role: "Director of Operations & Technology",
    tagline: "",
    image: rohanImg,
    initials: "RR",
    bio:
      "Rohan engineers the precision behind every delivery. An IIT Madras Data Science alumnus and SRM Academic Medalist, he translates high-frequency trading technology into hyper-local logistics.",
    extendedBio:
      "Previously a Software Development Engineer at JPMorgan Chase, Rohan built systems designed for zero-latency markets. At Fresh & Select, he applies that same engineering rigor to dark store automation by deploying proprietary algorithms for pick-path optimization. He ensures that our physical operations run with the predictability and speed of software code.",
    highlights: [
      { icon: <GraduationCap size={16} />, text: "IIT Madras — Data Science" },
      { icon: <Award size={16} />, text: "SRM Academic Medalist" },
      { icon: <Code2 size={16} />, text: "Ex-JPMorgan Chase Engineer" },
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

      {/* ─── Company Profile ─── */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="bg-[#FDFCF8] rounded-3xl border border-forest/5 p-8 md:p-12 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-forest mb-6">
              Company Profile
            </h2>
            <div className="space-y-4 text-forest/70 leading-relaxed">
              <p>
                <strong className="text-forest">Fresh & Select Groceries Private Limited</strong> is the operating backbone for India’s Quick Commerce sector. We manage a calibrated network of 25+ hubs across the Mumbai Metropolitan Region for the industry's defining platforms including Zepto, Blinkit, and Amazon Now.
              </p>
              <p>
                Our mission is to bring institutional-grade discipline to the hyper-local ecosystem. We bridge the gap between complex inventory systems and ground-level execution. From precision-based dark store layout design to real-time inventory synchronization, we ensure that thousands of daily orders are processed with speed, accuracy, and zero downtime.
              </p>
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
                className="bg-[#FDFCF8] rounded-3xl border border-forest/5 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Photo / Avatar Side */}
                  <div className="lg:w-80 bg-[#FCF8F0] relative overflow-hidden flex items-center justify-center p-12 lg:p-16">
                    <div
                      className="absolute inset-0 pointer-events-none opacity-[0.12]"
                      style={{
                        backgroundImage: `url(${mangalaPatternOne}), url(${mangalaPatternTwo}), url(${mangalaPatternThree})`,
                        backgroundRepeat: "repeat",
                        backgroundSize: "220px auto, 200px auto, 240px auto",
                        backgroundPosition: "left top, center, right bottom",
                      }}
                    />
                    <div className="relative z-10 w-48 h-48 rounded-full bg-[#FCF8F0] border-4 border-forest/40 overflow-hidden flex items-center justify-center">
                      {person.image ? (
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-full h-full object-cover object-top"
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
