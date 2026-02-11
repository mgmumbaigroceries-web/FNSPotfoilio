import { useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, ZoomControl } from "react-leaflet";
import L from "leaflet";
import { MapPin, Package, Thermometer } from "lucide-react";
import storesData from "../data/stores.json";
import "leaflet/dist/leaflet.css";

// Fix leaflet default icon path
delete L.Icon.Default.prototype._getIconUrl;

// Custom pulsing marker icon
function createStoreIcon(isActive = false) {
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="position: relative; width: 32px; height: 32px;">
        <div style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: ${isActive ? "32px" : "24px"};
          height: ${isActive ? "32px" : "24px"};
          background: #0A3925;
          border: 3px solid #fff;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(10,57,37,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        ">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          </svg>
        </div>
        <div style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
          background: rgba(242, 92, 68, 0.25);
          border-radius: 50%;
          animation: pulse-ring 2s ease-out infinite;
        "></div>
      </div>
      <style>
        @keyframes pulse-ring {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
        }
      </style>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -20],
  });
}

function FlyToStore({ position }) {
  const map = useMap();
  if (position) {
    map.flyTo(position, 14, { duration: 1 });
  }
  return null;
}

export default function NetworkMap() {
  const [activeZone, setActiveZone] = useState("All");
  const [selectedStore, setSelectedStore] = useState(null);
  const [isMapInteractive, setIsMapInteractive] = useState(false);

  const zones = useMemo(() => {
    const zoneSet = new Set(storesData.map((s) => s.zone));
    return ["All", ...Array.from(zoneSet)];
  }, []);

  const zoneCounts = useMemo(() => {
    const counts = {};
    storesData.forEach((s) => {
      counts[s.zone] = (counts[s.zone] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredStores = useMemo(
    () =>
      activeZone === "All"
        ? storesData
        : storesData.filter((s) => s.zone === activeZone),
    [activeZone]
  );

  // Center of Mumbai region
  const center = [19.02, 72.92];

  return (
    <div className="bg-cream min-h-screen">
      {/* ─── Section Header ─── */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-semibold text-forest/60 uppercase tracking-widest mb-3">
            Our Network
          </p>
          <h1 className="font-heading text-2xl md:text-3xl font-semibold text-forest mb-3">
            Our Mumbai & Navi Mumbai{" "}
            <span className="text-forest">Hyper-Local Network</span>
          </h1>
          <p className="text-forest/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Strategically located hubs powering instant commerce across the MMR region.
          </p>
        </div>
      </section>

      {/* ─── Map Section ─── */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              {/* Zone Filter */}
              <div className="bg-[#FDFCF8] rounded-2xl border border-forest/10 p-6 shadow-sm mb-6">
                <h3 className="font-heading text-lg font-semibold text-forest mb-4">
                  Mumbai Zones
                </h3>
                <div className="space-y-2">
                  {zones.map((zone) => (
                    <button
                      key={zone}
                      onClick={() => {
                        setActiveZone(zone);
                        setSelectedStore(null);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        activeZone === zone
                          ? "bg-forest text-white"
                          : "bg-forest/5 text-forest hover:bg-forest/10"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{zone}</span>
                      </div>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          activeZone === zone
                            ? "bg-[#FDFCF8]/20 text-white"
                            : "bg-forest/10 text-forest/60"
                        }`}
                      >
                        {zone === "All"
                          ? storesData.length
                          : zoneCounts[zone] || 0}{" "}
                        Hubs
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Store List */}
              <div className="bg-[#FDFCF8] rounded-2xl border border-forest/10 p-6 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-forest mb-4">
                  Active Stores ({filteredStores.length})
                </h3>
                <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                  {filteredStores.map((store) => (
                    <button
                      key={store.code}
                      onClick={() => setSelectedStore(store)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                        selectedStore?.code === store.code
                          ? "bg-forest text-white"
                          : "hover:bg-forest/5 text-forest"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-sm">{store.name}</div>
                          <div
                            className={`text-xs ${
                              selectedStore?.code === store.code
                                ? "text-white/60"
                                : "text-forest/50"
                            }`}
                          >
                            {store.code} · {store.zone}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-sap animate-pulse" />
                          <span
                            className={`text-xs ${
                              selectedStore?.code === store.code
                                ? "text-white/60"
                                : "text-sap"
                            }`}
                          >
                            Live
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div
              className="relative flex-1 min-h-[600px] rounded-2xl overflow-hidden border border-forest/10 shadow-md"
              onClick={() => setIsMapInteractive(true)}
            >
              {!isMapInteractive && (
                <div className="absolute right-4 top-4 z-10 rounded-full bg-[#FDFCF8]/90 px-4 py-2 text-xs font-semibold text-forest/70 shadow">
                  Click map to enable
                </div>
              )}
              <MapContainer
                center={center}
                zoom={11}
                className="w-full h-full min-h-[600px]"
                zoomControl={false}
                scrollWheelZoom={isMapInteractive}
                dragging={isMapInteractive}
                doubleClickZoom={isMapInteractive}
                touchZoom={isMapInteractive}
                boxZoom={isMapInteractive}
                keyboard={isMapInteractive}
              >
                {isMapInteractive && <ZoomControl position="topleft" />}
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {selectedStore && (
                  <FlyToStore position={[selectedStore.lat, selectedStore.lng]} />
                )}

                {filteredStores.map((store) => (
                  <Marker
                    key={store.code}
                    position={[store.lat, store.lng]}
                    icon={createStoreIcon(selectedStore?.code === store.code)}
                    eventHandlers={{
                      click: () => setSelectedStore(store),
                    }}
                  >
                    <Popup>
                      <div className="p-1 min-w-[200px]">
                        <h4 className="font-bold text-forest text-base mb-1">
                          {store.name} Hub
                        </h4>
                        <p className="text-xs text-forest/50 mb-2">{store.code}</p>
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2 text-sm text-forest/70">
                            <Package size={14} className="text-coral" />
                            <span>Capacity: <strong>{store.capacity}</strong></span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-forest/70">
                            <Thermometer size={14} className="text-sap" />
                            <span>Services: {store.services.join(", ")}</span>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-sap animate-pulse" />
                          <span className="text-xs text-sap font-medium">
                            Operational
                          </span>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
