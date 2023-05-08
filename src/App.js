import {
  AppBar,
  CssBaseline,
  Button,
  Toolbar,
  Typography,
  CardMedia,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./styles";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="primary">
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              That's because Lorem ipsum is not a reserved keyword or function
              in React or in Visual Studio Code. It is simply a string of
              placeholder text that can be used in place of real content.
            </Typography>
            <div className={classes.buttons}>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                  <Button variant="contained" color="primary">
                    See My Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary Call
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container maxWidth="md">
          <Grid container spacing={4} className={classes.cardGrid}>
            {arr.map((item) => {
              return (
                <Grid item key={item} xs={12} sm={6} lg={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      title="my title"
                      image="https://source.unsplash.com/random"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h5" gutterBottom>
                        Heading
                      </Typography>
                      <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit, adipisci!
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        New
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default App;
