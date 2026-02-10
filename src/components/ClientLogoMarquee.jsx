export default function ClientLogoMarquee() {
  const clients = [
    { name: "Zepto", logo: "zepto" },
    { name: "Blinkit", logo: "blinkit" },
    { name: "Amazon Now", logo: "amazon" },
  ];

  // We'll use SVG text-based logos for a clean look
  const renderLogo = (client) => {
    const styles = {
      zepto: {
        text: "zepto",
        className: "text-4xl font-bold tracking-tight lowercase",
        color: "#6C2DC7",
      },
      blinkit: {
        text: "blinkit",
        className: "text-4xl font-bold tracking-tight lowercase",
        color: "#F5C700",
      },
      amazon: {
        text: "amazon now",
        className: "text-3xl font-bold tracking-tight lowercase",
        color: "#FF9900",
      },
    };

    const style = styles[client.logo];

    return (
      <div
        key={client.name}
        className="flex-shrink-0 mx-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
      >
        <span
          className={style.className}
          style={{ color: style.color, fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {style.text}
        </span>
      </div>
    );
  };

  // Triple the array for seamless loop
  const allClients = [...clients, ...clients, ...clients];

  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream to-transparent z-10" />

      <div className="flex animate-marquee items-center">
        {allClients.map((client, i) => (
          <div key={i} className="flex-shrink-0 mx-12">
            {renderLogo(client)}
          </div>
        ))}
      </div>
    </div>
  );
}
