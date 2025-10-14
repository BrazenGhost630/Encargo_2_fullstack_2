import { Navigate } from "react-router-dom";

export default function CambiarAdmin({ children }) {

  const loggearAdmin = localStorage.getItem("auth") === "true";

  return loggearAdmin ? children : <Navigate to="/" replace />;
}