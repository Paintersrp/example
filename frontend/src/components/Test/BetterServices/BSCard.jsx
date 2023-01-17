import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#212121",
    color: "white",
    boxShadow: "0px 10px 25px -5px rgba(0,0,0,0.5)",
    borderRadius: "10px",
    overflow: "hidden",
    fontFamily: "Poppins",
    minWidth: "375px",
    maxWidth: "375px",
    marginTop: "20px",
  },
  pricingTitle: {
    fontSize: "14px",
    fontWeight: 700,
    padding: "2px 3px",
    color: "#32CD32",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: "Poppins",
  },
  pricingContainer: {
    textAlign: "center",
    padding: "20px 20px 0px 20px",
    color: "gray.800",
    align: "center",
  },
  pricingAmount: {
    fontSize: "50px",
    fontWeight: 600,
    color: "gray.800",
    display: "inline-block",
  },
  pricingText: {
    color: "gray.500",
    display: "inline-block",
    marginLeft: "10px",
    fontSize: "20px",
    fontFamily: "Poppins",
  },
  listContainer: {
    backgroundColor: "gray.50",
    padding: "10px 20px 20px 5px",
  },
  button: {
    width: "75%",
    backgroundColor: "#006400",
    color: "white",
    fontFamily: "Poppins",
    "&:hover": {
      backgroundColor: "#3f51b5",
    },
    "&:focus": {
      backgroundColor: "#3f51b5",
    },
  },
  listItem: {
    padding: "5px",
    fontFamily: "Poppins",
  },
  checkColor: {
    color: "#006400;",
  },
});

export default function Pricing({ plan }) {
  const classes = useStyles();
  const { title, amount, unit, features } = plan;

  return (
    <Grid container justify="center" alignItems="center" py={6}>
      <Box maxWidth={"330px"} width={"100%"} className={classes.root}>
        <Grid container className={classes.pricingContainer}>
          <Typography className={classes.pricingTitle}>{title}</Typography>
          <Grid container direction="row" align="center" justify="center">
            <Typography className={classes.pricingAmount}>$</Typography>
            <Typography className={classes.pricingAmount}>{amount}</Typography>
            <Typography className={classes.pricingText}>{unit}</Typography>
          </Grid>
        </Grid>

        <Box className={classes.listContainer}>
          <List>
            {features.map((feature, i) => (
              <ListItem key={i} className={classes.listItem}>
                <ListItemIcon>
                  <CheckIcon className={classes.checkColor} />
                </ListItemIcon>
                <ListItemText>{feature}</ListItemText>
              </ListItem>
            ))}
          </List>

          <Button variant="contained" className={classes.button}>
            LEARN MORE
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}
