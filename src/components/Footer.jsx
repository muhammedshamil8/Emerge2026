import { Mail, Globe } from "lucide-react";
import { EMERGELOGO2 } from "@/assets/logo";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  const navigate  = useNavigate();
  const footerLinks = [
    { name: "Home", type: "top" },
    { name: "Tracks", type: "section", id: "tracks" },
    { name: "Guidelines", type: "section", id: "guidelines" },
    { name: "Committee", type: "route", path: "/committee" },
  ];

  const handleNavClick = (link) => {
    if (link.type === "top") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(scrollToTop, 50);
      } else {
        scrollToTop();
      }
      return;
    }

    if (link.type === "section") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection(link.id), 100);
      } else {
        scrollToSection(link.id);
      }
      return;
    }

    if (link.type === "route") {
      navigate(link.path);
    }
  };
  return (
    <footer className="bg-[#f4fbff] border-t">
      <div className="max-w-[1300px] mx-auto px-4 py-8 text-sm text-gray-600">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-black/20 pb-6">
          {/* Logo */}
          <img
            src={EMERGELOGO2}
            alt="EMERGE"
            className="h-16 transition-opacity duration-200 hover:opacity-80"
          />

          {/* Right content */}
          <div className="flex flex-col gap-6">
            {/* Navigation */}
            <div className="flex flex-wrap items-center gap-6 md:gap-10">
              {footerLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className="relative font-medium text-gray-700 hover:text-[#005188]"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="mailto:emerge2026@emeacollege.ac.in"
                  className="flex items-center gap-2 transition-colors hover:text-[#005188]"
                >
                  <Mail size={14} />
                  emerge2026@emeacollege.ac.in
                </a>

                <a
                  href="https://emeacollege.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-[#005188]"
                >
                  <Globe size={14} />
                  emeacollege.ac.in
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <a
                href="https://wa.me/919961063747"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-green-600 transition-colors"
              >
                <FaWhatsapp className="text-green-500" size={16} />
                +91 9961063747
              </a>

              <span className="text-gray-400">|</span>

               <a
                href="https://wa.me/919995266781"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-green-600 transition-colors"
              >+91 9995266781 </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <p className="mt-6 text-sm text-center text-gray-500">
          Crafted by{" "}
          <span className="font-medium text-gray-700">
            <a
              href="https://zamil.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#005188] transition-colors"
            >
              Shamil
            </a>
            {" & "}
            <a href="#" className="hover:text-[#005188] transition-colors">
              Dayyan
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
