import {
  Warehouse,
  Users,
  BarChart3,
  Snowflake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: <Warehouse className="w-8 h-8" />,
    title: "Dark Store Management",
    subtitle: "End-to-End Facility Operations",
    description:
      "Complete facility setup including racking systems, dispatch zones, staging areas, and real-time inventory management. We handle every aspect—from warehouse design to daily operations—so platforms can focus on growth.",
    features: [
      "Turnkey facility setup & racking",
      "Dispatch zone optimization",
      "Real-time inventory & WMS integration",
      "Quality assurance checkpoints",
    ],
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Manpower & Training",
    subtitle: "Specialized Quick Commerce Workforce",
    description:
      "Recruitment, training, and management of specialized pickers, packers, and supervisors for high-velocity dark store environments. FIFO-certified staff ensuring <2 minute average pack times.",
    features: [
      "Picker/Packer recruitment & HR",
      "FIFO-certified training programs",
      "Performance KPI tracking",
      "Shift management & scheduling",
    ],
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Inventory Intelligence",
    subtitle: "Tech-Enabled Shrinkage Control",
    description:
      "Data-driven inventory management powered by analytics dashboards. Our tech stack monitors shrinkage, tracks expiry, optimizes pick-paths, and maintains 99.9% inventory accuracy in real-time.",
    features: [
      "AI-powered demand forecasting",
      "Real-time shrinkage monitoring",
      "Expiry & FIFO management",
      "Pick-path optimization analytics",
    ],
  },
  {
    icon: <Snowflake className="w-8 h-8" />,
    title: "Cold Chain Integrity",
    subtitle: "Temperature-Controlled Excellence",
    description:
      "Dedicated temperature-controlled zones ensuring fresh produce, dairy, and frozen goods maintain quality from warehouse to doorstep. Ozone washing protocols for enhanced food safety compliance.",
    features: [
      "Multi-zone temperature control",
      "Ozone washing protocols",
      "Cold chain compliance logging",
      "Fresh produce quality assurance",
    ],
  },
];

export default function Services() {
  return (
    <div className="bg-cream">
      {/* ─── Section Header ─── */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-semibold text-forest/60 uppercase tracking-widest mb-3">
            Our Comprehensive Services
          </p>
          <h1 className="font-heading text-2xl md:text-3xl font-semibold text-forest mb-3">
            Our Services
          </h1>
          <p className="text-forest/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            From facility setup to last-mile support—we provide the full-stack
            infrastructure that powers India's fastest deliveries.
          </p>
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-7xl space-y-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-3xl border border-forest/5 overflow-hidden hover:shadow-xl transition-all duration-500 ${
                i % 2 === 0 ? "" : ""
              }`}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Content */}
                <div className="flex-1 p-8 md:p-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-forest/5 text-forest group-hover:bg-forest group-hover:text-white transition-all duration-300 mb-6">
                    {service.icon}
                  </div>

                  <span className="text-xs font-semibold text-coral uppercase tracking-widest">
                    {service.subtitle}
                  </span>

                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-forest mt-2 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-forest/60 leading-relaxed mb-8 max-w-lg">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, fi) => (
                      <li key={fi} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-sap flex-shrink-0" />
                        <span className="text-sm text-forest/70 font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Side */}
                <div className="lg:w-80 bg-gradient-to-br from-forest/5 to-sap/5 flex items-center justify-center p-12">
                  <div className="text-forest/10 group-hover:text-forest/20 transition-all duration-500 transform group-hover:scale-110">
                    <div className="w-32 h-32">
                      {service.icon &&
                        // Clone  with larger size
                        (() => {
                          const Icon = service.icon.type;
                          return <Icon className="w-32 h-32" strokeWidth={0.5} />;
                        })()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Process Section ─── */}
      <section id="process" className="py-20 px-6 bg-forest/[0.03] scroll-mt-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest mb-4">
              Our Process
            </h2>
            <p className="text-forest/60 max-w-lg mx-auto">
              From onboarding to daily operations — a streamlined process honed over
              30 years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", desc: "Site audit, demand mapping, and capacity planning." },
              { step: "02", title: "Setup", desc: "Facility design, racking, cold chain installation." },
              { step: "03", title: "Staffing", desc: "Recruit, train, and deploy FIFO-certified teams." },
              { step: "04", title: "Go Live", desc: "Launch operations with real-time monitoring dashboards." },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-heading font-bold text-forest/5 mb-2">
                  {item.step}
                </div>
                <h3 className="font-heading text-lg font-semibold text-forest mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-forest/60 leading-relaxed">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 translate-x-1/2">
                    <ArrowRight className="text-forest/15" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest mb-6">
            Need a Fulfillment Partner?
          </h2>
          <p className="text-forest/60 max-w-xl mx-auto mb-10">
            Let's discuss how Fresh & Select can power your quick commerce operations
            with speed and precision.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-coral px-10 py-4 text-base font-semibold text-white shadow-lg shadow-coral/30 hover:bg-coral-500 transition-all hover:scale-105"
          >
            Partner With Us
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
