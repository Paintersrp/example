import React from "react";
import Carousel from "react-material-ui-carousel";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { CSSTransition } from "react-transition-group";
import testimonialData from "./testimonialData";
import "./TestimonialSection.css";

function TestimonialSection() {
  return (
    <div className="testimonial-carousel">
      <Carousel
        navButtonsProps={{
          style: {
            backgroundColor: "#fdd835",
            borderRadius: 0,
            maxHeight: "10px",
            maxWidth: "10px",
            color: "#1c1c1c",
          },
        }}
        navButtonsAlwaysVisible={true}
        autoPlay
        animation="slide"
        swipe={true}
        interval={55555555555555}
        className="bg-test"
      >
        {testimonialData.map((testimonial) => (
          <Card elevation={6} className="card-test">
            <CardContent className="card-content">
              <h3 className="card-text">{testimonial.text}</h3>
              <div className="subtitle1">
                <Avatar src={testimonial.avatar} className="avatar" />
                <h2 variant="subtitle1" className="subtitle1">
                  {testimonial.name}
                </h2>
              </div>
            </CardContent>
          </Card>
        ))}
      </Carousel>
    </div>
  );
}

export default TestimonialSection;
