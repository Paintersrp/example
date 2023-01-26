import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import LockIcon from "@material-ui/icons/Lock";
import DesignIcon from "@material-ui/icons/Brush";
import DevelopIcon from "@material-ui/icons/Code";
import HostingIcon from "@material-ui/icons/Public";
import LaunchIcon from "@material-ui/icons/Launch";
import ContactButtons from "../../components/Parts/ContactButtons";
import ContentBlock from "../../components/Parts/ContentBlock";
import CoreValues from "../../components/Parts/CoreValues";
import FloatingFeature from "../../components/Parts/FloatingFeature";
import HeroBlock from "../../components/Parts/HeroBlock";
import SocialSection from "../../components/Parts/SocialSection";
import TitleBlock from "../../components/Parts/TitleBlock";
import Demo from "./Demo";
import AccordionQA from "../../components/Parts/AccordionQA";
import TestimonialCard from "../../components/Parts/TestimonialCard";
import TeamGrid from "../../components/Team/_SquareCards/SquareCards";
import PricingTier from "../../components/Pricing/_MinimalPricing/MinimalPricing";
import AdvancedSnackbar from "../../components/Parts/Snackbar";
import ComplexFooter from "../../components/Footer/_ComplexFooter/ComplexFooter";

const members = [
  {
    name: "John Doe",
    position: "CEO",
    image: "images/members/member2.webp",
    profile: "https://example.com/john-doe",
    skills: ["Leadership", "Strategy", "Business Development"],
    linkedin: "https://linkedin.com/john-doe",
    twitter: "https://twitter.com/johndoe",
  },
];

const formComponents = [
  {
    component: ComplexFooter,
    title: "ComplexFooter",
  },
  {
    component: PricingTier,
    title: "PricingTier",
  },
  {
    component: TestimonialCard,
    title: "TestimonialCard",
    props: {
      name: "Jane Doe",
      testimonial:
        "I was extremely impressed with the level of service and expertise provided by this company. They exceeded my expectations and I would highly recommend them to anyone.",
      company: "ABC Inc.",
      position: "CEO",
      image: "https://randomuser.com/api/portraits/women/1.jpg",
      color: "gold",
      textcolor: "#1C1C1C",
    },
  },
  {
    component: AccordionQA,
    title: "AccordionQA",
    props: {
      faq: {
        question: "Do you offer international shipping?",
        answer:
          "Yes, we offer international shipping. Please note that shipping rates and delivery times may vary depending on the destination and shipping method chosen.",
        id: "1",
      },
    },
  },
  {
    component: HeroBlock,
    title: "HeroBlock",
    props: {
      title: "Custom Designs",
      heading: "Modern Framework, <br /> Design, and Hosting",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium elit sed consectetur ultricies. Praesent lacinia luctus lacus, sit amet cursus nisl faucibus ac. Proin sollicitudin, tellus et scelerisque hendrerit, leo turpis ornare diam, ac fermentum massa diam a nisi.",
      btnText: "Get Started",
      btnLink: "/about",
    },
  },
  {
    component: TitleBlock,
    title: "TitleBlock",
    props: {
      subtitle: "Categories",
      title: "Explore Our Products",
      description: "Suck Titties",
      alignment: "Center",
      showDivider: false,
    },
  },
  {
    component: ContentBlock,
    title: "ContentBlock",
    props: {
      title: "Explore Our Products",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium elit sed consectetur ultricies. Praesent lacinia luctus lacus, sit amet cursus nisl faucibus ac. Proin sollicitudin, tellus et scelerisque hendrerit, leo turpis ornare diam, ac fermentum massa diam a nisi.",
    },
  },
  {
    component: ContactButtons,
    title: "ContactButtons",
  },
  {
    component: SocialSection,
    title: "SocialSection",
  },
  {
    component: CoreValues,
    title: "CoreValues",
  },
  {
    component: FloatingFeature,
    title: "FloatingFeature",
    props: {
      step: {
        title: "Design",
        description:
          "Our experienced designers create visually stunning websites that accurately reflect your brand and appeal.",
        icon: DesignIcon,
      },
    },
  },
  {
    component: AdvancedSnackbar,
    title: "AdvancedSnackbar",
    props: {
      message: "This is a success message",
      type: "success",
      position: "top-right",
    },
  },
  {
    component: AdvancedSnackbar,
    title: "AdvancedSnackbar",
    props: {
      message: "This is an error message",
      type: "error",
      position: "bottom-right",
    },
  },
  {
    component: AdvancedSnackbar,
    title: "AdvancedSnackbar",
    props: {
      message: "This is an warning message",
      type: "warning",
      position: "bottom-left",
    },
  },
  {
    component: AdvancedSnackbar,
    title: "AdvancedSnackbar",
    props: {
      message: "This is an info message",
      type: "info",
      position: "top-left",
    },
  },
];

export default function PartsDemo() {
  return (
    <div>
      <Demo demoTitle="Parts Components" components={formComponents} />
    </div>
  );
}
