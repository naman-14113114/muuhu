// @ts-nocheck
"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// @ts-ignore
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export function IPLVideo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-12 bg-[var(--cream)] px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-halant text-[var(--foreground)] mb-6 text-center">
          See the IPL in Action
        </h2>
        <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl bg-black relative">
          <ReactPlayer
            url="/media/products/buudy-led-mask/videos/hero.mp4"
            width="100%"
            height="100%"
            playing={true}
            muted={true}
            loop={true}
            controls={false}
          />
        </div>
      </div>
    </section>
  );
}





