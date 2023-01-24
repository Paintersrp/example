import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6),
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    minHeight: 550,
  },
  gridContainer: {
    backgroundColor: "#1C1C1C",
    padding: 20,
  },
  dayHeading: {
    fontSize: "1.5rem",
    fontWeight: 700,
    fontFamily: "Poppins",
    color: "white",
    borderRadius: theme.shape.borderRadius,
  },
  eventList: {
    width: "100%",
  },
  event: {
    display: "flex",
    alignItems: "center",
  },
  eventName: {
    fontSize: "1rem",
    fontWeight: 500,
    fontFamily: "Poppins",
    flex: 1,
    color: "white",
  },
  eventTime: {
    fontSize: "1rem",
    fontWeight: 500,
    fontFamily: "Poppins",
    flex: 1,
    textAlign: "right",
    color: "white",
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: "white",
    backgroundColor: "white",
  },
  subheading: {
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
  },
  heading: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  description: {
    fontWeight: "light",
    marginBottom: theme.spacing(2),
  },
}));

export default function EventSchedule() {
  const classes = useStyles();
  const eventData = [
    {
      day: "Monday",
      events: [
        { name: "Event 1", time: "9:00 AM" },
        { name: "Event 2", time: "11:00 AM" },
        { name: "Event 3", time: "1:00 PM" },
      ],
    },
    {
      day: "Tuesday",
      events: [
        { name: "Event 4", time: "9:00 AM" },
        { name: "Event 5", time: "11:00 AM" },
        { name: "Event 6", time: "1:00 PM" },
      ],
    },
    {
      day: "Wednesday",
      events: [
        { name: "Event 1", time: "9:00 AM" },
        { name: "Event 2", time: "11:00 AM" },
        { name: "Event 3", time: "1:00 PM" },
      ],
    },
    {
      day: "Thursday",
      events: [
        { name: "Event 4", time: "9:00 AM" },
        { name: "Event 5", time: "11:00 AM" },
        { name: "Event 6", time: "1:00 PM" },
      ],
    },
    //...
  ];

  return (
    <Paper elevation={9} className={classes.root}>
      <Typography
        className={classes.subheading}
        variant="subtitle2"
        component="p"
      >
        Expo Upcoming Events
      </Typography>
      <Typography className={classes.heading} variant="h5" component="h3">
        Upcoming Expo Events
      </Typography>
      <Typography
        className={classes.description}
        variant="subtitle1"
        component="p"
      >
        A list of events for a 4 day expo.
      </Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={2} className={classes.gridContainer}>
        {eventData.map((day, index) => (
          <Grid item xs={12} key={day.day}>
            <Typography
              className={classes.dayHeading}
              variant="h6"
              component="h4"
            >
              {day.day}
            </Typography>
            <List className={classes.eventList}>
              {day.events.map((event) => (
                <ListItem key={event.name} className={classes.event}>
                  <ListItemText
                    primary={event.name}
                    secondary={event.time}
                    classes={{
                      primary: classes.eventName,
                      secondary: classes.eventTime,
                    }}
                  />
                </ListItem>
              ))}
            </List>
            {index !== eventData.length - 1 && (
              <Divider className={classes.divider} />
            )}
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
