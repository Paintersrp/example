import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { deepPurple } from "@material-ui/core/colors";
import { Container, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#242424",
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 400,
    padding: theme.spacing(1),
    margin: theme.spacing(1.5),
    backgroundColor: "#1C1C1C",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: theme.shadows[8],
      opacity: 0.9,
    },
  },
  avatar: {
    width: 92,
    height: 92,
    marginLeft: theme.spacing(3),
    backgroundColor: deepPurple[500],
    color: theme.palette.common.white,
    "&:hover": {
      transform: "scale(1.05)",
      opacity: 0.9,
    },
  },
  image: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardHeader: {
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContent: {
    flexGrow: 1,
    "&:hover": {
      transform: "scale(1.05)",
      opacity: 0.9,
    },
  },
  gridContainer: {
    alignItems: "center",
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginBottom: 0,
  },
  name: {
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
    fontFamily: "Poppins",
    color: "#f9f9f9",
    fontSize: "1.5rem",
    "&:hover": {
      transform: "scale(1.05)",
      opacity: 0.9,
    },
  },
  position: {
    color: "#f9f9f9",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
    fontFamily: "Poppins",
    "&:hover": {
      transform: "scale(1.05)",
      opacity: 0.9,
    },
  },
  bio: {
    color: "#f9f9f9",
    marginTop: theme.spacing(0),
    fontSize: "0.9rem",
    fontWeight: 450,
    fontFamily: "Poppins",
    "&:hover": {
      opacity: 0.9,
    },
  },
  title: {
    textAlign: "center",
    color: "#f9f9f9",
    fontWeight: "700",
    fontFamily: "Poppins",
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
    color: "white",
    backgroundColor: "white",
  },
  carddivider: {
    marginBottom: 10,
    color: "white",
    backgroundColor: "white",
  },
}));

function TeamMemberCard({ name, position, bio, image }) {
  const classes = useStyles();

  return (
    <Card elevation={9} className={classes.card}>
      <Grid container spacing={0} className={classes.gridContainer}>
        <Grid item xs={4}>
          {image ? (
            <Avatar variant="rounded" src={image} className={classes.avatar} />
          ) : (
            <Avatar variant="rounded" className={classes.avatar}>
              {name[0]}
            </Avatar>
          )}
        </Grid>
        <Grid item xs={8}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h6" className={classes.name}>
              {name}
            </Typography>
            <Typography variant="subtitle1" className={classes.position}>
              {position}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12}>
          <Divider variant="fullWidth" className={classes.carddivider} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className={classes.bio}>
            {bio}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

export default function TeamMembers({ members }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0} justifyContent="center">
        <Grid item xs={12} key="divider">
          <Divider variant="fullWidth" className={classes.divider} />
        </Grid>
        <Grid item xs={12} key="title">
          <Typography variant="h4" className={classes.title}>
            Management
          </Typography>
        </Grid>
        {members.map((member) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            key={member.name}
            className={classes.cardContainer}
          >
            <TeamMemberCard {...member} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
