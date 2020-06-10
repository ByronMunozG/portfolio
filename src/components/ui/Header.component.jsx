import React, { useState } from "react";
import scrollToComponent from "react-scroll-to-component";

import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Typography,
  Tabs,
  Tab,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Menu as MenuIcon } from "@material-ui/icons";

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [value, setValue] = useState(5);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {infoLinks.map((linkData, index) => (
          <Tab
            key={index}
            className={classes.tab}
            label={linkData.nombre}
            onClick={() =>
              scrollToComponent(document.getElementById(`${linkData.nombre}`), {
                align: "top",
                offset: -100,
                duration: 800,
              })
            }
          />
        ))}
      </Tabs>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List disablePadding>
          {infoLinks.map((linkData, index) => (
            <ListItem
              key={index}
              onClick={() => {
                setOpenDrawer(false);
                setValue(linkData.value);
                scrollToComponent(
                  document.getElementById(`${linkData.nombre}`),
                  {
                    align: "top",
                    offset: -100,
                    duration: 800,
                  }
                );
              }}
              divider
              button
              selected={value === linkData.value}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {linkData.nombre}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Typography
              className={classes.nombre}
              variant="h4"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                setValue(5);
              }}
            >
              b.muñoz
            </Typography>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "7px",
  },
  nombre: {
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  drawerIcon: {
    height: "45px",
    width: "45px",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.green,
  },
  drawerItem: {
    ...theme.typography.tab,
  },
}));

const ElevationScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const infoLinks = [
  { nombre: "Proyectos", value: 0 },
  { nombre: "Skills", value: 1 },
  { nombre: "Educación", value: 2 },
  { nombre: "Sobre Mí", value: 3 },
  { nombre: "Contacto", value: 4 },
];

export default Header;
