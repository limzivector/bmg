"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

interface MenuItem {
  label: string;
  href: string;
}

const services: MenuItem[] = [
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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-2xl group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center text-white text-sm font-bold group-hover:shadow-lg transition-all duration-300">
              BMG
            </div>
            <span className="hidden sm:inline bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              BMG
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-700 font-medium link-hover">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 font-medium link-hover">
                Services
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/#faq"
              className="text-gray-700 font-medium link-hover"
            >
              FAQ
            </Link>
            <Link
              href="/#contact"
              className="text-gray-700 font-medium link-hover"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+1-949-866-4583"
              className="flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
            >
              <Phone size={18} />
              <span>(949) 866-4583</span>
            </a>
            <Link href="/#contact" className="btn-primary">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="space-y-2">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 font-medium hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 text-gray-700 font-medium hover:bg-gray-100 rounded transition-colors"
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isServicesOpen && (
                  <div className="ml-3 space-y-1 mt-1">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-3 py-2 text-gray-600 text-sm hover:text-orange-600 hover:bg-orange-50 rounded transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/#faq"
                className="block px-3 py-2 text-gray-700 font-medium hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/#contact"
                className="block px-3 py-2 text-gray-700 font-medium hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:+1-949-866-4583"
                className="flex items-center gap-2 px-3 py-2 text-orange-600 font-semibold hover:bg-orange-50 rounded transition-colors"
              >
                <Phone size={18} />
                <span>(949) 866-4583</span>
              </a>
              <Link
                href="/#contact"
                className="block btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
