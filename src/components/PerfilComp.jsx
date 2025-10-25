import React from "react";
import { useLogin } from "../apis/Api_Felix.jsx";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function PerfilComp() {
  const { user, logout } = useLogin();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  if (!user) return null; 

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: "#f8f8f8" }}>
      <div className="p-5 shadow rounded bg-white" style={{ minWidth: 350, maxWidth: 400 }}>
        <h2 className="mb-4 text-center">Perfil de usuario</h2>

        <p><strong>Nombre:</strong> {user.nombre}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Dirección:</strong> {user.direccion || "No registrada"}</p>
        <p><strong>Rol:</strong> {user.rol}</p>

        <Button variant="danger" onClick={handleLogout} className="w-100 mt-3">
          Cerrar sesión
        </Button>
      </div>
    </div>
  );
}