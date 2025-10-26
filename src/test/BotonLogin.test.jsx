import { render, screen } from "@testing-library/react";
import BotonInicioSesion from "../components/BotonInicioSesion";
import { describe, it, expect } from "vitest";

describe("BotonInicioSesion", () => {
  it("muestra el texto 'Entrar' por defecto", () => {
    render(<BotonInicioSesion />);
    expect(screen.getByRole("button", { name: /Entrar/i })).toBeInTheDocument();
  });

  it("muestra 'Cargando...' cuando loading es true", () => {
    render(<BotonInicioSesion loading={true} />);
    expect(screen.getByRole("button", { name: /Cargando.../i })).toBeInTheDocument();
  });

  it("muestra 'Cargando...' y color secondary cuando loading es true", () => {
    render(<BotonInicioSesion loading={true} />);
    const button = screen.getByTestId("boton-inicio");

    expect(button).toHaveTextContent("Cargando...");
    expect(button.className).toContain("btn-secondary");
  });
});