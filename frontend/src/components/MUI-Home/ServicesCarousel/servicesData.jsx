import {
  FaLaptopCode,
  FaCloud,
  FaMobileAlt,
  FaRocket,
  FaLock,
  FaCog,
  FaLightbulb,
  FaStar,
  FaConnectdevelop,
} from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    title: "Service 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    image: "/images/cards/1.svg",
    topFeatures: [
      {
        name: "Feature 1",
        description: "Description for Feature 1",
        icon: <FaLaptopCode />,
      },
      {
        name: "Feature 2",
        description: "Description for Feature 2",
        icon: <FaCloud />,
      },
      {
        name: "Feature 3",
        description: "Description for Feature 3",
        icon: <FaRocket />,
      },
    ],
  },
  {
    id: 2,
    title: "Service 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    image: "/images/cards/2.svg",
    topFeatures: [
      {
        name: "Feature 1",
        description: "Description for Feature 1",
        icon: <FaMobileAlt />,
      },
      {
        name: "Feature 2",
        description: "Description for Feature 2",
        icon: <FaLock />,
      },
      {
        name: "Feature 3",
        description: "Description for Feature 3",
        icon: <FaCog />,
      },
    ],
  },
  {
    id: 2,
    title: "Service 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    image: "/images/cards/3.svg",
    topFeatures: [
      {
        name: "Feature 1",
        description: "Description for Feature 1",
        icon: <FaLightbulb />,
      },
      {
        name: "Feature 2",
        description: "Description for Feature 2",
        icon: <FaStar />,
      },
      {
        name: "Feature 3",
        description: "Description for Feature 3",
        icon: <FaConnectdevelop />,
      },
    ],
  },
  // Add more service objects here
];

export default servicesData;
