import { render, screen } from "@testing-library/react";
import Detalle from "../components/Detalle";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, vi } from "vitest";

// Mock del localStorage
beforeEach(() => {
  const store = {};
  vi.spyOn(window.localStorage.__proto__, "getItem").mockImplementation((key) => store[key]);
  vi.spyOn(window.localStorage.__proto__, "setItem").mockImplementation((key, value) => (store[key] = value));
  vi.spyOn(window.localStorage.__proto__, "removeItem").mockImplementation((key) => delete store[key]);
});

describe("Componente Detalle", () => {
  it("muestra mensaje si no hay producto seleccionado", () => {
    window.localStorage.getItem.mockReturnValueOnce(null);

    render(
      <MemoryRouter>
        <Detalle />
      </MemoryRouter>
    );

    expect(screen.getByText("Producto no seleccionado")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /volver al catálogo/i })).toBeInTheDocument();
  });

  it("muestra la información del producto guardado", () => {
    const producto = {
      nombre: "pastel de prueba",
      precio: 9999,
      url: "https://www.freepik.es/fotos-vectores-gratis/pastel-dibujo",
      resena: "pastel de prueba",
      categoria: "torta"
    };

    window.localStorage.getItem.mockReturnValueOnce(JSON.stringify(producto));

    render(
      <MemoryRouter>
        <Detalle />
      </MemoryRouter>
    );

    expect(screen.getByText("pastel de prueba")).toBeInTheDocument();
    expect(screen.getByText(/Precio: \$9999/i)).toBeInTheDocument();
    expect(screen.getByText(/Reseña: pastel de prueba/i)).toBeInTheDocument();
  });
});