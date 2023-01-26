import CategoryTiles from "../../components/Features/Categories/Categories";
import CompanyInfo from "../../components/Features/CompanyInfo/CompanyInfo";
import IconScroller from "../../components/Features/IconScroller/IconScroller";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGithub,
  FaStackOverflow,
  FaCode,
  FaPencilRuler,
  FaServer,
} from "react-icons/fa";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import LockIcon from "@material-ui/icons/Lock";
import DesignIcon from "@material-ui/icons/Brush";
import DevelopIcon from "@material-ui/icons/Code";
import HostingIcon from "@material-ui/icons/Public";
import LaunchIcon from "@material-ui/icons/Launch";
import Demo from "./Demo";
import BetterFeatures from "../../components/Features/BetterFeatures/BetterFeatures";
import EventSchedule from "../../components/Features/EventSchedule-WIP/EventSchedule";
import FeatureCTA from "../../components/Features/FeatureCTA/FeatureCTA";
import FeaturedProducts from "../../components/Features/FeaturedProducts/FeaturedProduct";
import FeatureTiles from "../../components/Features/FeatureTiles/FeatureTiles";
import LatestNews from "../../components/Features/LatestNews/LatestNews";
import OurProcess from "../../components/Features/OurProcess/OurProcess";
import Partners from "../../components/Features/Partners/Partners";
import Reviews from "../../components/Features/Reviews/Reviews";
import WhatWeDo from "../../components/Features/WhatWeDo/WhatWeDo";

const partners = [
  {
    id: 1,
    icon: FaTwitter,
  },
  {
    id: 2,
    icon: FaFacebook,
  },
  {
    id: 3,
    icon: FaInstagram,
  },
  {
    id: 4,
    icon: FaLinkedin,
  },
  {
    id: 5,
    icon: FaYoutube,
  },
  {
    id: 6,
    icon: FaGithub,
  },
  {
    id: 7,
    icon: FaStackOverflow,
  },
];

const products = [
  {
    id: 1,
    name: "Camera",
    image: "images/products/product1.webp",
    rating: 4,
    price: "10.99",
    description: "Takes Pictures",
  },
  {
    id: 2,
    name: "Titty Camera",
    image: "images/products/product2.jpeg",
    rating: 3,
    price: "20.99",
    description: "It's a fucking camera",
  },
  {
    id: 3,
    name: "Drugs",
    image: "images/products/product3.jpeg",
    rating: 5,
    price: "30.99",
    description: "Take em",
  },
  // and so on
];

const data = [
  {
    title: "Design",
    description:
      "Our experienced designers create visually stunning websites that accurately reflect your brand and appeal.",
    icon: DesignIcon,
  },
  {
    title: "Develop",
    description:
      "Our developers use the latest technologies and best practices to turn your design into a fully functional website.",
    icon: DevelopIcon,
  },
  {
    title: "Secure",
    description:
      "We implement industry-standard security measures to protect your website and users' data.",
    icon: LockIcon,
  },
  {
    title: "Host",
    description:
      "We offer a variety of hosting options optimized for speed and reliability, and provide ongoing support.",
    icon: HostingIcon,
  },
  {
    title: "Launch",
    description:
      "We ensure a smooth launch of your website, including SEO optimization and social media promotion.",
    icon: LaunchIcon,
  },
  {
    title: "Maintain",
    description:
      "We provide ongoing maintenance services to keep your website updated and running smoothly.",
    icon: AllInclusiveIcon,
  },
];

const whatWeDoData = [
  {
    icon: FaCode,
    title: "Development",
    description:
      "We specialize in creating custom software solutions for businesses of all sizes.",
    onClick: () => console.log("Development clicked"),
  },
  {
    icon: FaPencilRuler,
    title: "Design",
    description:
      "We design visually stunning interfaces and user experiences that are easy to use.",
    onClick: () => console.log("Design clicked"),
  },
  {
    icon: FaServer,
    title: "Infrastructure",
    description:
      "We ensure your software is running smoothly and securely on the cloud or on-premises.",
    onClick: () => console.log("Infrastructure clicked"),
  },
];

const featureComponents = [
  {
    component: CategoryTiles,
    title: "CategoryTiles",
  },
  {
    component: CompanyInfo,
    title: "CompanyInfo",
  },
  {
    component: IconScroller,
    title: "IconScroller",
    props: { data: partners },
  },
  {
    component: FeatureCTA,
    title: "FeatureCTA",
  },
  {
    component: FeaturedProducts,
    title: "FeaturedProducts",
    props: { products },
  },
  {
    component: FeatureTiles,
    title: "FeatureTiles",
  },
  {
    component: OurProcess,
    title: "OurProcess",
    props: {
      data: data,
      title: "Creating and Hosting Websites",
      subtitle: "Our Process",
    },
  },
  {
    component: Partners,
    title: "Partners",
  },
  {
    component: Reviews,
    title: "Reviews",
  },
  {
    component: LatestNews,
    title: "LatestNews",
  },
  {
    component: WhatWeDo,
    title: "WhatWeDo WIP",
    props: { data: whatWeDoData },
  },
  {
    component: EventSchedule,
    title: "EventSchedule WIP",
  },
  {
    component: BetterFeatures,
    title: "BetterFeatures WIP",
  },
];

export default function FeatureDemo() {
  return (
    <div style={{ maxWidth: "100vw" }}>
      <Demo demoTitle="Feature Components" components={featureComponents} />
    </div>
  );
}
