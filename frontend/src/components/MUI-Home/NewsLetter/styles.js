import { makeStyles } from "@material-ui/core/styles";

const focusedColor = "orange";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    color: "white",
  },
  textField: {
    marginTop: theme.spacing(1),
    color: "white",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    // input label when focused
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

    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    color: "white",
    "& .MuiInputLabel-outlined": {
      color: "green",
    },
  },
}));

export default useStyles;
