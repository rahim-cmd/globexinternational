import FooterTop from "./FooterTop";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-[#0b1220] border-t border-yellow-500/20">

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top Area */}

        <div className="grid lg:grid-cols-4 gap-14">

          {/* Company */}

          <div>
            <FooterTop />
          </div>

          {/* Remaining 3 Columns */}

          <div className="lg:col-span-3">
            <FooterLinks />
          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16">
          <FooterBottom />
        </div>

      </div>

    </footer>
  );
};

export default Footer;