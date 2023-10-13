import React, { useEffect } from "react";
import authService from "../appwrite/auth.service";
import { Navigate } from "react-router-dom";

const AuthWrapper = ({ children, auth }) => {
  // auth : true / false
  // if false then route is public
  // if true then route is protected  / only authorized users are allowed

  const user = null;
  let isAuthRequired = auth;
  return isAuthRequired ? (
    user ? (
      children
    ) : (
      <Navigate to={"/login"} />
    )
  ) : (
    children
  );
};

export default AuthWrapper;
