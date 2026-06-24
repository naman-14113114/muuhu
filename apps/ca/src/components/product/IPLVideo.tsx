// @ts-nocheck
"use client";

export function IPLVideo() {
  return (
    <section className="py-12 bg-[var(--cream)] px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-halant text-[var(--foreground)] mb-6 text-center">
          See the IPL in Action
        </h2>
        <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl bg-black relative">
          <video
            src="/media/products/buudy-led-mask/videos/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
