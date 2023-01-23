import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Divider,
} from "@material-ui/core";
import {
  FaPhone,
  FaVoicemail,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import * as Yup from "yup";
import TitleBlock from "../../Parts/TitleBlock/TitleBlock";

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
  text: {
    color: "white",
    fontSize: "0.95rem",
    fontFamily: "Roboto",
    letterSpacing: "0.5",
    marginBottom: 20,
  },
  formControl: {
    minWidth: 120,
    margin: theme.spacing(0.5),
    background: "#3f3f3f",
    color: "white",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#e0e0e0",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#e0e0e0",
      },
    },
    "& input": {
      color: "white",
    },
    "& .MuiFormLabel-root": {
      color: "white",
      fontWeight: "700",
      fontSize: "0.9rem",
    },
    "& textarea": {
      color: "white",
    },
  },

  field: {
    "& .MuiOutlinedInput-inputMultiline": {
      color: "white",
    },
    "& .MuiOutlinedInput-input": {
      color: "white",
      textAlign: "left",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#e0e0e0",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#e0e0e0",
      },
    },
    "& .MuiFormLabel-root": {
      color: "white",
      fontWeight: "700",
      fontSize: "0.9rem",
    },
    "& input": {
      color: "white",
    },
    marginBottom: 15,
  },
  label: {
    color: "white",
  },
  select: {
    background: "#3f3f3f",
    color: "white",
    "& .MuiSelect-icon": {
      color: "white",
    },
    "& .MuiOutlinedInput-input": {
      color: "white",
    },
    "& .MuiSelect-select": {},
    "& .MuiSelect-select:focus": {
      background: "#3f3f3f",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white !important",
      },
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
  errorText: {
    color: "red",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
    textAlign: "left",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1rem",
  },
  socialLink: {
    fontSize: "1.25rem",
    color: "white",
    margin: "0 0.5rem",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: theme.shadows[7],
      color: "gold",
    },
  },
  paper: {
    backgroundColor: "#242424",
    padding: 20,
    maxWidth: "75%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: "2.1rem",
    fontFamily: "Poppins",
    fontWeight: "700",
    color: "white",
    marginBottom: 10,
    padding: 0,
  },
  subheading: {
    fontsize: "0.9rem",
    fontFamily: "Poppins",
    fontWeight: "700",
    color: "gold",
    margin: 0,
    padding: 0,
  },
}));

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Invalid email address"
    )
    .required("Email is required"),
  phone: Yup.string()
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
      "Invalid phone number"
    )
    .required("Phone number is required"),
  service: Yup.string().required("Please select a service"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

function FormHero() {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
    errors: {},
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      await validationSchema.validate(values, { abortEarly: false });
      // handle form submission here
      console.log(values);
    } catch (err) {
      const errors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        setValues({ ...values, errors });
      }
    }
    setIsSubmitting(false);
  };

  return (
    <div className={classes.root}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper elevation={9} className={classes.paper}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ maxWidth: "80%" }}>
                <TitleBlock
                  subtitle="Get Started"
                  title="Let's bring your ideas to life"
                  description="We understand that every project is unique and requires a
                personalized approach. Our team is here to help you turn
                your vision into reality. Whether you need a new website, mobile app, or just some
                help with digital marketing, we've got you covered."
                  alignment="Center"
                  showDivider={true}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<FaPhone />}
                  href="tel:555-555-5555"
                  className={classes.button}
                  style={{ marginRight: 50 }}
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
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.socialLink}
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.socialLink}
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.socialLink}
                >
                  <FaTwitter />
                </a>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <form onSubmit={handleSubmit}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  className={classes.field}
                >
                  <InputLabel id="service-label">Service</InputLabel>
                  <Select
                    labelId="service-label"
                    id="service-select"
                    name="service"
                    label="Service"
                    value={values.service}
                    onChange={handleChange}
                    MenuProps={{
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left",
                      },
                      transformOrigin: {
                        vertical: "top",
                        horizontal: "left",
                      },
                      getContentAnchorEl: null,
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Website Development">
                      Website Development
                    </MenuItem>
                    <MenuItem value="Mobile App Development">
                      Mobile App Development
                    </MenuItem>
                    <MenuItem value="Digital Marketing">
                      Digital Marketing
                    </MenuItem>
                  </Select>
                  {values.errors.service && (
                    <div className={classes.errorText}>
                      {values.errors.service}
                    </div>
                  )}
                </FormControl>
                <TextField
                  name="name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  error={values.errors.name}
                  helperText={values.errors.name}
                  value={values.name}
                  onChange={handleChange}
                  className={classes.field}
                />
                <TextField
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  error={values.errors.email}
                  helperText={values.errors.email}
                  value={values.email}
                  onChange={handleChange}
                  className={classes.field}
                />
                <TextField
                  name="phone"
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  error={values.errors.phone}
                  helperText={values.errors.phone}
                  value={values.phone}
                  onChange={handleChange}
                  className={classes.field}
                />
                <TextField
                  name="message"
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  error={values.errors.message}
                  helperText={values.errors.message}
                  value={values.message}
                  onChange={handleChange}
                  className={classes.field}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isSubmitting}
                  className={classes.button}
                >
                  Send
                </Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}

export default FormHero;
