import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { Icon, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    minHeight: 550,
    minWidth: 325,
    padding: 0,
    margin: 0,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    textAlign: "center",
    color: "white",
    backgroundColor: "#1C1C1C",
    maxWidth: 1400,
  },
  iconContainer: {
    textAlign: "center",
    marginTop: 20,
  },
  icon: {
    fontSize: "2rem",
    color: "gold",
  },
  title: {
    fontFamily: "Poppins",
    textAlign: "center",
    color: "white",
    fontWeight: 700,
    fontSize: "2rem",
    border: 0,
  },
  subtitle: {
    fontSize: "0.9rem",
    fontWeight: 700,
    fontFamily: "Poppins",
    textAlign: "center",
    color: "gold",
  },
  heading: {
    fontFamily: "Poppins",
    textAlign: "center",
    fontWeight: 700,
    fontSize: "1.5rem",
    border: 0,
  },
  description: {
    fontSize: "0.9rem",
    fontWeight: 700,
    fontFamily: "Poppins",
    textAlign: "center",
    marginBottom: theme.spacing(1),
    color: "white",
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center",
    minWidth: 350,
  },
  stepContainer: {
    display: "flex",
    justifyContent: "center",
    maxWidth: 550,
  },
  divider: {
    color: "white",
    backgroundColor: "white",
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function CompanyProcess({ data, title, subtitle }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
            margin: 0,
          }}
        >
          <Paper elevation={9} className={classes.paper}>
            <Typography variant="subtitle1" className={classes.subtitle}>
              {subtitle}
            </Typography>
            <Typography variant="h3" className={classes.title}>
              {title}
            </Typography>

            <Grid container spacing={2} className={classes.gridContainer}>
              {data.map((step, index) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  className={classes.center}
                >
                  <Grid container spacing={1} className={classes.stepContainer}>
                    <Grid className={classes.iconContainer} item xs={12}>
                      <step.icon className={classes.icon} />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className={classes.heading}>
                        {step.title}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="body1"
                        className={classes.description}
                      >
                        {step.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
