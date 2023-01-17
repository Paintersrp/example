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
import PricingPage from "../Test/BetterServices/CardPage";
import PricingOverview from "../Test/BetterServicePage/ServicesPage";
import BetterTestimonials from "../Test/BetterTestimonials/BetterTestimonials";
import HeroGrid from "../Test/StatsGrid/StatsGrid";
import BetterNewsletter from "../Test/BetterNewsletter/BetterNewsletter";

function LandingPage() {
  return (
    <div className="landing-container">
      <div>
        <div className="">
          <HeroGrid />
        </div>
        <div className="">
          <PricingOverview />
        </div>
        <div className="">
          <FeatureTiles />
        </div>
        <div className="car-container">
          {/* <TestimonialSection /> */}
          <BetterTestimonials />
        </div>
        <div className="">
          <LatestNews />
        </div>
        <div className="">
          <BetterNewsletter />
        </div>
        {/* <div className="">
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
        </div> */}
      </div>
    </div>
  );
}

export default LandingPage;
