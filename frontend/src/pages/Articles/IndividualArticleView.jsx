import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import axios from "axios";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";
import { CardMedia, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "99vw",
    minHeight: "77.5vh",
    justifyContent: "center",
    padding: "20px 0 20px 0",
  },
  card: {
    maxWidth: "75%",
    backgroundColor: "#1C1C1C",
    color: "white",
  },
  title: {
    padding: 20,
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: 40,
    display: "flex",
    justifyContent: "center",
  },
  body: {
    padding: "0 40px 0 40px",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "0.9rem",
    letterSpacing: 0.5,
    lineHeight: 1.5,
  },
  pos: {
    marginBottom: 12,
  },
  image: {
    minHeight: 200,
    width: "100%",
    paddingBottom: "56.25%", // 16:9
  },
  chips: {
    padding: "0px 50px 20px 50px",
  },
}));

const IndividualArticleView = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/articles/${id}/`
        );
        setArticle(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent style={{ justifyContent: "center", alignItems: "center" }}>
          {article.image && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50%",
                }}
              >
                <CardMedia
                  className={classes.image}
                  image={`http://127.0.0.1:8000/${article.image}`}
                />
              </div>
            </div>
          )}
          <Typography className={classes.title}>{article.title}</Typography>
          <Typography className={classes.body}>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(article.content),
              }}
            />
          </Typography>
        </CardContent>
        <CardActions className={classes.chips}>
          {article.tags &&
            article.tags.map((tag) => <Chip key={tag.name} label={tag.name} />)}
        </CardActions>
      </Card>
    </div>
  );
};

export default IndividualArticleView;
