import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Typography,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  TextField,
  Button,
  MenuItem,
} from "@material-ui/core";
import { FaAdn, Fa500Px, FaAccusoft } from "react-icons/fa";
import { useForm } from "react-hook-form";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
}));

export default function ContactInfo() {
  const classes = useStyles();
  const [state, setState] = useState({
    age: "",
    name: "",
    email: "",
    message: "",
    error: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const validate = () => {
    let temp = { ...state.error };
    temp.name = state.name === "" ? "Name is required" : "";
    temp.email = state.email === "" ? "Email is required" : "";
    temp.message = state.message === "" ? "Message is required" : "";
    setState({
      ...state,
      error: temp,
    });
    return temp.name === "" && temp.email === "" && temp.message === "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log(state);
      setState({
        age: "",
        name: "",
        email: "",
        message: "",
        error: {
          name: "",
          email: "",
          message: "",
        },
      });
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5">Contact Information</Typography>
            <IconButton aria-label="email" href="mailto:email@example.com">
              <FaAdn fontSize="large" />
              <Typography>email@example.com</Typography>
            </IconButton>
            <IconButton aria-label="phone" href="tel:+15555555555">
              <Fa500Px fontSize="large" />
              <Typography>+1 (555) 555-5555</Typography>
            </IconButton>
            <IconButton aria-label="location">
              <FaAccusoft fontSize="large" />
              <Typography>1234 Main St, City, State 12345</Typography>
            </IconButton>
            <Typography variant="h5">Follow us on</Typography>
            <IconButton
              aria-label="facebook"
              href="https://www.facebook.com/example"
            >
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton aria-label="twitter" href="https://twitter.com/example">
              <TwitterIcon fontSize="large" />
            </IconButton>
            <IconButton
              aria-label="instagram"
              href="https://www.instagram.com/example"
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton
              aria-label="linkedin"
              href="https://www.linkedin.com/company/example"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <form className={classes.form} onSubmit={handleSubmit}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">
                  Department
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={state.age}
                  onChange={handleChange}
                  name="age"
                  inputProps={{
                    name: "age",
                    id: "age-simple",
                  }}
                >
                  <option value="">None</option>
                  <option value={10}>Sales</option>
                  <option value={20}>Marketing</option>
                  <option value={30}>Support</option>
                </Select>
              </FormControl>
              <TextField
                label="Name"
                name="name"
                onChange={handleChange}
                value={state.name}
                error={state.error.name !== ""}
                helperText={state.error.name}
              />
              <TextField
                label="Email"
                name="email"
                onChange={handleChange}
                value={state.email}
                error={state.error.email !== ""}
                helperText={state.error.email}
              />
              <TextField
                label="Message"
                name="message"
                onChange={handleChange}
                value={state.message}
                error={state.error.message !== ""}
                helperText={state.error.message}
                multiline
                rows={4}
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
