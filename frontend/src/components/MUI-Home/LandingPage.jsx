import React from "react";
import ContactCTA from "./ContactCTA/ContactCTA";
import MainSection from "./MainSection/MainSection";
import TestimonialSection from "./Testimonials/TestimonialSection";
import FeatureTiles from "./Features/Features";
import NewsletterSection from "./NewsLetter/NewsletterSection";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import ServiceCardCarousel from "./ServicesCarousel/ServicesCarousel";
import LatestNews from "./LatestNews/LatestNews";
import MyComponent from "../Test/spring";

function LandingPage() {
  return (
    <div className="landing-container">
      <div>
        <div className="">
          <MainSection />
        </div>
        <ServiceCardCarousel />
        <div className="">
          <FeatureTiles />
        </div>
        <div className="car-container">
          <TestimonialSection />
        </div>
        <div className="">
          <LatestNews />
        </div>
        <div className="">
          <Container component="main" maxWidth="false" className="big-tester">
            <Grid
              container
              spacing={3}
              justifyContent="center"
              alignItems="center"
              className="big-tester"
            >
              <Grid
                item
                xs={12}
                sm={8}
                md={6}
                justifyContent="center"
                alignItems="center"
              >
                <ContactCTA />
              </Grid>
              <Grid
                item
                xs={12}
                sm={8}
                md={6}
                justifyContent="center"
                alignItems="center"
              >
                <NewsletterSection />
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
