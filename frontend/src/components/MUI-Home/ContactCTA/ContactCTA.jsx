import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import "./ContactCTA.css";
import useStyles from "./styles";
import { Card, Paper } from "@material-ui/core";

function ContactCTA() {
  const classes = useStyles();
  const formRef = useRef(null);
  const [inView, setInView] = useState(true);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // axios
    //   .post("/api/register", formData)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };

  useEffect(() => {
    function handleScroll() {
      if (formRef.current) {
        const { top } = formRef.current.getBoundingClientRect();
        if (top < window.innerHeight && top > 0) {
          setInView(true);
        } else {
          setInView(false);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container component="main" maxWidth="xl">
      <Paper elevation={6} className="card-test2">
        <form className={classes.form} onSubmit={handleSubmit}>
          <div>
            <h2 className="center">
              Questions? Comments? <br className="break-spacing" />
              Send us a message!
            </h2>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="preferredName"
                variant="outlined"
                notchedOutline
                required
                fullWidth
                id="preferredName"
                label="Preferred Name"
                className={classes.root}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                className={classes.root}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="message"
                label="Message"
                name="message"
                multiline
                onChange={handleChange}
                maxRows={Infinity}
                minRows={4}
                className={classes.root}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            SEND
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default ContactCTA;
