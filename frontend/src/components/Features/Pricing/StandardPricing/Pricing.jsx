import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Slide } from "@material-ui/core";
import PricingCard from "./PricingCard";

const useStyles = makeStyles((theme) => ({
  pricingContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const pricingData = [
  {
    title: "Personal",
    price: 19,
    image: "/images/cards/1.svg",
    features: [
      "Template Designed Website",
      "Styling and Design Control",
      "Managed VPS Hosting",
      "Content Management Tools",
      "Secure Authentication",
      "Admin Dashboard",
      "Google AdSense / Analytics",
    ],
    extraDetails: {
      bestFor: "Hobby projects and small personal sites",
      guarantee: "30-day money back guarantee",
      supportedSites: [
        "Static HTML sites",
        "CMS-based sites",
        "E-commerce sites",
      ],
    },
  },
  {
    title: "Professional",
    price: 199,
    image: "/images/cards/2.svg",
    features: [
      "Custom Designed Website",
      "Built to Specifications",
      "Consistent Updates on Request",
      "Styling and Design Control",
      "Content Management Tools",
      "Secure Authentication",
      "Admin Dashboard",
    ],
    extraDetails: {
      bestFor: "Professional projects and small business sites",
      guarantee: "60-day money back guarantee",
      supportedSites: [
        "Static HTML sites",
        "CMS-based sites",
        "E-commerce sites",
        "SaaS platforms",
        "Static HTML sites",
        "CMS-based sites",
        "E-commerce sites",
        "SaaS platforms",
        "Static HTML sites",
        "CMS-based sites",
        "E-commerce sites",
        "SaaS platforms",
      ],
    },
  },
  {
    title: "Enterprise",
    price: 499,
    image: "/images/cards/3.svg",
    features: [
      "Custom Designed Website",
      "Built to Specifications",
      "Consistent Updates on Request",
      "Styling and Design Control",
      "Content Management Tools",
      "Secure Authentication",
      "Admin Dashboard",
    ],
    extraDetails: {
      bestFor: "Large enterprise projects and high-traffic sites",
      guarantee: "90-day money back guarantee",
      supportedSites: [
        "Static HTML sites",
        "CMS-based sites",
        "E-commerce sites",
        "SaaS platforms",
        "Custom web applications",
      ],
    },
  },
];

export default function PricingOverview() {
  const classes = useStyles();

  return (
    <Slide in={true} direction="up" timeout={1000}>
      <div className={classes.pricingContainer}>
        {pricingData.map((plan, index) => (
          <PricingCard pricingData={pricingData} plan={plan} index={index} />
        ))}
      </div>
    </Slide>
  );
}
