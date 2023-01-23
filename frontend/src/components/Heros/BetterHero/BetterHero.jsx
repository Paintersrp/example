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
import TitleBlock from "../../Parts/TitleBlock/TitleBlock";

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

export default function BetterHero() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container spacing={4} alignItems="center">
        <Grid
          item
          xs={12}
          md={6}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div style={{ maxWidth: "80%" }}>
            <TitleBlock
              subtitle="Get Started"
              title="Let's bring your ideas to life"
              description="We understand that every project is unique and requires a
                personalized approach. Our team is here to help you turn
                your vision into reality. Whether you need a new website, mobile app, or just some
                help with digital marketing, we've got you covered."
              alignment="Center"
              showDivider={true}
            />
            <Box
              mt={4}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: 10 }}
              >
                Get started
              </Button>
            </Box>
          </div>
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
