import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  card: {
    maxWidth: 500,
    margin: "0 auto",
    textAlign: "center",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
  },
  quote: {
    fontStyle: "italic",
  },
  author: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
  avatar: {
    width: 80,
    height: 80,
    marginRight: theme.spacing(1),
  },
  name: {
    fontWeight: "bold",
    color: theme.palette.common.white,
  },
}));

const TestimonialsCarousel = () => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <Slider {...settings}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.quote}>
            "I've been with the company for over 5 years and I can honestly say
            that it's the best decision I've made. The team is supportive, the
            work is challenging and rewarding, and the company values align with
            my own."
          </Typography>
          <div className={classes.author}>
            <img src="/avatar1.jpg" alt="Avatar" className={classes.avatar} />
            <Typography variant="body2" className={classes.name}>
              Sarah Johnson
            </Typography>
          </div>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.quote}>
            "I was hesitant to join a startup, but the company's culture and
            vision convinced me. It's been an amazing experience so far and I'm
            excited to see where the company goes."
          </Typography>
          <div className={classes.author}>
            <img src="/avatar2.jpg" alt="Avatar" className={classes.avatar} />
            <Typography variant="body2" className={classes.name}>
              Sarah LongerJohnson
            </Typography>
          </div>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.quote}>
            "I was impressed by the company's dedication to diversity and
            inclusion from the very beginning. It's a welcoming and supportive
            environment that truly values every member of the team."
          </Typography>
          <div className={classes.author}>
            <img src="/avatar3.jpg" alt="Avatar" className={classes.avatar} />
            <Typography variant="body2" className={classes.name}>
              Jane Doe
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Slider>
  );
};

export default TestimonialsCarousel;
