import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Grid, Button, Paper, Slide } from "@material-ui/core";
import { FaPhone, FaVoicemail } from "react-icons/fa";
import ContactForm from "../../Forms/Contact/ContactForm";
import HeroBlock from "../../Parts/HeroBlock/HeroBlock";
import SocialSection from "../../Contact/BetterContact/SocialSection";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    background: "#242424",
    padding: theme.spacing(3),
    maxWidth: "100%",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  button: {
    minWidth: 140,
    margin: theme.spacing(1),
    boxShadow: theme.shadows[3],
    backgroundColor: "#1C1C1C",
    color: theme.palette.primary.contrastText,
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: theme.shadows[7],
      backgroundColor: theme.palette.action.hover,
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "1rem",
  },
  paper: {
    backgroundColor: "#242424",
    padding: 20,
    maxWidth: "95%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function FormHero() {
  const classes = useStyles();

  const options = [
    { label: "Website Development", value: "Website Development" },
    { label: "Mobile App Development", value: "Mobile App Development" },
    { label: "Digital Marketing", value: "Digital Marketing" },
    { label: "General Inquiry", value: "General Inquiry" },
    { label: "Support", value: "Support" },
    { label: "Partnership", value: "Partnership" },
    { label: "Other", value: "Other" },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Paper elevation={9} className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} className={classes.socialLinks}>
              <div style={{}}>
                <HeroBlock
                  title="Custom Designs"
                  heading="Modern Framework, <br /> Design, and Hosting"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium elit sed consectetur ultricies. Praesent lacinia luctus lacus, sit amet cursus nisl faucibus ac. Proin sollicitudin, tellus et scelerisque hendrerit, leo turpis ornare diam, ac fermentum massa diam a nisi."
                  btnText="Get Started"
                  btnLink="/about"
                  showButton={false}
                />
              </div>
              <Slide in={true} direction="right" timeout={1000}>
                <Grid item xs={12} md={6}>
                  <div className={classes.buttonContainer}>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<FaPhone />}
                      href="tel:555-555-5555"
                      className={classes.button}
                      style={{ marginRight: 5 }}
                    >
                      Call Us
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<FaVoicemail />}
                      href="mailto:hello@example.com"
                      className={classes.button}
                    >
                      Email Us
                    </Button>
                  </div>
                  <div className={classes.socialLinks}>
                    <SocialSection />
                  </div>
                </Grid>
              </Slide>
            </Grid>

            <Slide in={true} direction="left" timeout={1000}>
              <Grid item xs={12} md={6}>
                <ContactForm selectOptions={options} />
              </Grid>
            </Slide>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}

export default FormHero;
