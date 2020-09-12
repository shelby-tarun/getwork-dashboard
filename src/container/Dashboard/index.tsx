import React, { lazy, Suspense, useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import styles from "./Dashboard.module.scss";
import { Collapse } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
const Jobs = lazy(() => import("../Jobs"));

interface IPropsDashboard {}

// interface MenuItemsContainer {
//   [Jobs: string]: React.LazyExoticComponent<React.FC>;
// }

const drawerWidth = 200;

const menuItems = [
  { name: "Home", icon: "", nested: [] },
  { name: "Create Job", icon: "", nested: [] },
  { name: "Invite Companies", icon: "", nested: [] },
  {
    name: "Jobs",
    icon: "",
    nested: ["Open Jobs", "Closed Jobs"],
  },
  { name: "Application Status", icon: "", nested: [] },
  { name: "Notices", icon: "", nested: ["Inbox", "Outbox"] },
  { name: "Connections", icon: "", nested: ["Companies", "Students"] },
  { name: "Reports", icon: "", nested: [] },
];

// const menuItemsContainer: MenuItemsContainer = {
//   Jobs: Jobs,
// };

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: '100%',
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  },
  content: {
    flexGrow: 1,
    width: '100%',
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  main: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

const Dashboard: React.FC<IPropsDashboard> = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState<boolean>(true);
  const [activeListItem, setActiveListItem] = useState<string>("Jobs");
  // const ActiveComponent = menuItemsContainer[activeListItem] || <div>Not found</div>;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (name: string) => {
    if (activeListItem === name) {
      setActiveListItem('');
    } else {
      setActiveListItem(name);
    }

  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {activeListItem}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <h2>GetWork</h2>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem
                button
                key={item.name}
                onClick={() => handleListItemClick(item.name)}
              >
                <ListItemText primary={item.name} />
                {item.nested.length ? item.name === activeListItem ? <ExpandLess /> : <ExpandMore /> : null}
              </ListItem>
              {item.nested.length ? (
                <Collapse
                  in={activeListItem === item.name}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <React.Fragment>
                      {item.nested.map((subItem) => (
                        <ListItem
                          key={subItem}
                          button
                          className={classes.nested}
                        >
                          <ListItemText primary={subItem} />
                        </ListItem>
                      ))}
                    </React.Fragment>
                  </List>
                </Collapse>
              ) : null}
            </React.Fragment>
          ))}
        </List>
        <Divider />
        <List>
          {["Contact Getwork"].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        // className={styles.container__main}
        className={clsx(classes.main, classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {/* <div className={classes.drawerHeader} /> */}
        <Suspense fallback="Loading...">
          <Jobs />
        </Suspense>
      </main>
    </div>
  );
};

export default Dashboard;
