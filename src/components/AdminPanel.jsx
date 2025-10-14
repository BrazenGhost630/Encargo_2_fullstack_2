export default function adminPanel() {

    const handleLogout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/"; // o navigate("/")
  };
 return (
    <div className="container mt-5">
      <h2>Panel de Administración</h2>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}