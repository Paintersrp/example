import React from "react";
import { Divider, Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import InformationSection from "./InformationSection/InformationSection";
import TeamMembers from "./TeamMembers/TeamMembers";
import JobsSection from "./JobsSection/JobsSection";
import FAQAccordion from "./FAQAccordion/FAQAccordion";
import BusinessContactInformation from "./ContactSection/ContactSection";

const members = [
  {
    name: "Jane Smith",
    position: "Team Lead",
    bio: "Jane is a highly skilled team lead with over 10 years of experience in the industry.",
    image: "/images/members/member1.webp",
  },
  {
    name: "John Doe",
    position: "Developer",
    bio: "John is a talented developer with a passion for solving complex problems.",
    image: "/images/members/member3.webp",
  },
  {
    name: "Jenna Williams",
    position: "Designer",
    bio: "Jenna is a creative and experienced designer with a keen eye for detail.",
  },
];

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: `${theme.spacing(3)}px 0`,
    color: "white",
    backgroundColor: "white",
  },
}));

function AboutPage() {
  const classes = useStyles();

  return (
    <div className="landing-container">
      <div>
        <div className="">
          <InformationSection />
        </div>
        <div className="">
          <TeamMembers members={members} />
        </div>
        
        <Divider variant="fullWidth" className={classes.divider} />
        <div className="card-container-about">
          <JobsSection />
        </div>
        <div className="card-container-about">
          <BusinessContactInformation members={members} />
        </div>
        <Divider variant="fullWidth" className={classes.divider} />
        <div className="card-container-about">
          <FAQAccordion />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
