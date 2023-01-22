import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import {
  FaShirtsinbulk,
  FaSocks,
  FaShoePrints,
  FaWineBottle,
  FaGift,
  FaLaptop,
  FaWallet,
  FaFootballBall,
} from "react-icons/fa";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
    backgroundColor: "#242424",
  },
  outerPaper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(1),
    backgroundColor: "#242424",
    color: "white",
    maxWidth: 1400,
  },
  innerPaper: {
    minWidth: 200,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#1C1C1C",
    margin: theme.spacing(1),
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.02)",
      boxShadow: theme.shadows[10],
      backgroundColor: theme.palette.action.hover,
    },
  },
  icon: {
    fontSize: "3rem",
    marginBottom: 10,
    color: "#FDD017",
  },
  link: {
    textDecoration: "none",
  },
  button: {
    minWidth: 140,
    margin: theme.spacing(1),
    boxShadow: theme.shadows[3],
    backgroundColor: "#1C1C1C",
    color: theme.palette.primary.contrastText,
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: theme.shadows[7],
      backgroundColor: theme.palette.action.hover,
    },
  },
  tileContainer: {
    display: "flex",
    justifyContent: "center",
  },
  tileText: {
    fontSize: "0.9rem",
    fontFamily: "Poppins",
    fontWeight: 700,
    color: "white",
  },
  subheading: {
    fontSize: "0.9rem",
    fontFamily: "Poppins",
    fontWeight: 700,
    color: "#FDD017",
  },
  heading: {
    fontSize: "2rem",
    fontFamily: "Poppins",
    fontWeight: 700,
    color: "white",
  },
}));

const categories = [
  { name: "Clothing", icon: FaShirtsinbulk, link: "/clothing" },
  { name: "Accessories", icon: FaSocks, link: "/accessories" },
  { name: "Shoes", icon: FaShoePrints, link: "/shoes" },
  { name: "Titty Milk", icon: FaWineBottle, link: "/wine" },
  { name: "Gifts", icon: FaGift, link: "/gifts" },
  { name: "Electronics", icon: FaLaptop, link: "/electronics" },
  { name: "Sporting Goods", icon: FaFootballBall, link: "/sports" },
  { name: "Wallets", icon: FaWallet, link: "/wallet" },
];

export default function CategoryTiles() {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 40 }}>
      <Paper className={classes.outerPaper} elevation={9}>
        <Typography className={classes.subheading}>Categories</Typography>
        <Typography className={classes.heading}>
          Explore Our Products
        </Typography>

        <div className={classes.root}>
          <Grid container spacing={1}>
            {categories.map((category) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={category.name}>
                <Link to={category.link} className={classes.link}>
                  <div className={classes.tileContainer}>
                    <Paper className={classes.innerPaper} elevation={3}>
                      <category.icon className={classes.icon} />
                      <Typography className={classes.tileText}>
                        {category.name}
                      </Typography>
                    </Paper>
                  </div>
                </Link>
              </Grid>
            ))}
          </Grid>
          <div style={{ marginTop: 10 }}>
            <Button variant="contained" className={classes.button}>
              View All
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
}
