import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Building2,
  CheckCircle2,
} from "lucide-react";

const roleOptions = [
  "Quick Commerce Platform",
  "Vendor / Supplier",
  "Investor",
  "Franchise Partner",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to an API
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-cream">
      {/* ─── Section Header ─── */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-semibold text-forest/60 uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h1 className="font-heading text-2xl md:text-3xl font-semibold text-forest mb-3">
            Contact Us
          </h1>
          <p className="text-forest/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Ready to power your quick commerce operations? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ─── Contact Section ─── */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* ─── Contact Info ─── */}
            <div className="lg:w-96 flex-shrink-0">
              <div className="bg-[#FDFCF8] rounded-3xl border border-forest/5 p-8 shadow-sm mb-6">
                <h3 className="font-heading text-xl font-semibold text-forest mb-6">
                  Corporate Office
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-forest/5 flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin size={18} className="text-forest" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-forest mb-1">
                        Registered Office
                      </p>
                      <p className="text-sm text-forest/60 leading-relaxed">
                        Flat No. 001, Atharva Apartment, Plot No. 195, Road No. 13,
                        Sector-4, Panvel, Raigarh, Maharashtra, 410206
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-forest/5 flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-forest" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-forest mb-1">Phone</p>
                      <p className="text-sm text-forest/60">+91 7977180756</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-forest/5 flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-forest" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-forest mb-1">Email</p>
                      <p className="text-sm text-forest/60">ajay@kyro.in</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-forest/5 flex items-center justify-center flex-shrink-0">
                      <Building2 size={18} className="text-forest" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-forest mb-1">
                        Company
                      </p>
                      <p className="text-sm text-forest/60">
                        Fresh & Select Groceries Pvt. Ltd.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-forest rounded-3xl p-8 text-white">
                <h3 className="font-heading text-lg font-semibold mb-6">
                  Why Partner With Us?
                </h3>
                <div className="space-y-4">
                  {[
                    "20+ operational dark stores",
                    "30+ years of leadership experience",
                    "99.9% inventory accuracy",
                    "Trusted by Zepto, Blinkit, Amazon Now",
                    "Cold chain protocols",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-sap flex-shrink-0" />
                      <span className="text-sm text-cream-200/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ─── Contact Form ─── */}
            <div className="flex-1">
              <div className="bg-[#FDFCF8] rounded-3xl border border-forest/5 p-8 md:p-12 shadow-sm">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sap/10 mb-6">
                      <CheckCircle2 size={40} className="text-sap" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-forest mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-forest/60 max-w-md mx-auto mb-8">
                      Thank you for reaching out. Our team will get back to you within
                      24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          company: "",
                          role: "",
                          email: "",
                          phone: "",
                          message: "",
                        });
                      }}
                      className="text-sm font-medium text-coral hover:underline"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-heading text-2xl font-bold text-forest mb-2">
                      Send Us a Message
                    </h3>
                    <p className="text-sm text-forest/50 mb-8">
                      Fill in the form below and our partnerships team will reach out
                      shortly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                          <label className="block text-sm font-medium text-forest mb-2">
                            Full Name <span className="text-coral">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Ajay Sharma"
                            className="w-full rounded-xl border border-forest/10 bg-cream-50 px-4 py-3 text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest/30 transition"
                          />
                        </div>

                        {/* Company */}
                        <div>
                          <label className="block text-sm font-medium text-forest mb-2">
                            Company Name <span className="text-coral">*</span>
                          </label>
                          <input
                            type="text"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company"
                            className="w-full rounded-xl border border-forest/10 bg-cream-50 px-4 py-3 text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest/30 transition"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-sm font-medium text-forest mb-2">
                            Email Address <span className="text-coral">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="ajay@company.com"
                            className="w-full rounded-xl border border-forest/10 bg-cream-50 px-4 py-3 text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest/30 transition"
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-sm font-medium text-forest mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="w-full rounded-xl border border-forest/10 bg-cream-50 px-4 py-3 text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest/30 transition"
                          />
                        </div>
                      </div>

                      {/* Role */}
                      <div>
                        <label className="block text-sm font-medium text-forest mb-2">
                          I am a... <span className="text-coral">*</span>
                        </label>
                        <select
                          name="role"
                          required
                          value={formData.role}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-forest/10 bg-cream-50 px-4 py-3 text-sm text-forest focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest/30 transition"
                        >
                          <option value="" disabled>
                            Select your role
                          </option>
                          {roleOptions.map((role) => (
                            <option key={role} value={role}>
                              {role}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-forest mb-2">
                          Message <span className="text-coral">*</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your requirements..."
                          className="w-full rounded-xl border border-forest/10 bg-cream-50 px-4 py-3 text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest/30 transition resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-full bg-coral px-8 py-4 text-base font-semibold text-white shadow-lg shadow-coral/30 hover:bg-coral-500 transition-all hover:scale-105 hover:shadow-coral/50"
                      >
                        Send Message
                        <Send size={18} />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
