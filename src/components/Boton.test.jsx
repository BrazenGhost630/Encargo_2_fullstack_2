import { describe,expect,it, vi } from "vitest";
import Boton_1 from "./Botonprueba";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Prueba componente Boton", () => {
    it("rederiza correctamente", ()=> { 
        render(<Boton_1/>)
        expect(screen.getByText("Presiona el boton")).toBeInTheDocument()
    })

    it(" Muestra alerta", () => {
        const alerta = vi.spyOn(window, 'alert').mockImplementation(() => {})
        render(<Boton_1/>)
        fireEvent.click(screen.getByText("Presiona el boton"))
        expect(alerta).toBeCalledTimes(1)

    })

    
})