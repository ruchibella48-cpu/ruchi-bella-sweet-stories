import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-jaggery-dark py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={logo} alt="Ruchi Bella" className="h-12 w-auto mb-4 brightness-150" />
            <p className="text-jaggery-cream/70 font-body text-sm leading-relaxed max-w-xs">
              India's first curated & ethically-manufactured Organic Jaggery brand, bringing back the sweetness of tradition.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-jaggery-honey text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Products", path: "/products" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-jaggery-cream/60 hover:text-jaggery-honey transition-colors duration-300 font-body text-sm tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-jaggery-honey text-lg mb-4">Connect</h4>
            {/* <p className="text-jaggery-cream/60 font-body text-sm mb-2">hello@ruchibella.com</p>
            <p className="text-jaggery-cream/60 font-body text-sm mb-4">+91 98765 43210</p> */}
                        <a
              href="mailto:jmkagroindustriesllp69@gmail.com"
              className="text-jaggery-cream/60 font-body text-sm mb-2 block hover:text-jaggery-honey transition-colors"
            >
              jmkagroindustriesllp69@gmail.com
            </a>

            <a
              href="tel:+918892495321"
              className="text-jaggery-cream/60 font-body text-sm mb-4 block hover:text-jaggery-honey transition-colors"
            >
              +91 8892495321
            </a>
            <div className="flex gap-4">
              {["Instagram"].map((social) => (
              <a
                key={social}
                href="https://www.instagram.com/jmk_agro_industries_llp?igsh=MTc3cGh6c2k5NWZrcQ==" 
                target="_blank"
                rel="ruchi belalla social media"
                className="text-jaggery-cream/40 hover:text-jaggery-honey transition-colors duration-300 font-body text-xs tracking-widest uppercase cursor-pointer"
              >
                {social}
              </a>
            ))}
            </div>
          </div>
        </div>

        <div className="border-t border-jaggery-cream/10 pt-8 text-center">
          <p className="text-jaggery-cream/40 font-body text-xs tracking-widest">
            © 2026 Ruchi Bella. All rights reserved. Made with love & tradition.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
