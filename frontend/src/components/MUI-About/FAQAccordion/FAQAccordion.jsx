import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Paper,
} from "@material-ui/core";
import { MdExpandMore } from "react-icons/Md";
import { FaQuestion } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import faqData from "./faqData";
import { Grid } from "@material-ui/core";

const transitionProps = {
  timeout: {
    enter: 400,
    exit: 400,
  },
  mountOnEnter: true,
  unmountOnExit: true,
  addEndListener: (node, done) => {
    node.addEventListener("transitionend", done, false);
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    backgroundColor: "#1C1C1C",
    color: theme.palette.common.white,
    padding: theme.spacing(4),
  },
  question: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: theme.spacing(1),
    marginBottom: 4,
    color: "white",
    fontSize: "1rem",
  },
  heading: {
    fontSize: "1.2rem",
    fontWeight: 700,
    fontFamily: "Poppins",
    color: "white",
  },
  details: {
    padding: theme.spacing(2),
    backgroundColor: "#242424",
    color: "white",
    fontFamily: "Poppins",
    textAlign: "left",
  },
  summary: {
    backgroundColor: "#242424",
    fontFamily: "Poppins",
    color: "white",
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
  const [expanded, setExpanded] = React.useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    if (isExpanded) {
      setExpanded([...expanded, panel]);
    } else {
      setExpanded(expanded.filter((p) => p !== panel));
    }
  };

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
                <Accordion
                  expanded={expanded.includes(faq.id)}
                  onChange={handleChange(faq.id)}
                  disableGutters="true"
                  TransitionProps={transitionProps}
                >
                  <AccordionSummary
                    expandIcon={<MdExpandMore color="white" />}
                    aria-controls={`${faq.id}-content`}
                    id={`${faq.id}-header`}
                    className={classes.summary}
                  >
                    <div className={classes.question}>
                      <Typography className={classes.heading}>
                        {faq.question}
                      </Typography>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails className={classes.details}>
                    <Typography>{faq.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default FAQAccordion;
