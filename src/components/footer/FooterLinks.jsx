import footer from "../../data/footer";

const FooterLinks = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

      {/* Contact */}

      <div>

        <h3 className="text-white text-xl font-semibold mb-6">
          Contact
        </h3>

        <div className="space-y-5">

          {footer.contact.map((item, index) => {

            const Icon = item.icon;

            return (

              <div key={index} className="flex gap-4">

                <div className="w-11 h-11 rounded-xl border border-yellow-500/20 bg-yellow-500/10 flex items-center justify-center text-yellow-400 shrink-0">

                  <Icon size={20} />

                </div>

                <div>

                  <h4 className="text-white font-medium">

                    {item.title}

                  </h4>

                  <p className="text-gray-400 text-sm mt-1">

                    {item.value}

                  </p>

                </div>

              </div>

            );

          })}

        </div>

      </div>

      {/* Quick Links */}

      <div>

        <h3 className="text-white text-xl font-semibold mb-6">
          Quick Links
        </h3>

        <ul className="space-y-4">

          {footer.quickLinks.map((link, index) => (

            <li key={index}>

              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:translate-x-2 inline-block"
              >

                {link}

              </a>

            </li>

          ))}

        </ul>

      </div>

      {/* Products */}

      <div>

        <h3 className="text-white text-xl font-semibold mb-6">
          Products
        </h3>

        <ul className="space-y-4">

          {footer.products.map((item, index) => (

            <li
              key={index}
              className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
            >

              {item}

            </li>

          ))}

        </ul>

      </div>

    </div>
  );
};

export default FooterLinks;