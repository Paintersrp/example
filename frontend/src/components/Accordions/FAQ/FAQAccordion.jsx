import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import faqData from "./faqData";
import { Grid } from "@material-ui/core";
import AccordionQA from "../../Parts/AccordionQA/AccordionQA";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    backgroundColor: "#1C1C1C",
    color: theme.palette.common.white,
    padding: theme.spacing(4),
  },
  title: {
    textAlign: "center",
    color: "#f9f9f9",
    fontWeight: "700",
    fontFamily: "Poppins",
    paddingBottom: 5,
  },
  containergrid: {
    display: "flex",
    width: "100%",
  },
}));

const FAQAccordion = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        className={classes.containergrid}
      >
        <Grid item xs={12}>
          <Typography variant="h4" className={classes.title}>
            Frequently Asked Questions
          </Typography>
        </Grid>
        <Paper elevation={6} className={classes.root}>
          <Grid container spacing={2}>
            {faqData.map((faq) => (
              <Grid item xs={12}>
                {/* 
                AccordionQA is a component that renders Accordion Question and Answer sections using a passed in FAQ from a Data Array 
                Example of FAQ Data Array:
                {
                  question: "Do you offer international shipping?",
                  answer:
                    "Yes, we offer international shipping. Please note that shipping rates and delivery times may vary depending on the destination and shipping method chosen.",
                  id: "1",
                },

                */}
                <AccordionQA faq={faq} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default FAQAccordion;
