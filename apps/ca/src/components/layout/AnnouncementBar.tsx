import { announcementItems } from "@/data/navigation";

export function AnnouncementBar() {
  const items = [...announcementItems, ...announcementItems, ...announcementItems];

  return (
    <div className="overflow-hidden bg-[#E7D1BC] py-3 text-black">
      <div className="Muuhu-marquee Muuhu-marquee-slow flex items-center gap-6">
        {items.map((item, index) => (
          <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] whitespace-nowrap flex items-center gap-6" key={`${item}-${index}`}>
            {item}
            <span>{"\u2726"}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

