const footerLinks = {
  Lineup: [
    { label: "T2 Traveller", href: "#models" },
    { label: "T8 Flagship", href: "#models" },
    { label: "T2 Expedition Overland", href: "#models" },
    { label: "T2 Stealth Obsidian", href: "#models" },
    { label: "Visual Gallery", href: "#gallery" },
  ],
  Philosophy: [
    { label: "Travel+ Philosophy", href: "#" },
    { label: "All-Terrain X-WD", href: "#features" },
    { label: "Intelligent Hybrid", href: "#features" },
    { label: "Sustainability Goals", href: "#" },
    { label: "Global Presence", href: "#" },
  ],
  Ownership: [
    { label: "Book a Test Drive", href: "#pricing" },
    { label: "7-Year Warranty Details", href: "#pricing" },
    { label: "Authorized Service Centers", href: "#" },
    { label: "Dealer Locator (45+ Countries)", href: "#" },
    { label: "Customer Care", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Settings", href: "#" },
    { label: "Accessibility Statement", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer id="footer" className="bg-accent text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Start Your Journey?
            </h3>
            <p className="mt-2 text-white/60 max-w-md text-sm sm:text-base">
              Explore the JETOUR fleet at your nearest authorized dealership, or customize
              your adventure SUV online today.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#pricing"
              className="bg-gold hover:bg-gold-light text-accent font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md"
            >
              Book Test Drive
            </a>
            <a
              href="#gallery"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-colors border border-white/10"
            >
              View Fleet Gallery
            </a>
          </div>
        </div>
      </div>

      {/* Links Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-xs text-white/90 mb-4 tracking-widest uppercase">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 hover:text-gold transition-colors"
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
            <span className="text-sm font-extrabold tracking-widest">JETOUR GLOBAL</span>
          </div>
          <p className="text-xs text-white/40 text-center sm:text-left">
            © 2026 JETOUR Global. All rights reserved. Chery Automobile Co., Ltd.
          </p>
          {/* Social links */}
          <div className="flex gap-4">
            {["Instagram", "YouTube", "X", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-white/40 hover:text-white transition-colors text-xs font-medium"
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
