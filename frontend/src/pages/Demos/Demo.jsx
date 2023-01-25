import React from "react";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: `${theme.spacing(3)}px 0`,
    color: "white",
    backgroundColor: "white",
  },
}));

function Demo({ demoTitle, components }) {
  const classes = useStyles();

  return (
    <div
      style={{
        backgroundColor: "#242424",
        display: "flex",
        width: "100%",
        minHeight: 700,
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
            padding: 0,
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "white",
              margin: 0,
              paddingTop: 20,
              fontSize: "2.25rem",
            }}
          >
            {demoTitle}
          </h1>
        </div>
        {components.map((hero, index) => (
          <>
            <Divider
              key={index}
              variant="fullWidth"
              className={classes.divider}
            />
            <div
              key={index}
              style={{
                paddingBottom: 100,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  textAlign: "center",
                  color: "white",
                  margin: 0,
                  paddingBottom: 80,
                }}
              >
                {hero.title}
              </h2>
              {React.createElement(hero.component, hero.props)}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Demo;
