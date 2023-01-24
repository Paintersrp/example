import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Grid,
  Slide,
  Typography,
  withStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { TypingEffect } from "../../../pages/Test/Test";

const CustomButton = withStyles({
  label: {
    fontWeight: "700 !important",
    fontFamily: "Poppins !important",
    fontSize: "0.85rem !important",
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Poppins",
    fontWeight: 700,
    textTransform: "uppercase",
    marginBottom: theme.spacing(1),
    fontSize: "1.25rem",
    color: "gold",
  },
  heading: {
    fontFamily: "Poppins",
    color: "white",
    marginBottom: theme.spacing(0),
    fontSize: "2.25rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
  },
  text: {
    fontFamily: "Poppins",
    fontSize: "1.25rem",
    color: theme.palette.grey[400],
    paddingBottom: 10,
    paddingTop: 10,
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  gridItemLeft: {
    padding: "20px 20px 20px 0px",
    fontFamily: "Poppins",
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
    },
  },
  btnCta: {
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: theme.shadows[7],
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const HeroBlock = ({
  title,
  heading,
  text,
  btnText,
  btnLink,
  showButton = true,
}) => {
  const classes = useStyles();

  return (
    <Slide in={true} direction="right" timeout={1000}>
      <Grid item xs={12} md={12} className={classes.gridItemLeft}>
        <Box className={classes.title}>{title}</Box>
        <Typography
          variant="h1"
          className={classes.heading}
          dangerouslySetInnerHTML={{ __html: heading }}
        />
        <Box className={classes.text}>
          <TypingEffect duration="0.02" text={text}></TypingEffect>
        </Box>
        {showButton && (
          <CustomButton
            component={Link}
            to={btnLink}
            color="primary"
            variant="contained"
            className={classes.btnCta}
          >
            {btnText}
          </CustomButton>
        )}
      </Grid>
    </Slide>
  );
};

export default HeroBlock;
