import { Grid } from "@material-ui/core";
import { pricingData } from "./pricingData";
import Pricing from "./BSCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  pricingContainer: {
    "@media (max-width: 768px)": {
      flexDirection: "column",
    },
  },
});

function PricingPage() {
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent="center"
      className={classes.pricingContainer}
      spacing={4}
    >
      {pricingData.map((planData, i) => (
        <Grid item xs={12} md={4} key={i}>
          <Pricing plan={planData} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PricingPage;
