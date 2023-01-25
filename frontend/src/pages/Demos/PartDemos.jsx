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

const formComponents = [
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
];

export default function PartsDemo() {
  return (
    <div>
      <Demo demoTitle="Parts Components" components={formComponents} />
    </div>
  );
}
