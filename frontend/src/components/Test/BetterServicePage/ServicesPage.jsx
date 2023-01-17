import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CheckIcon from "@material-ui/icons/Check";
import PricingDetails from "./PricingDetails";
import { CardMedia, Grid, Slide } from "@material-ui/core";
import { NumberCounter, TypingEffect } from "../Animations";
import PricingContact from "./PricingContact";

const useStyles = makeStyles((theme) => ({
  pricingContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  pricingCard: {
    color: "white",
    backgroundColor: "#212121",
    width: "30%",
    margin: theme.spacing(2),
    boxShadow:
      "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)",
    transition: "box-shadow 0.3s ease-in-out",
    "&:hover": {
      boxShadow:
        "0px 3px 6px 0px rgba(0,0,0,0.2), 0px 3px 3px 0px rgba(0,0,0,0.14), 0px 4px 3px -2px rgba(0,0,0,0.12)",
      transform: "scale(1.01)",
    },

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  pricingBox: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  pricingTitle: {
    marginBottom: theme.spacing(2),
    fontWeight: 700,
    fontSize: "2rem",
    textAlign: "center",
    fontFamily: "Poppins",
  },
  pricingPrice: {
    fontSize: "40px",
    textAlign: "center",
    display: "inline-block",
    fontFamily: "Poppins",
  },
  pricingAmount: {
    fontSize: "50px",
    fontWeight: 600,
    color: "gray.800",
    display: "inline-block",
  },
  pricingFeatures: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
  pricingButton: {
    marginTop: theme.spacing(2),
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  pricingDetails: {
    marginTop: theme.spacing(6),
  },
  pricingText: {
    display: "inline-block",
    marginLeft: "10px",
    fontSize: "20px",
    fontFamily: "Poppins",
  },
  checkIcon: {
    color: "#006400;",
    marginRight: "10px",
  },
  media: {
    height: 300,
    width: "auto",
    scale: "0.75",
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
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <Slide in={true} direction="up" timeout={1000}>
      <div className={classes.pricingContainer}>
        {pricingData.map((plan, index) => (
          <Card className={classes.pricingCard} key={plan.title}>
            <CardContent>
              <CardMedia
                className={classes.media}
                image={plan.image}
                title={plan.title}
                justifyContent="center"
                alignItems="center"
              />
              <Typography className={classes.pricingTitle}>
                <TypingEffect duration="0.2" text={plan.title}></TypingEffect>
              </Typography>
              <Grid container direction="row" align="center" justify="center">
                <Typography className={classes.pricingPrice}>
                  <div style={{ display: "flex" }}>${plan.price}</div>
                </Typography>
                <Typography className={classes.pricingText}>/month</Typography>
              </Grid>
              <List className={classes.pricingFeatures}>
                {plan.features.map((feature) => (
                  <ListItem key={feature}>
                    <CheckIcon className={classes.checkIcon} />
                    {feature}
                  </ListItem>
                ))}
              </List>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button
                    className={classes.pricingButton}
                    onClick={() => setSelectedPlan(index)}
                  >
                    View Details
                  </Button>
                  {selectedPlan !== null && (
                    <PricingDetails
                      plan={pricingData[selectedPlan]}
                      close={() => setSelectedPlan(null)}
                    />
                  )}
                </Grid>
                <Grid item xs={6}>
                  <Button
                    className={classes.pricingButton}
                    onClick={() => setSelectedContact(1)}
                  >
                    Contact
                  </Button>
                  {selectedContact !== null && (
                    <PricingContact close={() => setSelectedContact(null)} />
                  )}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </div>
    </Slide>
  );
}
