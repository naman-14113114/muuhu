"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// @ts-ignore
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

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
            url="https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-eu-west-1-prod/eacd0c3b-697f-4192-ac69-094aaca47b5a/default.vertical.jobtemplate.hls.m3u8"
            width="100%"
            height="100%"
            playing={true}
            muted={true}
            loop={true}
            controls={true}
          />
        </div>
      </div>
    </section>
  );
}

