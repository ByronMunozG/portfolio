import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid container justify="center" style={{ marginTop: "10px" }}>
          <Grid
            item
            className={classes.iconContainer}
            component={"a"}
            href="https://github.com/ByronMunozG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub className={classes.GitHub} />
          </Grid>
          <Grid
            item
            className={classes.iconContainer}
            component={"a"}
            href="https://www.linkedin.com/in/byron-mu%C3%B1oz-godoy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn className={classes.LinkedIn} />
          </Grid>
        </Grid>
        <Grid item>
          <Typography className={classes.madeBy}>
            Creado por Byron M. Muñoz Godoy
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.green,
    width: "100%",
    marginTop: "10px",
  },
  madeBy: {
    fontSize: "1.2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.7rem",
    },
  },
  GitHub: {
    height: "1.5em",
    width: "1.5em",
    [theme.breakpoints.down("md")]: {
      height: "1em",
      width: "1em",
    },
  },
  LinkedIn: {
    height: "1.7em",
    width: "1.7em",
    [theme.breakpoints.down("md")]: {
      height: "1.2em",
      width: "1.2em",
    },
  },
  iconContainer: {
    color: "inherit",
  },
}));

export default Footer;
