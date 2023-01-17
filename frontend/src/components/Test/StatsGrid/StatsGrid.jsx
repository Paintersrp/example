import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Box, Typography, Button } from "@material-ui/core";
import { NumberCounter } from "../Animations";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Poppins",
    backgroundColor: theme.palette.grey[900],
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    position: "relative",
  },
  overlay: {
    fontFamily: "Poppins",
    position: "absolute",
    width: "50%",
    height: "100%",
    right: 0,
    top: 0,
    background:
      "linear-gradient(to right, rgba(0, 0, 0, 0.3) 0%, transparent 100%)",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      background:
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, transparent 100%)",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  title: {
    fontFamily: "Poppins",
    fontWeight: 700,
    textTransform: "uppercase",
    marginBottom: theme.spacing(3),
    fontSize: "1.25rem",
    color: theme.palette.grey[500],
  },
  heading: {
    fontFamily: "Poppins",
    color: "white",
    marginBottom: theme.spacing(3),
    fontSize: "2.25rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
  },
  text: {
    fontFamily: "Poppins",
    fontSize: "1.25rem",
    color: theme.palette.grey[400],
    padding: "20px",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      padding: "20px",
    },
  },
  statTitle: {
    fontFamily: "Poppins",
    fontSize: "2.25rem",
    color: "white",
    textAlign: "left",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
  },
  statContent: {
    fontFamily: "Poppins",
    fontSize: "1.25rem",
    color: theme.palette.grey[400],
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      padding: "0px 20px 0px 20px",
    },
  },
  gridContainer: {
    fontFamily: "Poppins",
    zIndex: 10,
    position: "relative",
  },
  grid: {
    fontFamily: "Poppins",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  gridItemLeft: {
    fontFamily: "Poppins",
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
    },
  },
  gridItemRight: {
    fontFamily: "Poppins",
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
    },
  },
  statsGrid: {
    fontFamily: "Poppins",
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
    },
  },
  statsFlex: {
    fontFamily: "Poppins",
    display: "flex",
    justifyContent: "center",
  },
}));

export default function HeroGrid() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <div className={classes.overlay} />
      <Container maxWidth="lg" className={classes.gridContainer}>
        <Grid container className={classes.grid}>
          <Grid item xs={12} md={6} className={classes.gridItemLeft}>
            <Box className={classes.title}>Custom Designs</Box>
            <Typography variant="h1" className={classes.heading}>
              Modern Framework, Design, and Hosting
            </Typography>
            <Box className={classes.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati iusto facilis rem. Libero fuga qui at expedita obcaecati
              necessitatibus adipisci fugit dicta sunt corporis, modi quae
              accusantium, accusamus voluptate? Saepe et corporis sit eligendi,
              tenetur minus officia iusto vitae, nostrum placeat provident ipsam
              consequatur pariatur optio quaerat qui, ea natus!
            </Box>
            <Button
              component={Link}
              to="/about"
              color="primary"
              variant="contained"
              className="cta-btn"
            >
              <h1 className="cta-btn">Get Started</h1>
            </Button>
          </Grid>
          <Grid item xs={12} md={6} className={classes.gridItemRight}>
            <Grid container spacing={4} className={classes.statsGrid}>
              {stats.map((stat) => (
                <Grid item xs={12} key={stat.title}>
                  <Box className={classes.statTitle}>
                    <div className={classes.statsFlex}>
                      <NumberCounter seconds={2} end={stat.title} />
                      {stat.operator}
                    </div>
                  </Box>
                  <div className={classes.statsFlex}>
                    <Box className={classes.statContent}>{stat.content}</Box>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const stats = [
  {
    title: "10",
    operator: "+",
    content:
      "Analytics modules for detailed monitoring and real-time breakdowns",
  },
  {
    title: "24",
    operator: "+",
    content:
      "Prebuilt page templates to get every website off the ground and online ASAP",
  },
  {
    title: "30",
    operator: "+",
    content:
      "Styling options to get the most customization out of your website",
  },
  {
    title: "24",
    operator: "/7",
    content: "Availability to discuss upgrades, changes, and ongoing support",
  },
];
