import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiGlobe,
} from "react-icons/fi";

const footer = {
  company: {
    name: "GLOBEX INTERNATIONAL",
    description:
      "Leading exporter of premium agricultural products from India to global markets with quality, reliability and trust.",
  },

  contact: [
    {
      icon: FiMapPin,
      title: "Address",
      value: "Nagpur, Maharashtra, India",
    },
    {
      icon: FiPhone,
      title: "Phone",
      value: "+91 98765 43210",
    },
    {
      icon: FiMail,
      title: "Email",
      value: "info@theglobexinternational.com",
    },
    {
      icon: FiGlobe,
      title: "Website",
      value: "www.theglobexinternational.com",
    },
  ],

  quickLinks: [
    "Home",
    "About",
    "Products",
    "Contact",
  ],

  products: [
    "Fresh Onion",
    "Premium Rice",
    "Indian Spices",
    "Fresh Garlic",
    "Green Chilli",
    "Turmeric",
    "Fresh Potato",
  ],
};

export default footer;