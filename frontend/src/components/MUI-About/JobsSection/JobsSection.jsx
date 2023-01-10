import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import CareersOpportunities from "./CareersOpportunities";
import TestimonialsCarousel from "./TestimonialsCarousel/TestimonialsCarousel";
import CareersOpportunities from "./CareerOpportunities/CareerOpportunities";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  gridcontainer: {},
}));

const JobsSection = () => {
  const classes = useStyles();

  return (
    <div className="">
      <div className="card-container-about">
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          <Grid
            item
            xs={12}
            md={10}
            lg={8}
            justifyContent="center"
            className={classes.gridcontainer}
          >
            <CareersOpportunities />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default JobsSection;
{
  /* <Grid item xs={12} md={6}>
          <TestimonialsCarousel />
        </Grid> */
}
