import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

import Banner from "./Banner.component";
import Proyectos from "./Proyectos.component";
import Skills from "./Skills.component";
import Educacion from "./Educacion.component";
import SobreMi from "./SobreMi.component";
import Contacto from "./Contacto.component";

const Main = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid className={classes.bannerContainer} item>
        <Banner />
      </Grid>
      <Grid className={classes.container} item>
        <Proyectos />
      </Grid>
      <Grid className={classes.container} item>
        <Skills />
      </Grid>
      <Grid className={classes.education} item>
        <Educacion />
      </Grid>
      <Grid className={classes.container} item>
        <SobreMi />
      </Grid>
      <Grid className={classes.contacto} item>
        <Contacto />
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    margin: "4.4rem auto",
    maxWidth: "90vw",
    [theme.breakpoints.down("xs")]: {
      margin: "2rem 0",
      maxWidth: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "70vh",
      marginBottom: 0,
    },
  },
  container: {
    margin: "4.4rem auto",
    maxWidth: "90vw",
    [theme.breakpoints.down("xs")]: {
      margin: "2rem 0",
      maxWidth: "100%",
    },
  },
  education: {
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      margin: "auto 2rem",
    },
  },
  contacto: {
    margin: "auto",
  },
}));

export default Main;
