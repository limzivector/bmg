"use client";

import { FormEvent, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    moveDate: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, send to your backend or email service
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      {submitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
          Thank you! We'll contact you within 24 hours.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
              placeholder="Your Company"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
              placeholder="john@company.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
              placeholder="(555) 123-4567"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Estimated Move Date
            </label>
            <input
              type="date"
              name="moveDate"
              value={formData.moveDate}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tell Us About Your Move
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
              placeholder="Office size, special equipment, timeline, any concerns..."
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full btn-primary text-center"
        >
          Get Free Quote
        </button>
      </form>

      {/* Contact Info Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex gap-4 items-start">
          <Phone size={24} className="text-orange-500 flex-shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-gray-900">Phone</p>
            <a
              href="tel:+1-949-866-4583"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              (949) 866-4583
            </a>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <Mail size={24} className="text-orange-500 flex-shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-gray-900">Email</p>
            <a
              href="mailto:info@businessmoving.com"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              info@businessmoving.com
            </a>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <MapPin size={24} className="text-orange-500 flex-shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-gray-900">Locations</p>
            <p className="text-gray-600 text-sm">Newport Beach & Buena Park</p>
          </div>
        </div>
      </div>
    </div>
  );
}
