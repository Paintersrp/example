import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CheckIcon from "@material-ui/icons/Check";
import Button from "@material-ui/core/Button";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

const focusedColor = "orange";

const useStyles = makeStyles((theme) => ({
  detailsContainer: {
    fontFamily: "Poppins",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(3),
    backgroundColor: "#222222",
    color: "white",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
  },
  detailsTitle: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: "1.2rem",
    marginBottom: theme.spacing(2),
    textAlign: "center",
    color: "white",
  },
  detailsList: {
    fontFamily: "Poppins",
    listStyle: "none",
    padding: 0,
    margin: 0,
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
  detailsButton: {
    fontFamily: "Poppins",
    width: "100%",
    marginTop: theme.spacing(2),
    backgroundColor: "#b71c1c",
    color: "white",
    "&:hover": {
      backgroundColor: "#880e0e",
    },
  },
  testboi: {
    backgroundColor: "#222222",
    display: "flex",
  },
  flexer: {
    display: "flex",
    justifyContent: "center",
  },
  dialog: {
    backgroundColor: "transparent",
  },
  paper: {
    backgroundColor: "#222222",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0px 0px 10px #00000066",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: "flex",
    color: "white",
    "&:before": {
      borderColor: "white",
    },
    "&:after": {
      borderColor: "white",
    },
    "&:hover": {
      "&:before": {
        borderColor: "white",
      },
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  textField: {
    color: "white",
    "&:before": {
      borderColor: "white",
    },
    "&:after": {
      borderColor: "white",
    },
    "&:hover": {
      "&:before": {
        borderColor: "white",
      },
    },
    "& label.Mui-focused": {
      color: focusedColor,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fdd835",
    },
    "& :hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fdd835",
    },
    // focused color for input with variant='standard'
    "& .MuiInput-underline:after": {
      borderBottomColor: focusedColor,
    },
    // focused color for input with variant='filled'
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: focusedColor,
    },
    // focused color for input with variant='outlined'
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: focusedColor,
      },
    },
  },
  select: {
    color: "white",
    "&:before": {
      borderColor: "white",
    },
    "&:after": {
      borderColor: "white",
    },
    "&:hover": {
      "&:before": {
        borderColor: "white",
      },
    },
  },
  selectIcon: {
    fill: "white",
  },
}));

export default function PricingContact({ close }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [method, setMethod] = React.useState("");

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

  const handleClose = () => {
    setOpen(false);
    close();
  };

  const handleSelect = (event) => {
    setMethod(event.target.value);
  };

  return (
    <Dialog
      className={classes.flexer}
      classes={{ root: classes.dialog, paper: classes.paper }}
      open={open}
      onClose={handleClose}
    >
      <div className={classes.testboi}>
        <DialogContent dividers={true} className={classes.detailsContainer}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">
                    Preferred Contact Method
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={method}
                    onChange={handleSelect}
                    className={classes.select}
                    inputProps={{
                      classes: {
                        icon: classes.selectIcon,
                      },
                    }}
                  >
                    <MenuItem value={"Call"}>Call</MenuItem>
                    <MenuItem value={"Email"}>Email</MenuItem>
                    <MenuItem value={"Text"}>Text</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="preferredName"
                  variant="outlined"
                  notchedOutline
                  required
                  fullWidth
                  id="preferredName"
                  label="Name"
                  className={classes.textField}
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
                  className={classes.textField}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="number"
                  label="Phone Number"
                  name="number"
                  autoComplete="number"
                  className={classes.textField}
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
                  className={classes.textField}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  SEND
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.detailsButton}
                  onClick={handleClose}
                >
                  CANCEL
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </div>
    </Dialog>
  );
}
