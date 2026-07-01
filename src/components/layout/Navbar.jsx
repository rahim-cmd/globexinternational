import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const drawerRef = useRef(null);

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Products",
      path: "/products",
    },
    
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  /* Navbar Scroll */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock Body Scroll */

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  /* ESC Key */

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  /* Click Outside Drawer */

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-10">

          {/* Logo */}

          <NavLink
            to="/"
            className="leading-none"
            onClick={() => setMenuOpen(false)}
          >
            <h2 className="text-3xl font-black tracking-wider text-white lg:text-4xl">
              GLOBEX
            </h2>

            <p className="mt-1 text-[11px] uppercase tracking-[6px] text-yellow-400">
              INTERNATIONAL
            </p>
          </NavLink>

          {/* Desktop Menu */}

          <nav className="hidden items-center gap-10 lg:flex">
            {links.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative font-medium transition duration-300 ${
                    isActive
                      ? "text-yellow-400"
                      : "text-white/80 hover:text-yellow-400"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}

                    <span
                      className={`absolute -bottom-2 left-0 h-[2px] bg-yellow-400 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Button */}

          <NavLink
            to="/contact"
            className="hidden rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black shadow-lg shadow-yellow-500/30 transition duration-300 hover:scale-105 hover:bg-yellow-400 lg:inline-flex"
          >
            Request Quote
          </NavLink>

          {/* Mobile Toggle */}

          <button
            onClick={() => setMenuOpen(true)}
            className="text-3xl text-white lg:hidden"
          >
            <HiOutlineMenuAlt3 />
          </button>

        </div>
      </header>
            {/* ================= OVERLAY ================= */}

      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* ================= MOBILE DRAWER ================= */}

      <aside
        ref={drawerRef}
        className={`fixed top-0 right-0 z-[70] flex h-screen w-80 flex-col bg-[#08111d] shadow-2xl transition-transform duration-500 lg:hidden ${
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        {/* Header */}

        <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">

          <div>

            <h2 className="text-2xl font-black tracking-wider text-white">

              GLOBEX

            </h2>

            <p className="mt-1 text-[10px] uppercase tracking-[5px] text-yellow-400">

              INTERNATIONAL

            </p>

          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="rounded-full p-2 text-3xl text-white transition hover:bg-white/10"
          >

            <HiOutlineX />

          </button>

        </div>

        {/* Navigation */}

        <nav className="flex flex-1 flex-col px-6 py-8">

          {links.map((item) => (

            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `mb-2 rounded-xl px-4 py-4 text-lg font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-yellow-500 text-black"
                    : "text-white hover:bg-white/5 hover:text-yellow-400"
                }`
              }
            >

              {item.name}

            </NavLink>

          ))}

        </nav>

        {/* Bottom CTA */}

        <div className="border-t border-white/10 p-6">

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex w-full items-center justify-center rounded-full bg-yellow-500 py-4 text-lg font-semibold text-black transition hover:bg-yellow-400"
          >

            Request Quote

          </NavLink>

        </div>

      </aside>
          </>
  );
}