import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Grid,
  Typography,
  ListItem,
  List,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { Mail, Phone } from "@material-ui/icons";

const Contacto = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h3" align="center" id="Contacto">
          Contacto
        </Typography>
      </Grid>
      <Grid item>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Mail className={classes.icon} color="primary" />
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h5" className={classes.item}>
                byron.munoz.godoy@gmail.com
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Mail className={classes.icon} color="primary" />
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h5" className={classes.item}>
                byron_97@live.cl
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Phone className={classes.icon} color="primary" />
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h5" className={classes.item}>
                +56 9 8773 9182
              </Typography>
            </ListItemText>
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
    [theme.breakpoints.down("xs")]: {
      width: "1.5rem",
      height: "1.5rem",
    },
  },
  item: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
}));

export default Contacto;
