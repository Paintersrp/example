import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Avatar from "@material-ui/core/Avatar";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#1C1C1C",
    color: "white",
  },
  drawer: {
    zIndex: 1,
    width: drawerWidth,
    flexShrink: 0,
    color: "white",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#1C1C1C",
    color: "white",
  },
  drawerContainer: {
    overflow: "auto",
    color: "white",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    color: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "white",
  },
  nested: {
    paddingLeft: theme.spacing(4),
    color: "white",
  },
  icon_color: {
    color: "white",
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    fontSize: "0.8rem",
    marginRight: 10,
  },
  title: {
    fontFamily: "Poppins",
    fontSize: "1.75rem",
    fontWeight: 700,
    textAlign: "center",
  },
  appbar: {
    backgroundColor: "#1C1C1C",
    color: "white",
  },
  menu: {
    marginRight: theme.spacing(2),
    color: "white",
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        open={openMenu}
        className={classes.drawer}
        variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar></Toolbar>
        <div className={classes.drawerContainer}>
          <Divider />
          <List>
            <ListItem>
              <Avatar className={classes.large}>USER</Avatar>
              <ListItemText
                className={classes.icon_color}
                primary="Username"
                secondary={
                  <p style={{ color: "#FFFFFF", margin: 0, padding: 0 }}>
                    user@example.com
                  </p>
                }
              />
            </ListItem>
            <Divider />
            <ListItem button onClick={handleClick}>
              <ListItemIcon className={classes.icon_color}>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon className={classes.icon_color}>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon className={classes.icon_color}>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sent mail" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon className={classes.icon_color}>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Drafts" />
                </ListItem>
              </List>
            </Collapse>
            <Divider />
            <ListItem button>
              <ListItemIcon className={classes.icon_color}>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="All mail" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon className={classes.icon_color}>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Trash" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon className={classes.icon_color}>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}
