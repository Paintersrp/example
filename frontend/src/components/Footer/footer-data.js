import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const footerData = [
  {
    title: "Quick Links",
    links: [
      { url: "/about", label: "About Us" },
      { url: "/services", label: "Services" },
      { url: "/contact", label: "Contact Us" },
      { url: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        url: "/privacy-policy",
        label: "Privacy Policy",
      },
      {
        url: "/terms-of-use",
        label: "Terms of Use",
      },
    ],
  },
];

export default footerData;
