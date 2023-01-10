import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { FaBriefcase, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { Grid, Divider } from "@material-ui/core";
import opportunities from "./opportunities.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    backgroundColor: "#1C1C1C",
    minWidth: 300,
    maxWidth: 1400,
  },
  title: {
    color: theme.palette.common.white,
    fontFamily: "Poppins",
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.grey[300],
  },
  opportunity: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  opportunityDescription: {
    marginLeft: theme.spacing(1),
    color: theme.palette.common.white,
    minWidth: 250,
    textAlign: "left",
  },
  featuregrid: {
    textAlign: "left",
    alignItems: "start",
    fontSize: "0.8rem",
    fontFamily: "Poppins",
    fontWeight: 500,
  },
  subtitle: {
    textAlign: "left",
    alignItems: "start",
    fontSize: "0.8rem",
    fontFamily: "Poppins",
    fontWeight: 500,
  },
  subtitle2: {
    textAlign: "left",
    alignItems: "start",
    fontSize: "1rem",
    fontFamily: "Poppins",
    fontWeight: 700,
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
    color: "white",
    backgroundColor: "white",
    width: "100",
  },
}));

const CareersOpportunities = () => {
  const classes = useStyles();

  return (
    <Paper elevation={6} className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        Careers Opportunities
      </Typography>
      <Grid container spacing={2}>
        {opportunities.map((opportunity, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <div className={classes.opportunity}>
              {opportunity.type === "Full-Time" && (
                <FaBriefcase className={classes.icon} />
              )}
              {opportunity.type === "Part-Time" && (
                <FaClock className={classes.icon} />
              )}
              {opportunity.type === "Internship" && (
                <FaMapMarkerAlt className={classes.icon} />
              )}
              <div className={classes.opportunityDescription}>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  {opportunity.type}
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle2}>
                  {opportunity.position}
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="body2" className={classes.featuregrid}>
                      Location:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" className={classes.featuregrid}>
                      {opportunity.location}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="body2" className={classes.featuregrid}>
                      Date Posted:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" className={classes.featuregrid}>
                      {opportunity.posted}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default CareersOpportunities;
