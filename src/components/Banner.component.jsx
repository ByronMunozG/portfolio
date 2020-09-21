import React from "react";
import scrollToComponent from "react-scroll-to-component";

import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Typography, Button, useMediaQuery } from "@material-ui/core";

import { ReactComponent as Profile } from "../assets/undraw_feeling_proud_qne1.svg";

const Banner = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      className={classes.container}
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
    >
      <Grid item xs={10} sm={6} className={classes.nombre}>
        <Typography variant="h6">Hola, soy</Typography>
        <Typography variant="h4">Byron M. Muñoz Godoy.</Typography>
        <br />
        <Typography variant="subtitle1">
          Full Stack Developer residente en Santiago de Chile. Me encanta la
          informática en todas sus áreas y actualmente trabajo desarollando
          proyectos IoT con React
        </Typography>
        <br />
        <Grid container item justify="center" className={classes.botones}>
          <Button
            color="secondary"
            variant="contained"
            onClick={() =>
              scrollToComponent(document.getElementById("Proyectos"), {
                align: "top",
                offset: -100,
                duration: 800,
              })
            }
          >
            Ve mi trabajo
          </Button>
          <Button
            color="primary"
            variant="contained"
            href={"/ByronMuñozG.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            download
            style={matches ? { marginTop: 5 } : { marginLeft: 5 }}
          >
            Descargar CV
          </Button>
        </Grid>
      </Grid>
      <Grid container item xs={10} sm={6} justify="center" alignItems="center">
        <Profile className={classes.profileLogo} />
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
      width: "100%",
    },
  },
  profileLogo: {
    maxWidth: "20rem",
    maxHeight: "20rem",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "15rem",
      maxHeight: "15rem",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "10rem",
      maxHeight: "10rem",
    },
  },
  botones: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

export default Banner;
