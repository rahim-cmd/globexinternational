import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    "Home",
    "About",
    "Products",
    "Countries",
    "Gallery",
    "Contact",
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-slate-900/70 border-b border-white/10 shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="flex items-center justify-between h-24">

            {/* Logo */}

           <div className="leading-none">

  <h2 className="text-3xl lg:text-4xl font-black text-white tracking-wider">

    GLOBEX

  </h2>

  <p className="text-[11px] uppercase tracking-[6px] text-yellow-400 mt-1">

    INTERNATIONAL

  </p>

</div>

            {/* Desktop Menu */}

            <nav className="hidden lg:flex items-center gap-10">

              {links.map((item) => (

                <a
                  key={item}
                  href={item}
                  className="text-white/80 hover:text-yellow-400 transition duration-300 font-medium"
                >
                  {item}
                </a>

              ))}

            </nav>

            {/* Button */}

            <div className="hidden lg:block">

              <button
                className="
                px-6
                py-3
                rounded-full
                bg-yellow-500
                text-black
                font-semibold
                hover:scale-105
                hover:bg-yellow-400
                transition
                duration-300
                shadow-lg
                shadow-yellow-500/30
                "
              >
                Request Quote
              </button>

            </div>

            {/* Mobile */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white text-3xl"
            >
              {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Drawer */}

      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-slate-950 border-l border-white/10 z-[60] transition-all duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="p-8">

          <div className="flex justify-between items-center mb-10">

            <h2 className="text-white text-2xl font-bold">

              GLOBEX

            </h2>

            <button
              onClick={() => setMenuOpen(false)}
              className="text-white text-3xl"
            >
              <HiOutlineX />
            </button>

          </div>

          <div className="flex flex-col gap-7">

            {links.map((item) => (

              <a
                key={item}
                href="#"
                className="text-lg text-white/80 hover:text-yellow-400 transition"
              >
                {item}
              </a>

            ))}

            <button
              className="
              mt-5
              bg-yellow-500
              text-black
              py-3
              rounded-full
              font-semibold
              "
            >
              Request Quote
            </button>

          </div>

        </div>

      </div>
    </>
  );
}