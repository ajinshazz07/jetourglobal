const footerLinks = {
  Models: [
    { label: "G700 Flagship SUV", href: "#models" },
    { label: "F700 Off-Road Truck", href: "#models" },
    { label: "T2 TOPFIRE Edition", href: "#models" },
    { label: "T2 Traveller 4WD", href: "#models" },
    { label: "T1 Freedom Cross", href: "#models" },
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
    <footer id="footer" className="bg-accent text-white overflow-hidden pb-16 md:pb-0">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Ready to Start Your Journey?
            </h3>
            <p className="mt-2 text-white/60 text-sm max-w-md leading-relaxed">
              Visit your nearest JETOUR showroom for a test drive, or configure
              your dream G700, F700, or T2 online today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="#pricing"
              className="bg-gold hover:bg-gold-light text-accent font-bold px-6 py-3.5 rounded-xl text-sm transition-all text-center shadow-md active:scale-95"
            >
              Book Test Drive
            </a>
            <a
              href="#models"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all border border-white/10 text-center active:scale-95"
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
              <h4 className="font-bold text-xs sm:text-sm text-white/90 mb-3 sm:mb-4 tracking-wider uppercase">
                {category}
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-white/50 hover:text-white transition-colors"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold/20 border border-gold/30 rounded-lg flex items-center justify-center">
              <span className="text-gold font-bold text-sm">J</span>
            </div>
            <span className="text-sm font-bold tracking-widest">JETOUR</span>
          </div>
          <p className="text-xs text-white/40 text-center sm:text-left">
            © 2026 JETOUR Global. All rights reserved. A Chery Holding brand.
          </p>
          {/* Social icons */}
          <div className="flex gap-4">
            {["Instagram", "X", "YouTube", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-white/40 hover:text-white transition-colors text-xs"
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
