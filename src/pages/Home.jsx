import MetricsTicker from "../components/MetricsTicker";
import amazonLogo from "../assets/Amazon_Logo_0.svg";
import blinkitLogo from "../assets/Blinki_Logo_0.svg";
import zeptoLogo from "../assets/Zepto_Logo_0.svg";
import homeBackground from "../assets/HomemainBg.png";

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
          <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-cream/35 to-cream/10" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-forest leading-[1.1] mb-4">
              India's Grocery Lifeline,
              <span className="block text-forest">Delivered Instantly.</span>
            </h1>

            <p className="text-base font-semibold text-forest/70 max-w-2xl mx-auto mb-6 leading-relaxed">
              Powering 20+ hubs with speed, precision, and a hyper-local network.
            </p>

            <div className="flex flex-col items-center gap-3 mb-10">
              <span className="text-sm font-semibold text-forest/70">Trusted By:</span>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <img
                  src={zeptoLogo}
                  alt="Zepto"
                  className="h-8 w-auto"
                />
                <img
                  src={blinkitLogo}
                  alt="Blinkit"
                  className="h-7 w-auto "
                />
                <img
                  src={amazonLogo}
                  alt="Amazon"
                  className="h-11 w-auto pt-3"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4">
            <MetricsTicker />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
      </section>
    </div>
  );
}
