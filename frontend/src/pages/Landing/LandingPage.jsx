import React from "react";
import FeatureTiles from "../../components/Features/FeatureTiles/FeatureTiles";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import LatestNews from "../../components/Features/LatestNews/LatestNews";
import PricingOverview from "../../components/Pricing/StandardPricing/Pricing";
import BetterTestimonials from "../../components/Testimonials/SpeechBubbleTestimonials/SpeechBubbles";
import HeroCarousel from "../../components/Heroes/HeroCarousel/HeroCarousel";
import NewsletterForm from "../../components/Forms/Newsletter/NewsletterForm";
import IconScroller from "../../components/Features/IconScroller/IconScroller";
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

const items = [
  {
    index: 0,
    image: "images/masonry/img1.jpg",
    buttonText: "View Project",
    buttonLink: "/item-1",
  },
  {
    index: 1,
    image: "images/masonry/img2.jpg",
    buttonText: "View Project",
    buttonLink: "/item-2",
  },
  {
    index: 2,
    image: "images/masonry/img3.jpg",
    buttonText: "View Project",
    buttonLink: "/item-3",
  },
  {
    index: 3,
    image: "images/masonry/img4.jpeg",
    buttonText: "View Project",
    buttonLink: "/item-4",
  },
  {
    index: 4,
    image: "images/masonry/img5.jpeg",
    buttonText: "View Project",
    buttonLink: "/item-5",
  },
  {
    index: 5,
    image: "images/masonry/img6.jpeg",
    buttonText: "View Project",
    buttonLink: "/item-6",
  },
];

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="">
        <HeroCarousel items={items} />
      </div>
      <div>
        <IconScroller data={partners} />
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
        <NewsletterForm />
      </div>
    </div>
  );
}

export default LandingPage;
