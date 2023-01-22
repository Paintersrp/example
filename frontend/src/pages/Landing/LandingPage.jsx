import React from "react";
import FeatureTiles from "../../components/Features/FeatureTiles/FeatureTiles";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import LatestNews from "../../components/Features/LatestNews/LatestNews";
import PricingOverview from "../../components/Pricing/BetterServicePage/ServicesPage";
import BetterTestimonials from "../../components/Testimonials/BetterTestimonials/BetterTestimonials";
import HeroGrid from "../../components/Heros/HeroCarousel/HeroCarousel";
import BetterNewsletter from "../../components/Forms/Newsletter/NewsletterForm";
import CompatibilitySection from "../../components/Features/Compatibility/Compatibility";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";
import "./MainSection.css";

const partners = [
  {
    id: 1,
    icon: FaTwitter,
  },
  {
    id: 2,
    icon: FaFacebook,
  },
  {
    id: 3,
    icon: FaInstagram,
  },
  {
    id: 4,
    icon: FaLinkedin,
  },
  {
    id: 5,
    icon: FaYoutube,
  },
  {
    id: 6,
    icon: FaGithub,
  },
  {
    id: 7,
    icon: FaStackOverflow,
  },
];

function LandingPage() {
  return (
    <div className="landing-container">
      <div>
        <div className="">
          <HeroGrid />
        </div>
        <div>
          <CompatibilitySection partners={partners} />
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
