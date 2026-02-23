import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const services = [
    { label: "Office Moving", href: "/services/office-movers" },
    { label: "Warehouse Moving", href: "/services/warehouse-moving" },
    { label: "Industrial Movers", href: "/services/industrial-movers" },
    { label: "Cubicle Moving", href: "/services/cubicle-movers" },
    { label: "Office Decommissioning", href: "/services/office-decommissioning" },
    { label: "Project Management", href: "/services/project-management" },
    {
      label: "Out of Town Dealer Support",
      href: "/services/out-of-town-dealer-support",
    },
    { label: "Office Reconfiguration", href: "/services/office-reconfiguration" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-orange-400 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                BMG
              </div>
              <span className="font-bold text-xl">Business Moving Group</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Professional commercial moving services for Orange County and Los Angeles. Trusted by 500+ businesses.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 4).map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">More Services</h3>
            <ul className="space-y-3">
              {services.slice(4).map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <Phone size={18} className="text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">(949) 866-4583</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="mailto:info@businessmoving.com"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    info@businessmoving.com
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin size={18} className="text-orange-500 flex-shrink-0 mt-1" />
                <div className="text-gray-400 text-sm">
                  <p>Newport Beach, CA 92660</p>
                  <p>Buena Park, CA 90620</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} Business Moving Group. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-orange-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
