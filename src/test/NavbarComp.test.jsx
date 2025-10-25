import { describe,expect,it, vi } from "vitest";

import { render, screen, fireEvent } from "@testing-library/react";

import Formulario from "../components/Formulario";

it("contiene los links", () => {
  const links = ["Inicio", "Login", "Perfil", "Nosotros", "Carrito", "Catálogo"];
  links.forEach(text => {
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});

it("cada enlace apunta a la ruta correcta", () => {
  const nav = screen.getByRole("navigation");
  expect(within(nav).getByText("Inicio").closest("a")).toHaveAttribute("href", "/");
  expect(within(nav).getByText("Login").closest("a")).toHaveAttribute("href", "/login");
});