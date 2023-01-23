import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";

const items = [
  {
    image: "images/masonry/img1.jpg",
    buttonText: "View Project",
    buttonLink: "/item-1",
  },
  {
    image: "images/masonry/img2.jpg",
    buttonText: "View Project",
    buttonLink: "/item-2",
  },
  {
    image: "images/masonry/img3.jpg",
    buttonText: "View Project",
    buttonLink: "/item-3",
  },
];

const useStyles = makeStyles({
  carousel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  paper: {
    minWidth: 330,
    backgroundColor: "#fafafa",
    padding: "0.5rem",
    width: "100%",
  },
  card: {
    width: "100%",
    paddingBottom: "56.25%",
  },
  media: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    objectFit: "cover",
  },
  cardContent: {
    height: "44%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: "auto",
  },
});

const CarouselX = ({ items }) => {
  const classes = useStyles();

  return (
    <div className={classes.carousel}>
      <Paper elevation={3} className={classes.paper}>
        <Carousel
          navButtonsAlwaysVisible={true}
          animation="fade"
          autoPlay={true}
          interval={3000}
          timeout={300}
          swipe={true}
        >
          {items.map((item, index) => (
            <div>
              <Card className={classes.card} key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={classes.media}
                />
              </Card>
              <Button
                variant="contained"
                color="primary"
                href={item.buttonLink}
                className={classes.button}
              >
                {item.buttonText}
              </Button>
            </div>
          ))}
        </Carousel>
      </Paper>
    </div>
  );
};

export default CarouselX;
