"use client";

import Image from "next/image";
import Link from "next/link";

export function CartMinimalHeader() {

  return (
    <header className="border-b border-[rgba(58,31,61,.14)] bg-white">
      <div className="Muuhu-wrap grid min-h-[68px] grid-cols-[1fr_auto_1fr] items-center gap-3 py-3">
        <span aria-hidden="true" />
        <Link
          aria-label="Muuhu home"
          className="inline-flex shrink-0 items-center justify-self-center"
          href="/"
        >
          <Image
            alt="Muuhu Logo"
            className="h-auto w-[132px] object-contain sm:w-[160px]"
            height={74}
            priority
            sizes="(min-width: 640px) 160px, 132px"
            src="/media/products/buudy-led-mask/images/muuhu_logo.png"
            width={220}
          />
        </Link>

        <div className="hidden justify-self-end sm:block">
        </div>
      </div>

      
    </header>
  );
}



