import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import InfoIcon from "@material-ui/icons/Info";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import ContactsIcon from "@material-ui/icons/Contacts";
import {
  FaAddressCard,
  FaBell,
  FaBoxOpen,
  FaInfoCircle,
  FaHome,
} from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  search: {
    padding: theme.spacing(1, 2),
    display: "flex",
    alignItems: "center",
  },
  searchInput: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  profile: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1, 2),
  },
  profileIcon: {
    marginRight: theme.spacing(1),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const items = [
  {
    name: "Home",
    icon: <FaHome size={22} />,
    link: "/",
  },
  {
    name: "About",
    icon: <FaInfoCircle size={22} />,
    link: "/about",
  },
  {
    name: "Services",
    icon: <FaBell size={22} />,
    link: "/about",
  },
  {
    name: "Contact",
    icon: <FaAddressCard size={22} />,
    link: "/about",
  },
  {
    name: "Demos",
    icon: <FaBoxOpen size={22} />,
    children: [
      { name: "Hero Components", link: "/heroes" },
      { name: "Feature Components", link: "/features" },
    ],
  },
];

export default function AdvancedSidebar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState({});

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const handleMenuOpen = (item) => () => {
    setMenuOpen({ ...menuOpen, [item]: !menuOpen[item] });
  };

  const sideList = () => (
    <div className={classes.list}>
      <List>
        {items.map((item, index) => (
          <React.Fragment key={item.name}>
            <ListItem
              button
              onClick={item.children ? handleMenuOpen(item.name) : () => {}}
              component="a"
              href={item.link}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
              {item.children &&
                (menuOpen[item.name] ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            {item.children && (
              <Collapse in={menuOpen[item.name]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.children.map((subItem) => (
                    <ListItem
                      button
                      key={subItem.name}
                      className={classes.nested}
                      component="a"
                      href={subItem.link}
                    >
                      <ListItemText primary={subItem.name} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {sideList()}
      </Drawer>
    </div>
  );
}
