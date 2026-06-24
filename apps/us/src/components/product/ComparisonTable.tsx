import React from "react";

/* ── SVG Icons for feature rows ── */
function IntensityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[var(--plum)]">
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="12" y1="20" x2="12" y2="9" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function FlashIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[var(--plum)]">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function SpeedIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[var(--plum)]">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ModesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[var(--plum)]">
      <path d="M12 2c0 5.5-4.5 10-10 10 5.5 0 10 4.5 10 10 0-5.5 4.5-10 10-10-5.5 0-10-4.5-10-10z" />
    </svg>
  );
}

function ShippingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[var(--plum)]">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function PriceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[var(--plum)]">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-[var(--plum)] mx-auto">
      <circle cx="10" cy="10" r="9.375" stroke="currentColor" strokeWidth="1.25" />
      <path d="M5.55469 10L8.88802 13.3333L15 7.22217" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-[#737373] mx-auto opacity-50">
      <circle cx="10" cy="10" r="9.375" stroke="currentColor" strokeWidth="1.25" />
      <path d="M6.5 6.5L13.5 13.5M13.5 6.5L6.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Comparison Row with icon ── */
interface ComparisonRowProps {
  icon: React.ReactNode;
  title: string;
  values: [React.ReactNode, React.ReactNode, React.ReactNode, React.ReactNode];
  isLast?: boolean;
}

function ComparisonRow({ icon, title, values, isLast = false }: ComparisonRowProps) {
  return (
    <div className={isLast ? "" : "border-b border-[rgba(194,188,177,0.4)]"}>
      <div className="flex flex-col md:flex-row md:items-stretch">
        {/* Feature label with icon */}
        <div className="w-full md:w-1/3 pr-4 py-3 md:py-4 flex items-center gap-3 px-4 md:px-0">
          <span className="flex-shrink-0">{icon}</span>
          <p className="Muuhu-display font-semibold text-[var(--plum)] text-sm md:text-base leading-tight">{title}</p>
        </div>
        {/* Brand values */}
        <div className="w-full md:w-2/3">
          <div className="flex h-full items-stretch">
            {values.map((val, idx) => (
              <div
                key={idx}
                className={`w-1/4 py-3 md:py-4 flex items-center justify-center text-center px-2 min-h-[48px] text-xs md:text-sm ${
                  idx === 0
                    ? `bg-[rgba(0,0,0,0.04)] font-semibold text-[var(--plum)] ${isLast ? "rounded-b-2xl" : ""}`
                    : "text-[var(--muted)]"
                }`}
              >
                {val}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ComparisonTable() {
  return (
    <section className="Muuhu-section bg-[var(--cream)] py-14 md:py-24">
      <div className="Muuhu-wrap max-w-[1144px]">
        {/* Section Header */}
        <div className="mb-4 md:mb-6 px-4 text-center">
          <h2 className="Muuhu-heading hidden md:block">
            What makes Muuhu right for you?
          </h2>
          <h2 className="Muuhu-heading block md:hidden text-[2.2rem]">
            Why is Muuhu right for you?
          </h2>
          <h3 className="Muuhu-display text-xl md:text-2xl text-[var(--plum-soft)] italic mt-1 md:mt-2">
            (Here is a comparison, but there is really no comparison)
          </h3>
        </div>

        <div className="mt-6 flex flex-col md:mt-8">
          <div className="relative">
            {/* Highlight column background */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-1/4 rounded-t-2xl bg-[rgba(0,0,0,0.04)] md:left-1/3 md:w-1/6"
            />

            {/* Header: Brand logos */}
            <div className="relative border-b border-[rgba(194,188,177,0.4)]">
              <div className="flex flex-col md:flex-row md:items-stretch h-full">
                <div className="hidden md:block md:w-1/3"></div>
                <div className="w-full md:w-2/3">
                  <div className="flex items-center h-full">
                    <div className="w-1/4 flex flex-col justify-center items-center h-full pb-3 px-2 pt-3 md:pt-4">
                      <img
                        src="https://img.thesitebase.net/10650/10650730/themes/175579000979c2a2281d.png?width=640&height=0&min_height=0"
                        alt="Muuhu"
                        className="h-8 md:h-10 object-contain"
                      />
                    </div>
                    <div className="w-1/4 flex flex-col justify-center items-center h-full pb-3 px-2 pt-3 md:pt-4">
                      <img
                        src="https://roseskinco.vercel.app/images/evenskyn_logo.png"
                        alt="EvenSkin"
                        className="h-6 md:h-8 object-contain"
                      />
                    </div>
                    <div className="w-1/4 flex flex-col justify-center items-center h-full pb-3 px-2 pt-3 md:pt-4">
                      <img
                        src="https://roseskinco.vercel.app/images/braun_logo.png"
                        alt="Braun"
                        className="h-6 md:h-8 object-contain"
                      />
                    </div>
                    <div className="w-1/4 flex flex-col justify-center items-center h-full pb-3 px-2 pt-3 md:pt-4">
                      <img
                        src="https://roseskinco.vercel.app/images/philips_logo.png"
                        alt="Philips"
                        className="h-6 md:h-8 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product device images row */}
            <div className="relative border-b border-[rgba(194,188,177,0.4)]">
              <div className="flex flex-col md:flex-row md:items-stretch h-full">
                <div className="hidden md:block md:w-1/3"></div>
                <div className="w-full md:w-2/3">
                  <div className="flex items-center h-full">
                    <div className="w-1/4 flex justify-center items-center py-4 px-2">
                      <img
                        src="https://roseskinco.vercel.app/images/new_device.png"
                        alt="Muuhu IPL Device"
                        className="h-20 md:h-28 object-contain"
                      />
                    </div>
                    <div className="w-1/4 flex justify-center items-center py-4 px-2">
                      <img
                        src="https://roseskinco.vercel.app/images/evenskyn_pulsar_branded.png"
                        alt="EvenSkin Pulsar"
                        className="h-20 md:h-28 object-contain"
                      />
                    </div>
                    <div className="w-1/4 flex justify-center items-center py-4 px-2">
                      <img
                        src="https://roseskinco.vercel.app/images/braun_pro5_device.png"
                        alt="Braun Pro 5"
                        className="h-20 md:h-28 object-contain"
                      />
                    </div>
                    <div className="w-1/4 flex justify-center items-center py-4 px-2">
                      <img
                        src="https://roseskinco.vercel.app/images/philips_lumea_device.png"
                        alt="Philips Lumea"
                        className="h-20 md:h-28 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data rows */}
          <ComparisonRow
            icon={<IntensityIcon />}
            title="Intensity levels"
            values={[
              <span key="1" className="Muuhu-display font-semibold text-sm md:text-base text-[var(--plum)]">9 levels</span>,
              <span key="2" className="Muuhu-display font-semibold text-sm md:text-base text-[var(--muted)]">8 levels</span>,
              <span key="3" className="Muuhu-display font-semibold text-sm md:text-base text-[var(--muted)]">10 levels</span>,
              <span key="4" className="Muuhu-display font-semibold text-sm md:text-base text-[var(--muted)]">5 levels</span>,
            ]}
          />

          <ComparisonRow
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[var(--plum)]">
                <path d="M12 2v20M12 6c3 0 5 2 5 6s-2 6-5 6"></path>
              </svg>
            }
            title="Ice cooling tech"
            values={[<CheckIcon key="1" />, <CrossIcon key="2" />, <CrossIcon key="3" />, <CrossIcon key="4" />]}
          />

          <ComparisonRow
            icon={<FlashIcon />}
            title="Flash lifetime"
            values={[
              <span key="1" className="Muuhu-display font-semibold text-sm md:text-base text-[var(--plum)]">999,999 flashes</span>,
              <span key="2" className="Muuhu-display font-semibold text-sm md:text-base text-[var(--muted)]">10+ years</span>,
              <span key="3" className="Muuhu-display font-semibold text-sm md:text-base text-[var(--muted)]">400,000 flashes</span>,
              <span key="4" className="Muuhu-display font-semibold text-sm md:text-base text-[var(--muted)]">450,000 flashes</span>,
            ]}
          />

          <ComparisonRow
            icon={<SpeedIcon />}
            title="Treatment speed"
            values={[
              <span key="1" className="Muuhu-display text-sm md:text-base text-[var(--plum)]">1-3 sec</span>,
              <span key="2" className="Muuhu-display text-sm md:text-base text-[var(--muted)]">1-3 sec</span>,
              <span key="3" className="Muuhu-display text-xs md:text-sm text-[var(--muted)]">Full body in 10 min</span>,
              <span key="4" className="Muuhu-display text-xs md:text-sm text-[var(--muted)]">Lower leg in 8.5 min</span>,
            ]}
          />

          <ComparisonRow
            icon={<ModesIcon />}
            title="Modes"
            values={[
              <span key="1" className="Muuhu-display text-sm md:text-base text-[var(--plum)]">2 modes</span>,
              <span key="2" className="Muuhu-display text-sm md:text-base text-[var(--muted)]">2 modes</span>,
              <span key="3" className="Muuhu-display text-sm md:text-base text-[var(--muted)]">1 mode</span>,
              <span key="4" className="Muuhu-display text-sm md:text-base text-[var(--muted)]">1 mode</span>,
            ]}
          />

          <ComparisonRow
            icon={<ShippingIcon />}
            title="Premium free shipping"
            values={[<CheckIcon key="1" />, <CrossIcon key="2" />, <CrossIcon key="3" />, <CrossIcon key="4" />]}
          />

          <ComparisonRow
            icon={<PriceIcon />}
            title="Price"
            values={[
              <span key="1" className="Muuhu-display font-semibold text-base md:text-lg text-[var(--plum)]">$129</span>,
              <span key="2" className="Muuhu-display text-base md:text-lg text-[var(--muted)]">$279.99</span>,
              <span key="3" className="Muuhu-display text-base md:text-lg text-[var(--muted)]">$499</span>,
              <span key="4" className="Muuhu-display text-base md:text-lg text-[var(--muted)]">£539</span>,
            ]}
            isLast={true}
          />
        </div>
      </div>
    </section>
  );
}
