import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import "./InformationSection.css";
import {
  FaUser,
  FaUsers,
  FaShieldAlt,
  FaPencilRuler,
  FaBook,
  FaBalanceScale,
  FaCogs,
  FaGlobe,
} from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: "1400px",
    minHeight: "700px",
    backgroundColor: "#1C1C1C",
  },
  title: {
    fontWeight: "bold",
    color: "white",
    textAlign: "left !important",
    borderBottom: "1px solid white !important",
    marginBottom: "10px !important",
    paddingBottom: "2px !important",
  },
  heading: {
    fontWeight: 800,
    color: "white",
    textAlign: "center",
    marginBottom: 15,
    fontSize: "2.5rem",
  },
  body: {
    color: "white",
    marginTop: 15,
    marginBottom: 30,
  },
  subtitle: {
    color: "white",
    marginLeft: 15,
    minWidth: 200,
  },
  listcolumns: {
    justifyContent: "center !important",
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  gridcontainer: {
    justifyContent: "center !important",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginBottom: 30,
  },
  avatar: {
    backgroundColor: "#f2cc23dd",
    color: "theme.palette.primary.contrastText",
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
    color: "white",
    backgroundColor: "white",
  },
}));

export default function InformationSection() {
  const classes = useStyles();

  return (
    <div className="landing-container-about">
      <Box display="flex" justifyContent="center">
        <Card
          elevation={6}
          className={classes.root}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardContent>
            <Typography variant="h1" className={classes.heading}>
              EDGELORDS
            </Typography>
            <Typography variant="h5" className={classes.title}>
              Company Mission
            </Typography>
            <Typography variant="body1" className={classes.body}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              in, dolore facere iusto veritatis laudantium cupiditate temporibus
              saepe culpa incidunt voluptate. Voluptates velit autem
              exercitationem aliquid animi est ex esse consequuntur magnam neque
              dolore quod necessitatibus, porro ipsam qui id tempore voluptatum
              laborum error nobis consectetur. Molestias unde illum illo facere
              cupiditate error. Ab, reprehenderit at. Officiis repellendus
              repellat provident temporibus laborum veritatis enim obcaecati,
              quas nemo consequatur repudiandae vitae illo reiciendis
              consequuntur eligendi culpa quod sint atque, architecto
              reprehenderit, ut error ipsa impedit qui. Ex officiis maxime id
              vel, pariatur eligendi saepe blanditiis, necessitatibus rerum
              repudiandae commodi, illum odio?
            </Typography>
            <Typography variant="h5" className={classes.title}>
              Core Values
            </Typography>
            <Grid container spacing={2} className={classes.gridcontainer}>
              <Grid item xs={12} sm={6} className={classes.listcolumns}>
                <List>
                  <ListItem>
                    <Avatar className={classes.avatar}>
                      <FaUser />
                    </Avatar>
                    <ListItemText
                      primary="Customer Satisfaction"
                      className={classes.subtitle}
                    />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.avatar}>
                      <FaPencilRuler />
                    </Avatar>
                    <ListItemText
                      primary="Innovation"
                      className={classes.subtitle}
                    />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.avatar}>
                      <FaUsers />
                    </Avatar>
                    <ListItemText
                      primary="Collaboration"
                      className={classes.subtitle}
                    />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.avatar}>
                      <FaShieldAlt />
                    </Avatar>
                    <ListItemText
                      primary="Integrity"
                      className={classes.subtitle}
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.listcolumns}>
                <List>
                  <ListItem>
                    <Avatar className={classes.avatar}>
                      <FaBook />
                    </Avatar>
                    <ListItemText
                      primary="Knowledge"
                      className={classes.subtitle}
                    />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.avatar}>
                      <FaBalanceScale />
                    </Avatar>
                    <ListItemText
                      primary="Equality (for Master Race)"
                      className={classes.subtitle}
                    />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.avatar}>
                      <FaCogs />
                    </Avatar>
                    <ListItemText
                      primary="Efficiency"
                      className={classes.subtitle}
                    />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.avatar}>
                      <FaGlobe />
                    </Avatar>
                    <ListItemText
                      primary="Global Commitment"
                      className={classes.subtitle}
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Typography variant="h5" className={classes.title}>
              Company History
            </Typography>
            <Typography variant="body1" className={classes.body}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo libero, necessitatibus laudantium iusto doloribus,
              veritatis neque esse voluptate exercitationem, ullam quaerat. Unde
              deleniti libero possimus totam quisquam ipsum perferendis
              laboriosam sit, doloribus itaque doloremque voluptate magnam cum,
              eum incidunt placeat veniam minima asperiores? Ea reprehenderit
              officia explicabo quas voluptatibus, inventore quasi blanditiis
              quos, neque perferendis perspiciatis veniam ipsa nesciunt earum!
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
