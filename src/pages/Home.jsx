import MetricsTicker from "../components/MetricsTicker";
import homeBackground from "../assets/HomeBackground.png";

export default function Home() {
  return (
    <div className="bg-cream">
      {/* ─── Hero Section ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0">
          <img
            src={homeBackground}
            alt="Fresh & Select market"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/90 via-cream/65 to-cream/35" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-heading text-3xl md:text-5xl font-semibold text-forest leading-[1.1] mb-4">
              India's Grocery Lifeline,
              <span className="text-forest"> Delivered Instantly.</span>
            </h1>

            <p className="text-base text-forest/70 max-w-2xl mx-auto mb-6 leading-relaxed">
              Powering 25+ hubs with speed, precision, and a hyper-local network.
            </p>

            <div className="flex flex-col items-center gap-3 mb-10">
              <span className="text-sm font-semibold text-forest/70">Trusted By:</span>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <span className="text-2xl font-bold lowercase tracking-tight" style={{ color: "#6C2DC7" }}>
                  zepto
                </span>
                <span className="text-2xl font-bold lowercase tracking-tight" style={{ color: "#F5C700" }}>
                  blinkit
                </span>
                <span className="text-xl font-bold lowercase tracking-tight" style={{ color: "#FF9900" }}>
                  amazon now
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <MetricsTicker />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
      </section>
    </div>
  );
}
