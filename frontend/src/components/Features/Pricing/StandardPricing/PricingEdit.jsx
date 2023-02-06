import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CardMedia, TextField } from "@material-ui/core";
import TagsInput from "../../../../pages/Articles/TagsInput";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#1C1C1C",
    color: "white",
    width: "100%",
  },
  title: {
    padding: 5,
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: 40,
    display: "flex",
    justifyContent: "left",
  },
  input: {
    width: "100%",
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
    minHeight: 100,
    minWidth: 200,
    width: "100%",
    paddingBottom: "56.25%",
  },
  button: {
    minWidth: 140,
    margin: theme.spacing(1),
    boxShadow: theme.shadows[3],
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows[14],
      backgroundColor: theme.palette.action.hover,
    },
  },
  field: {
    "& .MuiOutlinedInput-root": {
      padding: 0,
      margin: 5,
      fontSize: "0.8rem",
      width: "100%",
      height: 40,

      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#e0e0e0",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#e0e0e0",
      },
    },
    "& .MuiFormLabel-root": {
      margin: 5,
      color: "white",
      fontWeight: "700",
      fontSize: "0.85rem",
    },
    "& input": {
      color: "white",
    },
  },
  multiline: {
    marginTop: 5,
    marginBottom: 5,
    "& .MuiOutlinedInput-inputMultiline": {
      color: "white",
    },
    "& .MuiOutlinedInput-input": {
      color: "white",
      textAlign: "left",
    },
    "& .MuiOutlinedInput-root": {
      padding: 10,
      marginLeft: 3,
      fontSize: "0.8rem",
      width: "100%",
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#e0e0e0",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#e0e0e0",
      },
    },
    "& .MuiFormLabel-root": {
      color: "white",
      fontWeight: "700",
      fontSize: "0.85rem",
    },
    "& input": {
      color: "white",
    },
  },
}));

const PricingEdit = (plan) => {
  const data = plan.plan;
  console.log(data);
  const classes = useStyles();
  const [features, setFeatures] = useState(
    data.features.map((tag) => tag.detail.trim())
  );
  const [sites, setSites] = useState(
    data.supportedsites.map((tag) => tag.site.trim())
  );

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("tags", tags.join(","));
    if (image) {
      formData.append("image", image, image.name);
    }
    const config = {
      headers: {
        Authorization: `JWT ${getCookie("jwt")}`,
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      await axios.patch(
        `http://localhost:8000/api/articles/${id}/`,
        formData,
        config
      );
    } catch (error) {
      console.log(error);
    }
    try {
      const res = await axios.get(`http://localhost:8000/api/articles/${id}/`);
      setArticle(res.data);
      setContent(res.data.content);
      setTitle(res.data.title);
      setTags(res.data.tags.map((tag) => tag.name.trim()));
      setImage(res.data.image);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <form onSubmit={handleSubmit}>
          <CardContent>
            {data.image && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: 20,
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
                    image={`${data.image}`}
                  />
                </div>
              </div>
            )}
            <TextField
              className={classes.field}
              variant="outlined"
              label="Title"
              value={data.title}
              onChange={(event) => setText(event.target.value)}
            />
            <TextField
              className={classes.field}
              variant="outlined"
              label="Price"
              value={data.price}
              onChange={(event) => setText(event.target.value)}
            />
            <TextField
              className={classes.multiline}
              variant="outlined"
              label="Best For"
              value={data.bestFor}
              onChange={(event) => setText(event.target.value)}
              multiline
              minRows={4}
            />

            <TextField
              className={classes.field}
              variant="outlined"
              label="Guarantee"
              value={data.guarantee}
              onChange={(event) => setText(event.target.value)}
            />
            <Typography className={classes.title}>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Typography>
          </CardContent>
          <CardActions className={classes.chips}>
            <TagsInput tags={features} setTags={setFeatures} />
          </CardActions>
          <CardActions className={classes.chips}>
            <TagsInput tags={sites} setTags={setSites} />
          </CardActions>
          <CardActions style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              type="submit"
              className={classes.button}
            >
              Update
            </Button>
          </CardActions>
        </form>
      </Card>
    </div>
  );
};

export default PricingEdit;
