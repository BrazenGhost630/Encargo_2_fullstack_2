import { Navigate } from "react-router-dom";
import { useLogin } from "../apis/Api_Felix.jsx";

export default function PrivateRoute({ children }) {
  const { user } = useLogin(); 


  if (!user) {
    return <Navigate to="/login" replace />;
  }



  return children;
}