import { useEffect, useState } from "react";

export default function AdminUser() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
    fetch("http://demo1029291.mockable.io/user")
      .then(res => res.json())
      .then(data => setUsuarios(data.users))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Gestión de Usuarios</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.rol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



