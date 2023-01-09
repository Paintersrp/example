import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { FaInfoCircle } from "react-icons/fa";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Popover from "@material-ui/core/Popover";
import { Slide } from "@material-ui/core";
import servicesData from "./servicesData";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 1000,
    margin: "0 auto",
    padding: theme.spacing(2),
  },
  media: {
    height: 300,
    width: "auto",
    scale: "0.75",
  },
  card: {
    margin: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      minWidth: 300,
    },
    backgroundColor: "#212121",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "darkblue",
  },
  title: {
    color: "white",
    fontSize: "2rem",
  },
  subtitle: {
    color: "white",
    fontSize: "1rem",
    borderBottom: "1px solid white",
    textAlign: "left",
    padding: 0,
    margin: 0,
    marginLeft: 15,
    marginRight: 15,
  },
  description: {
    color: "white",
    fontSize: "1rem",
    textAlign: "left",
  },
  subdescriptionicon: {
    color: "white",
    fontSize: "1rem",
    textAlign: "left",
    paddingTop: 18,
    marginRight: 10,
  },
  subdescription: {
    color: "white",
    fontSize: "1rem",
    textAlign: "left",
    paddingTop: 15,
  },
  paper: {
    backgroundColor: "#242424",
    padding: theme.spacing(2),
  },
}));

export default function ServiceCardCarousel() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event, feature) => {
    console.log("Icon clicked");
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setSelectedFeature(feature);
  };

  const feature = selectedFeature;

  return (
    <Slide in={true} direction="up" timeout={1000}>
      <Grid container spacing={2}>
        {servicesData.map((service) => (
          <Grid item key={service.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={service.image}
                title={service.title}
                justifyContent="center"
                alignItems="center"
              />
              <CardContent>
                <h1 className={classes.title}>{service.title}</h1>
                <p className={classes.description}>{service.description}</p>
              </CardContent>
              <div>
                <h3 className={classes.subtitle}>Top Feature Comparison</h3>
                <List>
                  {service.topFeatures.map((feature) => (
                    <ListItem key={feature.name}>
                      <div className={classes.subdescriptionicon}>
                        {feature.icon}
                      </div>
                      <ListItemText
                        primary={feature.name}
                        className={classes.subdescription}
                      />
                      <div>
                        <FaInfoCircle
                          onClick={(event) => handleClick(event, feature)}
                          className={classes.subdescription}
                          cursor="pointer"
                        />
                      </div>
                    </ListItem>
                  ))}
                </List>
                <Popover
                  open={Boolean(anchorEl)}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <Typography>{feature ? feature.description : ""}</Typography>
                </Popover>
              </div>
              <CardActions className={classes.button}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  justifyContent="center"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Slide>
  );
}
