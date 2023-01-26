import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { Link } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
  },
  card: {
    position: "relative",
    height: "100%",
    textDecoration: "none",
    color: "inherit",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0px 10px 20px -5px rgba(0,0,0,0.75)",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0px 30px 60px -10px rgba(0,0,0,0.75)",
    },
  },
  cardMedia: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    filter: "grayscale(100%) brightness(120%)",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      filter: "none",
    },
  },
  cardInfo: {
    position: "absolute",
    bottom: "10px",
    left: "10px",
    background: "rgba(0,0,0,0.5)",
    color: "white",
    padding: "5px",
  },
  cardName: {
    margin: 0,
    fontSize: "1em",
    fontWeight: 500,
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
  },
  cardPosition: {
    margin: 0,
    fontSize: "0.8em",
  },
  cardSkills: {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: theme.spacing(0.5),
    backgroundColor: theme.palette.secondary.main,
    color: "white",
  },
  socialIcons: {
    position: "absolute",
    top: "10px",
    right: "10px",
  },
}));

export default function TeamGrid({ members }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {members.map((member) => (
          <Grid item xs={3} key={member.name}>
            <Link href={member.profile} className={classes.card}>
              <Card>
                <CardMedia
                  className={classes.cardMedia}
                  image={member.image}
                  title={member.name}
                />
                <CardContent>
                  <div className={classes.cardInfo}>
                    <Typography className={classes.cardName}>
                      {member.name}
                    </Typography>
                    <Typography className={classes.cardPosition}>
                      {member.position}
                    </Typography>
                  </div>
                  <div className={classes.cardSkills}>
                    {member.skills.map((skill) => (
                      <Chip
                        label={skill}
                        className={classes.chip}
                        key={skill}
                      />
                    ))}
                  </div>
                  <Box className={classes.socialIcons}>
                    <Hidden xsDown>
                      <IconButton href={member.linkedin}>
                        <LinkedInIcon fontSize="small" color="secondary" />
                      </IconButton>
                      <IconButton href={member.twitter}>
                        <TwitterIcon fontSize="small" color="secondary" />
                      </IconButton>
                    </Hidden>
                  </Box>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
