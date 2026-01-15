import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { EMERGELOGO2 } from "@/assets/logo";

const navLinks = [
  { name: "Home", type: "top" },
  { name: "Tracks", type: "section", id: "tracks" },
  { name: "Guidelines", type: "section", id: "guidelines" },
  { name: "Committee", type: "route", path: "/committee" },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const activePath = hovered ?? location.pathname;
  const navigateToSection = (id) => {
    if (location.pathname !== "/") {
      // go home first
      navigate("/", { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

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
    <header className=" z-50 w-full px-4 py-6 fixed top-0 left-0 bg-[#F0F9FF]/70 backdrop-blur-sm ">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={EMERGELOGO2} alt="EMERGE" className="h-10" />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="relative hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.type === "route" ? location.pathname === link.path : false;

            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                onMouseEnter={() => setHovered(link.name)}
                onMouseLeave={() => setHovered(null)}
                className={`relative text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#005188]"
                    : "text-gray-700 hover:text-[#005188]"
                }`}
              >
                {link.name}

                {(hovered === link.name || isActive) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#005188]"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            to="/register"
            className="
              bg-[#005188] text-white text-sm px-4 py-2 rounded-md
              transition-colors hover:bg-[#00406b]
            "
          >
            Register Now
          </Link>
        </div>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(true)}
        >
          <Menu />
        </button>
      </div>

      {/* ================= MOBILE OVERLAY MENU ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            />

            {/* Menu Card */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="
                fixed top-4 left-4 right-4 z-50
                bg-white rounded-2xl shadow-xl
              "
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <span className="font-semibold text-[#005188]">Menu</span>
                <button onClick={() => setOpen(false)}>
                  <X />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col p-4 gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => {
                      setOpen(false);
                      handleNavClick(link);
                    }}
                    className="text-sm font-medium text-left text-gray-700"
                  >
                    {link.name}
                  </button>
                ))}

                <Link
                  to="/register"
                  onClick={() => setOpen(false)}
                  className="mt-4 text-center bg-[#005188] text-white py-2 rounded-md"
                >
                  Register Now
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
