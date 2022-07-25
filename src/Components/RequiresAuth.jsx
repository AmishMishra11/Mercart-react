import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { toast } from "react-toastify";

function RequiresAuth() {
  const { stateAuth } = useAuth();
  const { isAuth } = stateAuth;

  const location = useLocation();

  useEffect(() => {
    !isAuth &&
      toast.warning("Login Required", {
        position: "bottom-center",
        autoClose: 2000,
      });
  }, []);

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequiresAuth;
