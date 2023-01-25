import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Box } from "@material-ui/core";
import { SlideOnScroll } from "../../Animations/IntoView/Slide/SlideViewPort";
import HeroBlock from "../../Parts/HeroBlock/HeroBlock";
import CarouselX from "../../Carousels/ImgCarousel/ImgCarousel";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Poppins",
    backgroundColor: "#212121",
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(12),
    position: "relative",
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
}));

export default function HeroCarousel({ items }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container style={{ maxWidth: "95%" }} className={classes.gridContainer}>
        <Grid container className={classes.grid}>
          <Grid item xs={12} md={6} className={classes.gridItemLeft}>
            <HeroBlock
              title="Custom Designs"
              heading="Modern Framework, <br /> Design, and Hosting"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium elit sed consectetur ultricies. Praesent lacinia luctus lacus, sit amet cursus nisl faucibus ac. Proin sollicitudin, tellus et scelerisque hendrerit, leo turpis ornare diam, ac fermentum massa diam a nisi."
              btnText="Get Started"
              btnLink="/about"
            />
          </Grid>

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
