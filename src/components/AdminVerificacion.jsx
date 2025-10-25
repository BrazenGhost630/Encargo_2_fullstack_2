import { Navigate } from "react-router-dom";

export default function CambiarAdmin({ children }) {

  
  const user = JSON.parse(localStorage.getItem("user"));
  

  if (!user || user.rol !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return children;
}