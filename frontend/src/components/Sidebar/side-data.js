const sideData = {
  appName: "EDGELORDS",
  routes: [
    {
      name: "Expenses",
      path: "/expenses",
    },
    {
      name: "Income",
      path: "/",
    },
    {
      name: "Services",
      path: "/services2",
    },
    {
      name: "About",
      path: "/about2",
    },
    {
      name: "Profile",
      path: "/profile",
    },
  ],
  auth: {
    loggedIn: false,
    loginPath: "/login",
    logoutPath: "/logout",
    profilePath: "/profile",
    registerPath: "/register",
  },
  collapsed: false,
};

export default sideData;
