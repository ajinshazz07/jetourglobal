const footerLinks = {
  Models: [
    { label: "T2 Traveller", href: "#models" },
    { label: "Dashing", href: "#models" },
    { label: "X70 Plus", href: "#models" },
    { label: "T8 Flagship", href: "#models" },
    { label: "Compare Models", href: "#models" },
  ],
  Company: [
    { label: "About JETOUR", href: "#" },
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
    { label: "Contact Us", href: "#" },
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
    <footer id="footer" className="bg-accent text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Ready to Start Your Journey?
            </h3>
            <p className="mt-2 text-white/60 max-w-md">
              Visit your nearest JETOUR dealer for a test drive, or configure
              your dream SUV online.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="#pricing"
              className="bg-gold hover:bg-gold-light text-accent font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
            >
              Book Test Drive
            </a>
            <a
              href="#models"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors border border-white/10"
            >
              Explore Models
            </a>
          </div>
        </div>
      </div>

      {/* Links Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm text-white/80 mb-4 tracking-wider uppercase">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors"
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
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">J</span>
            </div>
            <span className="text-sm font-bold tracking-widest">JETOUR</span>
          </div>
          <p className="text-xs text-white/30">
            © 2026 JETOUR Global. All rights reserved. A Chery Holding
            brand.
          </p>
          {/* Social icons */}
          <div className="flex gap-4">
            {["Instagram", "X", "YouTube", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-white/30 hover:text-white transition-colors text-xs"
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
