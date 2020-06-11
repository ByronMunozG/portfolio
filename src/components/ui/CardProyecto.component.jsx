import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";
import { OpenInNew, GitHub, Facebook } from "@material-ui/icons";

const CardProyecto = ({ proyecto }) => {
  const classes = useStyles();
  return (
    <Card className={classes.container}>
      <CardMedia
        className={classes.imagen}
        image={proyecto.imagen}
        component="img"
      />
      <CardContent>
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          {proyecto.nombre}
        </Typography>
        <br />
        <Typography variant="body1" paragraph style={{ textAlign: "justify" }}>
          {proyecto.descripcion}
        </Typography>
        {proyecto.herramientas.map((herramienta, index) => (
          <Typography
            key={index}
            variant="subtitle2"
            color="secondary"
            display="inline"
            style={{ marginRight: 5 }}
          >
            {`${herramienta} `}
          </Typography>
        ))}
        <br />
        {proyecto.url && (
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            endIcon={<OpenInNew />}
            href={proyecto.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visitar
          </Button>
        )}
        {proyecto.codigo && (
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            endIcon={<GitHub />}
            href={proyecto.codigo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Codigo
          </Button>
        )}
        {proyecto.fb && (
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            endIcon={<Facebook />}
            href={proyecto.fb}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Página
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    maxWidth: "80vw",
    marginTop: "2.5rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      maxWidth: "70vw",
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: "55vw",
    },
  },
  imagen: {
    maxWidth: "50%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  button: {
    marginTop: 10,
    marginRight: 5,
  },
}));

export default CardProyecto;
