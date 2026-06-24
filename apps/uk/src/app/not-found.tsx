import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="muuhu-section bg-[var(--cream)] py-28">
      <div className="muuhu-wrap max-w-2xl text-center">
        <p className="muuhu-eyebrow">Page not found</p>
        <h1 className="muuhu-heading mt-4">This glow is still loading.</h1>
        <p className="muuhu-copy mx-auto mt-5 max-w-xl">
          The page you opened is not available yet. The Muuhu IPL product
          page is ready for you.
        </p>
        <Button asChild className="mt-8">
          <Link href="/products/muuhu-ipl-hair-removal">Shop Muuhu IPL</Link>
        </Button>
      </div>
    </section>
  );
}
