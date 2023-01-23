import React from "react";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StandardHero from "../../../components/Heros/StandardHero/StandardHero";
import BgImgHero from "../../../components/Heros/BgImgHero/BgImgHero";
import FormHero from "../../../components/Heros/FormHero/FormHero";
import HeroCarousel from "../../../components/Heros/HeroCarousel/HeroCarousel";

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: `${theme.spacing(3)}px 0`,
    color: "white",
    backgroundColor: "white",
  },
}));

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

function HeroesDemo() {
  const classes = useStyles();

  return (
    <div
      style={{
        backgroundColor: "#242424",
        display: "flex",
        width: "100%",
        minHeight: 700,
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
            padding: 0,
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "white",
              margin: 0,
              paddingTop: 20,
              fontSize: "2.25rem",
            }}
          >
            Hero Components
          </h1>
        </div>
        <Divider variant="fullWidth" className={classes.divider} />
        <div className="">
          <h2
            style={{
              textAlign: "center",
              color: "white",
              margin: 0,
            }}
          >
            FormHero
          </h2>
          <FormHero />
        </div>
        <Divider variant="fullWidth" className={classes.divider} />
        <div className="">
          <h2
            style={{
              textAlign: "center",
              color: "white",
              margin: 0,
              paddingBottom: 20,
            }}
          >
            HeroCarousel
          </h2>
          <HeroCarousel items={items} />
        </div>
        <Divider variant="fullWidth" className={classes.divider} />
        <div className="">
          <h2
            style={{
              textAlign: "center",
              color: "white",
              margin: 0,
            }}
          >
            StandardHero
          </h2>
          <StandardHero />
        </div>
        <Divider variant="fullWidth" className={classes.divider} />
        <div>
          <h2
            style={{
              textAlign: "center",
              color: "white",
              margin: 0,
              paddingBottom: 20,
            }}
          >
            BgImgHero
          </h2>
          <BgImgHero />
        </div>
        <Divider variant="fullWidth" className={classes.divider} />
      </div>
    </div>
  );
}

export default HeroesDemo;
