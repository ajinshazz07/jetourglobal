import Image from "next/image";
import { brandLogos } from "@/assets/images";

const footerLinks = {
  Models: [
    { label: "T2 Traveller 4WD (Available)", href: "#models" },
    { label: "T2 TOPFIRE Custom (Available)", href: "#models" },
    { label: "G700 Flagship SUV (Coming Soon)", href: "#models" },
    { label: "F700 Off-Road Truck (Coming Soon)", href: "#models" },
    { label: "T1 Cross (Coming Soon)", href: "#models" },
  ],
  Company: [
    { label: "About JETOUR", href: "#" },
    { label: "Adventure Gallery", href: "#gallery" },
    { label: "Newsroom", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Investor Relations", href: "#" },
  ],
  Support: [
    { label: "Find a Dealer", href: "#" },
    { label: "Book a Test Drive", href: "#pricing" },
    { label: "Owner's Manual", href: "#" },
    { label: "Service Centers", href: "#" },
    { label: "Contact Us", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Settings", href: "#" },
    { label: "Accessibility", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer id="footer" className="bg-secondary text-ink overflow-hidden pb-16 md:pb-0 border-t border-border">
      {/* CTA Banner */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
              Ready to Start Your Journey?
            </h3>
            <p className="mt-2 text-muted text-sm max-w-md leading-relaxed">
              Visit your nearest JETOUR showroom for a test drive, or configure
              your dream JETOUR T2 online today. Preview upcoming models.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="#pricing"
              className="bg-accent hover:bg-gold-light text-ink font-bold px-6 py-3.5 rounded-sm text-sm transition-all text-center shadow-[3px_3px_0_rgba(37,37,37,0.18)] border border-accent active:translate-y-px active:shadow-none"
            >
              Book Test Drive
            </a>
            <a
              href="#models"
              className="bg-primary hover:bg-primary/80 text-ink font-semibold px-6 py-3.5 rounded-sm text-sm transition-all border border-border text-center active:translate-y-px"
            >
              Explore Models
            </a>
          </div>
        </div>
      </div>

      {/* Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-xs sm:text-sm text-ink mb-3 sm:mb-4 tracking-wider uppercase">
                {category}
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-muted hover:text-ink transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative h-6 w-28 flex items-center">
            <Image
              src={brandLogos.jetourLogo}
              alt="JETOUR"
              fill
              className="object-contain object-left"
              sizes="112px"
            />
          </div>
          <p className="text-xs text-muted text-center sm:text-left">
            © 2026 JETOUR Global. All rights reserved. A Chery Holding brand.
          </p>
          {/* Social icons */}
          <div className="flex gap-4">
            {["Instagram", "X", "YouTube", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-muted hover:text-ink transition-colors text-xs"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
