import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Carousel from "react-material-ui-carousel";
import { Slide, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import imageData from "./imageData";
import "./MainSection.css";

function MainSection() {
  return (
    <div className="main-section">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} className="main-section__text-container">
          <Slide in={true} direction="right" timeout={1000}>
            <div className="main-section__text-container">
              <Typography variant="h4" component="h1" gutterBottom>
                Main Section
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus pretium elit sed consectetur ultricies. Praesent
                lacinia luctus lacus, sit amet cursus nisl faucibus ac. Proin
                sollicitudin, tellus et scelerisque hendrerit, leo turpis ornare
                diam, ac fermentum massa diam a nisi.
              </Typography>
            </div>
          </Slide>
        </Grid>
        <Slide in={true} direction="left" timeout={1000}>
          <Grid item xs={12} sm={6} className="main-section__carousel">
            <div className="main-section__carousel">
              <Carousel autoPlay interval={3000}>
                {imageData.map((item) => (
                  <img src={item.src} alt={item.alt} />
                ))}
              </Carousel>
              <Button
                component={Link}
                to="/about"
                color="primary"
                variant="contained"
                className="cta-btn"
              >
                <h1 className="cta-btn">Get Started</h1>
              </Button>
            </div>
          </Grid>
        </Slide>
      </Grid>
    </div>
  );
}

export default MainSection;
