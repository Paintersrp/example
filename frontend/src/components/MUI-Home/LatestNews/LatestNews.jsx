import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import articles from "./articles.json";
import Paper from "@material-ui/core/Paper";
import { TestimonialHeading } from "../../Test/BetterTestimonials/BetterTestimonials";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#242424",
    color: "#fafafa",
    [theme.breakpoints.down("1100")]: {
      flexDirection: "column",
    },
  },
  cardroot: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 345,
    minWidth: 345,
    margin: 10,
    backgroundColor: "#212121",
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },
  media: {
    height: 180,
    margin: "0px 0px 10px 0px",
    backgroundColor: "#212121",
  },
  actionArea: {
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  },
  actionAreaLink: {
    textDecoration: "none",
    color: "inherit",
  },
  cardContent: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#212121",
    padding: 10,
    color: "#fafafa",
  },
  cardActions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 0,
    margin: 0,
    width: "100%",
    backgroundColor: "#212121",
  },
  readMoreButton: {
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    display: "flex",
    justifyContent: "center",
    fontSize: "2px",
    color: "#fafafa",
    marginRight: 10,
  },
  btnText: {
    padding: 0,
    margin: 0,
    fontSize: "14px",
  },
  title: {
    textAlign: "center",
    color: "#f9f9f9",
    fontWeight: "700",
    fontFamily: "Poppins",
    marginBottom: 20,
  },
  subtitle: {
    marginTop: 25,
    fontFamily: "Poppins",
    fontWeight: 600,
    textAlign: "center",
    color: "gold",
    fontSize: "0.8rem",
  },
}));

export default function LatestNews() {
  const [articlesData, setArticlesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        setArticlesData(articles);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <Grid container spacing={3}>
        {[0, 1, 2].map((article) => (
          <Grid item key={article} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <h1>Loading</h1>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

  if (error) {
    return (
      <Typography variant="body1" color="error">
        An error occurred while loading the articles.
      </Typography>
    );
  }

  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.subtitle}>
          In the Know
        </Typography>
        <Typography variant="h4" className={classes.title}>
          Latest News
        </Typography>
      </Grid>
      {articlesData.map((article) => (
        <Grid
          item
          key={article.id}
          xs={12}
          sm={6}
          md={4}
          className={classes.cardroot}
        >
          <Card className={classes.card}>
            <CardActionArea
              component={Link}
              to={`/articles/${article.id}`}
              className={classes.actionArea}
            >
              <CardMedia
                className={classes.media}
                image={article.image}
                title={article.title}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {article.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {article.preview}
                </Typography>
              </CardContent>
            </CardActionArea>
            <div className={classes.cardActions}>
              <Button
                variant="text"
                color="inherit"
                size="small"
                justifyContent="center"
                component={Link}
                to={`/articles/${article.id}`}
                className={classes.readMoreButton}
              >
                <h4 className={classes.btnText}>More</h4>
              </Button>
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
