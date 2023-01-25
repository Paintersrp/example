import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import {
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Icon,
  Paper,
} from "@material-ui/core";
import { IoLogoAngular } from "react-icons/io";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: "#242424",
    width: "100vw",
    minHeight: "772px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#242424",
  },
  icon: {
    margin: theme.spacing(1),
    color: "white",
    fontSize: "2rem",
    width: 40,
    height: 40,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    boxShadow: theme.shadows[3],
    backgroundColor: theme.palette.primary,
    color: theme.palette.primary.contrastText,
    marginTop: 10,
    marginBottom: 10,
    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows[7],
      backgroundColor: theme.palette.primary.dark,
    },
    "& .MuiButton-label": {
      fontFamily: "Poppins",
      fontSize: "0.9rem",
      fontWeight: "700",
    },
    "& .MuiButton-root": {
      marginBottom: "5px",
    },
  },
  heading: {
    textAlign: "center",
    color: "white",
    fontSize: "1.75rem",
    paddingBottom: 10,
    borderBottom: "1px solid white",
    width: "100%",
  },
  field: {
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
  },
  label: {
    color: "white",
  },
}));

const LoginForm = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = "Username is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      axios
        .post("/api/login", formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper className={classes.paper} elevation={6}>
          <Icon className={classes.icon}>
            <IoLogoAngular />
          </Icon>
          <Typography className={classes.heading}>Sign in</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              className={classes.field}
              onChange={handleChange}
              error={!!errors.username}
              helperText={errors.username}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              className={classes.field}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />
            <FormControlLabel
              className={classes.label}
              control={<Checkbox value="remember" style={{ color: "white" }} />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs style={{ marginTop: 5 }}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item style={{ marginTop: 5 }}>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default LoginForm;
