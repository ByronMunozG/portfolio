import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";
import { OpenInNew, GitHub } from "@material-ui/icons";

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
            variant="contained"
            color="secondary"
            endIcon={<OpenInNew />}
            style={{ marginTop: 10 }}
            href={proyecto.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visitar
          </Button>
        )}
        {proyecto.codigo && (
          <Button
            variant="contained"
            color="secondary"
            endIcon={<GitHub />}
            style={{ marginTop: 10 }}
            href={proyecto.codigo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Codigo
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
}));

export default CardProyecto;
