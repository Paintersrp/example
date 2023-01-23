import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Box,
  Typography,
  Button,
  Slide,
  CardMedia,
  Card,
  withStyles,
} from "@material-ui/core";
import { NumberCounter, TypingEffect } from "../../../pages/Test/Test";
import { Link } from "react-router-dom";
import { SlideOnScroll } from "../../Animations/SlideViewPort";
import { TypingIn } from "../../Animations/TypingIn";
import CarouselX from "../../Carousels/ImgCarousel/ImgCarousel";
import Carousel from "react-material-ui-carousel";

const CustomButton = withStyles({
  label: {
    fontWeight: "700 !important",
    fontFamily: "Poppins !important",
    fontSize: "0.85rem !important",
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Poppins",
    backgroundColor: "#212121",
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    position: "relative",
  },
  overlay: {
    fontFamily: "Poppins",
    position: "absolute",
    width: "50%",
    height: "100%",
    right: 0,
    top: 0,
    backgroundColor: "#212121",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      backgroundColor: "#1C1C1C",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  title: {
    fontFamily: "Poppins",
    fontWeight: 700,
    textTransform: "uppercase",
    marginBottom: theme.spacing(1),
    fontSize: "1.25rem",
    color: "gold",
  },
  heading: {
    fontFamily: "Poppins",
    color: "white",
    marginBottom: theme.spacing(0),
    fontSize: "2.25rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
  },
  text: {
    fontFamily: "Poppins",
    fontSize: "1.25rem",
    color: theme.palette.grey[400],
    padding: "20px",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      padding: "20px",
    },
  },
  statTitle: {
    fontFamily: "Poppins",
    fontSize: "2.25rem",
    color: "white",
    textAlign: "left",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
  },
  statContent: {
    fontFamily: "Poppins",
    fontSize: "1.1rem",
    color: "white",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      padding: "0px 20px 0px 20px",
    },
  },
  gridContainer: {
    fontFamily: "Poppins",
    zIndex: 10,
    position: "relative",
  },
  grid: {
    fontFamily: "Poppins",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  gridItemLeft: {
    padding: "20px 20px 20px 0px",
    fontFamily: "Poppins",
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
    },
  },
  gridItemRight: {
    padding: "20px 20px 20px 0px",
    fontFamily: "Poppins",
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
    },
  },
  statsGrid: {
    fontFamily: "Poppins",
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
    },
  },
  statsFlex: {
    fontFamily: "Poppins",
    display: "flex",
    justifyContent: "center",
    color: "gold",
  },
  btnCta: {
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: theme.shadows[7],
      backgroundColor: theme.palette.primary.dark,
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  card: {
    boxShadow: theme.shadows[1],
    margin: theme.spacing(0, 0),
  },
  cardContent: {
    textAlign: "center",
  },
}));

export default function HeroCarousel({ items }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <div className={classes.overlay} />
      <Container maxWidth="lg" className={classes.gridContainer}>
        <Grid container className={classes.grid}>
          <Slide in={true} direction="right" timeout={1000}>
            <Grid item xs={12} md={6} className={classes.gridItemLeft}>
              <Box className={classes.title}>Custom Designs</Box>
              <Typography variant="h1" className={classes.heading}>
                Modern Framework, <br />
                Design, and Hosting
              </Typography>
              <Box className={classes.text}>
                <TypingEffect
                  duration="0.02"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus pretium elit sed consectetur ultricies. Praesent
                  lacinia luctus lacus, sit amet cursus nisl faucibus ac. Proin
                  sollicitudin, tellus et scelerisque hendrerit, leo turpis
                  ornare diam, ac fermentum massa diam a nisi."
                ></TypingEffect>
              </Box>
              <CustomButton
                component={Link}
                to="/about"
                color="primary"
                variant="contained"
                className={classes.btnCta}
              >
                Get Started
              </CustomButton>
            </Grid>
          </Slide>
          <Grid item xs={12} md={6}>
            <SlideOnScroll from="right">
              <CarouselX items={items} />
            </SlideOnScroll>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}



const stats = [
  {
    title: "10",
    operator: "+",
    content:
      "Analytics modules for detailed monitoring and real-time breakdowns",
  },
  {
    title: "24",
    operator: "+",
    content:
      "Prebuilt page templates to get every website off the ground and online ASAP",
  },
  {
    title: "30",
    operator: "+",
    content:
      "Styling options to get the most customization out of your website",
  },
  {
    title: "24",
    operator: "/7",
    content: "Availability to discuss upgrades, changes, and ongoing support",
  },
];
