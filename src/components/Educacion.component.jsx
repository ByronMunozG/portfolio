import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";

import { ImportContacts, AttachFile } from "@material-ui/icons";

const Educacion = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h3" id="Educación" align="center">
          Educación
        </Typography>
      </Grid>
      <Grid item>
        <List>
          <ListItem>
            <ListItemAvatar>
              <ImportContacts color="secondary" className={classes.icon} />
            </ListItemAvatar>
            <ListItemText
              primary="Analista Desarrollador Computacional"
              secondary="2018 - Actual | Duoc UC | Vespertino"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <ImportContacts color="secondary" className={classes.icon} />
            </ListItemAvatar>
            <ListItemText
              primary="Ing. Civil Informática"
              secondary="2015 - 2017 | UNAB | Incompleto"
            />
          </ListItem>
        </List>
      </Grid>
      <Grid item>
        <Typography variant="h3" align="center" style={{ marginTop: "3rem" }}>
          Certificados
        </Typography>
      </Grid>
      <Grid item>
        <List>
          <ListItem
            component="a"
            href="https://www.udemy.com/certificate/UC-7b197d04-0c8a-4926-b865-5adc47f3c61b/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemAvatar>
              <AttachFile color="secondary" className={classes.icon} />
            </ListItemAvatar>
            <ListItemText
              primary="Complete React Developer"
              secondary="Mayo 2020 | Udemy | 40 Horas"
            />
          </ListItem>
          <ListItem
            component="a"
            href="https://www.udemy.com/certificate/UC-d562aeff-8cf9-4edf-946d-2b9ef423e15a/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemAvatar>
              <AttachFile color="secondary" className={classes.icon} />
            </ListItemAvatar>
            <ListItemText
              primary="Junior to Senior Web Developer"
              secondary="Abril 2020 | Udemy | 35.5 Horas"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <ImportContacts color="secondary" className={classes.icon} />
            </ListItemAvatar>
            <ListItemText primary="Calidad de Software" secondary="Duoc UC" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <ImportContacts color="secondary" className={classes.icon} />
            </ListItemAvatar>
            <ListItemText
              primary="Análisis y planificación de requerimientos informáticos"
              secondary="Duoc UC"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <ImportContacts color="secondary" className={classes.icon} />
            </ListItemAvatar>
            <ListItemText
              primary="Certificado internacional de inglés elemental"
              secondary="Duoc UC"
            />
          </ListItem>
          <ListItem
            component="a"
            href="https://www.udemy.com/certificate/UC-8e646e0d-9562-4ee0-b3ec-4ff11abd7a38/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemAvatar>
              <AttachFile color="secondary" className={classes.icon} />
            </ListItemAvatar>
            <ListItemText
              primary="Efficient Learning"
              secondary="Abril 2020 | Udemy | 5.5 Horas"
            />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "2.5rem",
    height: "2.5rem",
  },
}));

export default Educacion;
