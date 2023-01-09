import React from "react";
import { Paper, Grid, TextField, Button } from "@material-ui/core";
import "./newsletter-section.css";
import Container from "@material-ui/core/Container";
import useStyles from "./styles";

function NewsletterSection() {
  const classes = useStyles();

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

  return (
    <Container component="main" maxWidth="xl">
      <Paper elevation={6} className="card-test2">
        <form className={classes.form} onSubmit={handleSubmit}>
          <div>
            <h2 className="center">
              Sign up for our Newsletter to stay current with service offers and
              promotions!
            </h2>
            <h6>No spam, just news.</h6>
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
          </Grid>
          <div className="btn-test">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              SIGN UP
            </Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
}

export default NewsletterSection;
