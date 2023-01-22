import {
  Container,
  Grid,
  Typography,
  Button,
  makeStyles,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "100%",
    padding: 20,
    marginBottom: 40,
  },
  heading: {
    fontWeight: 800,
    fontSize: "2.25rem",
    marginBottom: theme.spacing(2),
  },
  subheading: {
    fontWeight: 400,
    fontSize: "1rem",
    marginBottom: theme.spacing(2),
  },
  preheading: {
    fontWeight: 700,
    fontSize: "0.8rem",
    color: "gold",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  card: {
    boxShadow: theme.shadows[1],
    margin: theme.spacing(0, 0),
  },
  cardContent: {
    textAlign: "center",
  },
  action: {
    justifyContent: "center",
  },
}));

export default function CallToActionWithVideo() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography className={classes.preheading}>Titfucker</Typography>
          <Typography variant="h1" className={classes.heading}>
            Write once, use everywhere!
          </Typography>
          <Typography variant="body1" className={classes.subheading}>
            Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them, and even sync them in the cloud so
            you can use them anywhere. All that is free!
          </Typography>
          <Box mt={4}>
            <Button variant="contained" color="primary">
              Get started
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
