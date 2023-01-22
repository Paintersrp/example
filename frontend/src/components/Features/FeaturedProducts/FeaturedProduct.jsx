import {
  Grid,
  Typography,
  Divider,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  useTheme,
  Paper,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import StarRatings from "react-star-ratings";

const CustomButton = withStyles({
  label: {
    fontWeight: "700 !important",
    fontFamily: "Poppins !important",
    fontSize: "0.85rem !important",
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    justifyContent: "center",
    maxWidth: "100%",
  },
  subheading: {
    fontSize: "0.85rem",
    fontFamily: "Poppins",
    color: "gold",
    textAlign: "center",
    fontWeight: 700,
  },
  heading: {
    fontSize: "2rem",
    fontFamily: "Poppins",
    fontWeight: 700,
    textAlign: "center",
    color: "white",
    marginBottom: theme.spacing(1.5),
  },
  description: {
    fontSize: "1rem",
    fontFamily: "Poppins",
    fontWeight: 500,
    marginBottom: theme.spacing(2),
    textAlign: "center",
    color: "white",
  },
  productName: {
    fontWeight: "bold",
    color: "white",
  },
  productPrice: {
    fontWeight: "bold",
    marginTop: theme.spacing(1),
    color: "white",
  },
  card: {
    backgroundColor: "#1C1C1C",
    maxWidth: 375,
    minWidth: 325,
    height: "100%",
  },
  cardMedia: {
    marginTop: 20,
    height: 0,
    paddingTop: "56.25%", // 16:9
    backgroundSize: "contain",
  },
  cardContent: {
    flexGrow: 1,
    padding: theme.spacing(2),
    color: "white",
  },
  cardActions: {
    justifyContent: "center",
  },
  button: {
    background: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.common.white,
    minWidth: 100,
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: theme.shadows[7],
      backgroundColor: theme.palette.primary.dark,
    },
  },
  cardContainer: {
    justifyContent: "center",
    display: "flex",
  },
  gridContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 30,
  },
  flexGrid: {
    justifyContent: "center",
    display: "flex",
    maxWidth: "100%",
  },
  paper: {
    backgroundColor: "#242424",
    maxWidth: "100%",
  },
  divider: {
    marginBottom: 20,
    color: "white",
  },
}));

function FeaturedProducts({ products }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <div className={classes.flexGrid}>
        <Paper elevation={9} className={classes.paper}>
          <Grid container spacing={2} className={classes.gridContainer}>
            <Typography className={classes.subheading}>
              Featured Products
            </Typography>
            <Typography className={classes.heading}>
              Check out our top picks
            </Typography>
            <Typography className={classes.description}>
              These products have been hand-selected by our team and are sure to
              impress.
            </Typography>
            <Divider className={classes.divider} />

            <Grid container spacing={2} justifyContent="center">
              {products.map((product) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={product.id}
                  className={classes.cardContainer}
                >
                  <Card className={classes.card} elevation={9}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={product.image}
                      title={product.name}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        className={classes.productName}
                        component="h2"
                      >
                        {product.name}
                      </Typography>
                      <StarRatings
                        rating={product.rating}
                        starRatedColor="gold"
                        numberOfStars={5}
                        name="rating"
                        starDimension="20px"
                        starSpacing="5px"
                      />
                      <Typography className={classes.productDescription}>
                        {product.description}
                      </Typography>
                      <Typography className={classes.productPrice}>
                        ${product.price}
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                      <CustomButton
                        variant="contained"
                        className={classes.button}
                      >
                        View
                      </CustomButton>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}

export default FeaturedProducts;
