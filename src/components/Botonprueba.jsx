export default function Boton_1(){
    const alerta = () => {
        alert("apretaste boton")
    }
    return (
        <button onClick={alerta}>Presiona el boton</button>
    )
}