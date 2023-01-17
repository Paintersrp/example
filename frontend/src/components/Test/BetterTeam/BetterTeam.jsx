import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[900],
    color: "white",
    padding: 40,
  },
  card: {
    backgroundColor: theme.palette.grey[800],
    color: "white",
    marginBottom: theme.spacing(2),
    boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.2)",
    "&:hover": {
      transform: "scale(1.01)",
    },
  },
  media: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginTop: 10,
    color: "white",
    fontWeight: 700,
    fontSize: "2rem",
    fontFamily: "Poppins",
  },
  subheader: {
    color: "white",
    marginTop: 10,
    fontWeight: 500,
    fontSize: "1rem",
    fontFamily: "Poppins",
  },
  socialMedia: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "transform 0.3s ease-in-out",
    },
  },
  socialIcon: {
    color: "white",
    fontSize: "2rem",
  },
  cardContent: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    width: "30%",
    padding: theme.spacing(3),
  },
  cardContainer: {},
}));

const OurTeam = ({ members }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {members.map((member) => (
          <Grid item xs={12} sm={12} md={6} xl={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} key={member.id}>
                <Card className={classes.card}>
                  <Grid container className={classes.cardContainer}>
                    <Grid item xs={4} className={classes.cardMedia}>
                      <CardMedia
                        className={classes.media}
                        image={member.img}
                        title={member.name}
                      />
                    </Grid>
                    <Grid item xs={8} className={classes.cardContent}>
                      <CardContent>
                        <Typography variant="h2" className={classes.header}>
                          {member.name}
                        </Typography>
                        <Typography variant="h2" className={classes.subheader}>
                          {member.position}
                        </Typography>
                        <div className={classes.socialMedia}>
                          {member.linkedin && (
                            <IconButton href={member.linkedin} target="_blank">
                              <LinkedInIcon className={classes.socialIcon} />
                            </IconButton>
                          )}
                          {member.twitter && (
                            <IconButton href={member.twitter} target="_blank">
                              <TwitterIcon className={classes.socialIcon} />
                            </IconButton>
                          )}
                          {member.facebook && (
                            <IconButton href={member.facebook} target="_blank">
                              <FacebookIcon className={classes.socialIcon} />
                            </IconButton>
                          )}
                        </div>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OurTeam;
