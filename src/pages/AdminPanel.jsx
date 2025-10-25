import AdminUser from "../components/AdminUser";

import AdminCatalogo from "../components/AdminCatalogo";

export default function adminPanel() {


 

  

    const handleLogout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/";
  };
 return (

    <div className="container mt-5">
      <h2>Panel de Administración</h2>

      <h3>Panel de Usuarios</h3>

      <AdminUser />

      



      
       



      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}