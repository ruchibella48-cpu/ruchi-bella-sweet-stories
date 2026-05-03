import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  const socials = [
  { name: "Instagram", url: "https://www.instagram.com/jmk_agro_industries_llp?igsh=MTc3cGh6c2k5NWZrcQ==" },
  // { name: "Facebook", url: "https://facebook.com/your-page" },
  // { name: "Twitter", url: "https://twitter.com/your-page" },
  // { name: "LinkedIn", url: "https://linkedin.com/company/your-page" },
];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-warm">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-jaggery-caramel font-body text-sm tracking-[0.3em] uppercase mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl text-foreground mb-4"
          >
            We'd Love to Hear from You
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-body text-muted-foreground text-lg max-w-xl mx-auto"
          >
            Whether it's a question, a story, or a bulk enquiry — we're always here.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Form */}
            <ScrollReveal direction="left">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-body text-sm text-muted-foreground tracking-wide block mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-jaggery-caramel/30 focus:border-jaggery-caramel transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground tracking-wide block mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-jaggery-caramel/30 focus:border-jaggery-caramel transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground tracking-wide block mb-2">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border font-body text-foreground focus:outline-none focus:ring-2 focus:ring-jaggery-caramel/30 focus:border-jaggery-caramel transition-all duration-300"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Enquiry</option>
                    <option value="bulk">Bulk Enquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground tracking-wide block mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-jaggery-caramel/30 focus:border-jaggery-caramel transition-all duration-300 resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                <Button variant="hero" size="lg" type="submit" className="w-full">
                  <Send size={16} />
                  Send Message
                </Button>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center font-body text-jaggery-caramel text-sm"
                  >
                    Thank you! We'll get back to you soon. 🙏
                  </motion.p>
                )}
              </form>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal direction="right">
              <div className="space-y-8">
  <div>
    <h3 className="font-heading text-2xl text-foreground mb-6">
      Contact Information
    </h3>

    <div className="space-y-6">
      {[
        {
          icon: Mail,
          label: "Email",
          value: "jmkagroindustriesllp69@gmail.com",
          href: "mailto:jmkagroindustriesllp69@gmail.com",
        },
        {
          icon: Phone,
          label: "Phone",
          value: "+91 8892495321",
          href: "tel:+918892495321",
        },
        {
          icon: MapPin,
          label: "Location",
          value: "Belgaum, Karnataka, India",
        },
      ].map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.label} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-jaggery-honey/15 flex items-center justify-center flex-shrink-0">
              <Icon size={20} className="text-jaggery-caramel" />
            </div>

            <div>
              <p className="font-body text-sm text-muted-foreground tracking-wide uppercase">
                {item.label}
              </p>

              {item.href ? (
                <a
                  href={item.href}
                  className="font-body text-foreground hover:text-jaggery-caramel transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="font-body text-foreground">{item.value}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </div>

  {/* Bulk Enquiry */}
  <div className="bg-card rounded-2xl p-8 shadow-warm">
    <h4 className="font-heading text-xl text-foreground mb-3">
      Bulk Enquiries
    </h4>
    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
      Looking for organic jaggery in bulk? We work with restaurants, cafés,
      bakeries, and retailers. Select "Bulk Enquiry" in the form subject or
      reach us directly.
    </p>
  </div>

  {/* Social */}
  <div>
    <h4 className="font-heading text-lg text-foreground mb-4">
      Follow Us
    </h4>

    <div className="flex gap-4">
      {socials.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
          className="px-4 py-2 rounded-full bg-card border border-border text-muted-foreground font-body text-xs tracking-widest uppercase cursor-pointer hover:text-jaggery-caramel hover:border-jaggery-caramel transition-colors duration-300"
        >
          {social.name}
        </motion.a>
      ))}
    </div>
  </div>
</div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
