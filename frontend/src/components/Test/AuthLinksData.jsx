import { FaSignInAlt, FaSignOutAlt, FaUserPlus } from "react-icons/fa";

const authLinksData = [
  {
    text: "Login",
    path: "/login",
    icon: <FaSignInAlt />,
  },
  {
    text: "Register",
    path: "/register",
    icon: <FaUserPlus />,
  },
  {
    text: "Logout",
    path: "/logout",
    icon: <FaSignOutAlt />,
  },
];

export default authLinksData;