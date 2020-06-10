import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import { ReactComponent as Profile } from "../assets/undraw_male_avatar_323b.svg";

const SobreMi = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h3" id="Sobre Mí" align="center">
          Sobre Mí
        </Typography>
      </Grid>
      <Grid container className={classes.sobreMiContainer}>
        <Grid item className={classes.sobreMiItem}>
          <Typography variant="body1" paragraph>
            Hola! Tengo 23 años y me ha gustado la tecnologia desde que tengo
            memoria. Actualmente me desenvuelvo de manera Fullstack en
            desarrollo web.
            <br />
            <br />
            Mi carrera comenzó el 2015 en Ing. Civil Informática en la
            Universidad Andres Bello la cual tuve que abandonar cumpliendo 3
            años en ella.
            <br />
            Actualmente estoy terminando la carrera de Analista Programador
            Computacional en Duoc UC.
            <br />
            Me considero autodidacta y estoy en constante aprendizaje.
            <br />
            <br />
            Fuera del area profesional me encanta el desarrollo de videojuegos.
            Como hobby utilizo Godot y su lenguaje GDScript que es muy parecido
            a Python para crear mini juegos
          </Typography>
        </Grid>
        <Grid item className={classes.sobreMiItem}>
          <Profile className={classes.profileLogo} />
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  profileLogo: {
    maxWidth: "20rem",
    maxHeight: "20rem",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "15rem",
      maxHeight: "15rem",
    },
  },
  sobreMiContainer: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  sobreMiItem: {
    maxWidth: "50%",
    textAlign: "justify",
    [theme.breakpoints.down("xs")]: {
      marginTop: 10,
      maxWidth: "65vw",
    },
  },
}));

export default SobreMi;
