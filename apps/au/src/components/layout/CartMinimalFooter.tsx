import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/shipping-policy", label: "Shipping Policy" },
  { href: "/return-policy", label: "Return Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/pages/contact-us", label: "Contact Us" },
];

export function CartMinimalFooter() {
  return (
    <footer className="border-t border-[rgba(58,31,61,.12)] bg-[#FEFAF2]">
      <div className="buudy-wrap py-7 text-center">
        <p className="buudy-mono text-[0.68rem] tracking-[0.18em] text-[var(--plum)] sm:text-xs">
          Secure payments {"\u2022"} Free tracked shipping {"\u2022"} Easy support
        </p>

        <nav
          aria-label="Checkout footer"
          className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-[var(--plum-soft)]"
        >
          {FOOTER_LINKS.map((link) => (
            <Link
              className="transition hover:text-[var(--gold)]"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

