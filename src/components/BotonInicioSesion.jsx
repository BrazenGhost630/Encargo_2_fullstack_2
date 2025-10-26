import { useState } from "react";
import { Button } from "react-bootstrap";


export default function BotonInicioSesion({ loading = false }) {

    const handleClick = () => {
    const [loading, setLoading] = useState(false);



    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };
    return (
    <Button variant={loading ? "secondary" : "primary"} type="submit" data-testid="boton-inicio">
        {loading ? "Cargando..." : "Entrar"}

    </Button>);
}
