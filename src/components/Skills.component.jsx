import React from "react";

import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { DesktopMac, Storage, Build } from "@material-ui/icons";

const Skills = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container direction="column">
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h3" id="Skills" align="center">
          Skills
        </Typography>
        <Typography variant="h6" className={classes.subtitulo}>
          Tecnologias que
          <span className={classes.specialTextTitulo}> me gustan</span> y
          utilizo
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="row"
        style={{ marginTop: 10 }}
        className={classes.techContainer}
      >
        <Grid item>
          <Paper elevation={3} className={classes.useTech}>
            <DesktopMac color="secondary" className={classes.icon} />
            <Typography
              variant="h5"
              color="secondary"
              className={classes.titulo}
            >
              Front End
            </Typography>
            <Typography
              paragraph
              variant="body1"
              className={classes.specialText}
            >
              React
              <br />
              Redux
              <br />
              Material-UI
            </Typography>
            <Typography
              paragraph
              variant="body1"
              className={classes.normalText}
            >
              React-native
              <br />
              CSS/SCSS
              <br />
              Redux-Saga
              <br />
              TypeScript
              <br />
              Next JS
              <br />
              Gatsby
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={3} className={classes.useTech}>
            <Storage color="secondary" className={classes.icon} />
            <Typography
              variant="h5"
              color="secondary"
              className={classes.titulo}
            >
              Back End
            </Typography>
            <Typography
              paragraph
              variant="body1"
              className={classes.specialText}
            >
              Apollo GraphQL
            </Typography>
            <Typography
              paragraph
              variant="body1"
              className={classes.normalText}
            >
              Express JS
              <br />
              Node JS
              <br />
              Firebase
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={3} className={classes.useTech}>
            <Build color="secondary" className={classes.icon} />
            <Typography
              variant="h5"
              color="secondary"
              className={classes.titulo}
            >
              Database y otros
            </Typography>
            <Typography
              paragraph
              variant="body1"
              className={classes.specialText}
            >
              MongoDB
              <br />
              PostgreSQL
              <br />
              Docker
            </Typography>
            <Typography
              paragraph
              variant="body1"
              className={classes.normalText}
            >
              Redis
              <br />
              MySQL
              <br />
              OracleSQL
              <br />
              SSH
              <br />
              Jest
              <br />
              Enzyme
              <br />
              Git
              <br />
              AWS
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "80vw",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "95vw",
      margin: "auto",
    },
  },
  subtitulo: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9rem",
      textAlign: "center",
    },
  },
  useTech: {
    marginLeft: "1rem",
    width: "20vw",
    minHeight: "22rem",
    padding: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      minHeight: "17rem",
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: 0,
      width: "60vw",
      marginBottom: 10,
    },
  },
  techContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  titulo: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  icon: {
    width: "2.5rem",
    height: "2.5rem",
  },
  specialTextTitulo: {
    color: theme.palette.primary.dark,
    marginBottom: 0,
    textAlign: "center",
  },
  specialText: {
    color: theme.palette.primary.dark,
    marginBottom: 0,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  normalText: {
    marginBottom: 0,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
}));

export default Skills;
