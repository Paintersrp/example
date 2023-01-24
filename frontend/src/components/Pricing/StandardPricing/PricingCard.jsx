import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";
import PricingDetails from "./PricingDetails";
import {
  CardMedia,
  Grid,
  Typography,
  CardContent,
  Button,
  Card,
  List,
  ListItem,
} from "@material-ui/core";
import { TypingEffect } from "../../../pages/Test/Test";
import PricingContact from "./PricingContact";

const CustomButton = withStyles({
  label: {
    fontWeight: "700 !important",
    fontFamily: "Poppins !important",
    fontSize: "0.85rem !important",
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  pricingCard: {
    color: "white",
    backgroundColor: "#212121",
    maxWidth: 375,
    minWidth: 375,
    margin: theme.spacing(4),
    padding: theme.spacing(3),
    boxShadow: theme.shadows[7],
    transition: "box-shadow 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.005)",
      boxShadow: theme.shadows[14],
    },

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  pricingTitle: {
    marginBottom: theme.spacing(0),
    fontWeight: 600,
    fontSize: "1.75rem",
    textAlign: "center",
    fontFamily: "Poppins",
    color: "gold",
    opacity: 0.9,
  },
  pricingPrice: {
    fontSize: "1.3rem",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5,
    margin: 0,
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
      transform: "scale(1.02)",
      boxShadow: theme.shadows[7],
      backgroundColor: theme.palette.primary.dark,
    },
  },
  checkIcon: {
    color: "gold;",
    marginRight: "10px",
  },
  media: {
    height: 200,
    width: "auto",
    scale: "0.95",
    padding: 0,
    marginBottom: 20,
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
}));

export default function PricingCard({ pricingData, plan, index }) {
  const classes = useStyles();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);

  return (
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
          <TypingEffect duration="0.2" text={plan.title} />
        </Typography>
        <Grid container direction="row" align="center" justifyContent="center">
          <Typography className={classes.pricingPrice}>
            <div style={{ display: "flex" }}>${plan.price}/month</div>
          </Typography>
        </Grid>
        <List className={classes.pricingFeatures}>
          {plan.features.map((feature) => (
            <ListItem key={feature}>
              <CheckIcon className={classes.checkIcon} />
              {feature}
            </ListItem>
          ))}
        </List>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <CustomButton
              className={classes.pricingButton}
              onClick={() => setSelectedPlan(index)}
            >
              View Details
            </CustomButton>
            {selectedPlan !== null && (
              <PricingDetails
                plan={pricingData[selectedPlan]}
                close={() => setSelectedPlan(null)}
              />
            )}
          </Grid>
          <Grid item xs={6}>
            <CustomButton
              className={classes.pricingButton}
              onClick={() => setSelectedContact(1)}
            >
              Contact
            </CustomButton>
            {selectedContact !== null && (
              <PricingContact close={() => setSelectedContact(null)} />
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
