import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, Grid } from "@material-ui/core";

import CardProyecto from "./ui/CardProyecto.component";

const Proyectos = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography
          className={classes.titulo}
          variant="h3"
          id="Proyectos"
          style={{ marginTop: "5rem" }}
        >
          Proyectos que he construido
        </Typography>
      </Grid>
      <Grid>
        {proyectos.map((proyecto, index) => (
          <CardProyecto key={index} proyecto={proyecto} />
        ))}
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  titulo: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
  },
}));

const proyectos = [
  {
    nombre: "Chilepostbot",
    imagen: require("../assets/chilepostbot.png"),
    descripcion:
      "Una aplicacion full-stack para un proyecto personal. El usuario puede crear una cuenta, subir imagenes y ver imagenes cargadas por otros usuarios.",
    herramientas: [
      "React",
      "Redux",
      "GraphQL",
      "MongoDB",
      "Cloudinary",
      "SCSS",
    ],
    url: "https://www.chilepostbot.cl/",
  },
  {
    nombre: "Portafolio",
    imagen: require("../assets/portafolio.png"),
    descripcion: "Portafolio sencillo para mostrar mis aptitudes e información",
    herramientas: ["React", "Material-UI"],
    codigo: "https://www.linkamiportafolio.com",
  },
];

export default Proyectos;
