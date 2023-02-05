import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuth, setUser } from "../../Actions/auth";
import axiosInstance from "../../Axios/axiosInstance";
import Cookies from "js-cookie";

const withAuth = (WrappedComponent) => {
  const HOC = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
      if (Cookies.get("jwt")) {
        axiosInstance
          .get("/verify/")
          .then((res) => {
            dispatch(setAuth(true));
            dispatch(setUser(res.data.is_superuser));
          })
          .catch((err) => {
            dispatch(setAuth(false));
            dispatch(setUser(false));
          });
      } else {
        dispatch(setAuth(false));
        dispatch(setUser(false));
      }
    }, [dispatch]);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withAuth;
