import { fireEvent, render, screen } from "@testing-library/react";
import { Login } from "../ pages/Login";
import { Home } from "../ pages/Home";

describe("login", () => {
  beforeEach(() => {
    render(<Login />);
  });
  test("Barra de nav encontrada", () => {
    const elemento = screen.getByTestId("barra-nav");
    expect(elemento).toBeInTheDocument();
  });

  test("formulario para ingresar", () => {
    const form = screen.getByTestId("formulario");
    expect(form).toBeInTheDocument();
  });

  test("palabra a buscar", () => {
    const pala = screen.getByTestId("palabra2");
    expect(pala).toHaveTextContent("Email:");
  });

  test("boton", () => {
    const boton = screen.getByTestId("boton");

    fireEvent.click(boton);
  });
});

describe("home", () => {
  beforeEach(() => {
    render(<Home />);
  });
  test("crear tus tareas", () => {
    const crear = screen.getByTestId("creador-tareas");
    expect(crear).toBeInTheDocument();
  });

  test("formulario para ingresar", () => {
    const palab = screen.getByTestId("palabra");
    expect(palab).toBeInTheDocument();
  });

  test("palabra a buscar", () => {
    const palab = screen.getByTestId("palabra");
    expect(palab).toHaveTextContent("Notes Blog");
  });

  // test("palabra a buscar test", () => {
  //   render(<Home />);
  //   const palas = screen.getByTestId("palabra");
  //   expect(palas.textContent).toBe("Notes Blog");
  // });

  test("palabra a buscar", () => {
    const palab2 = screen.getByTestId("palabra2");
    expect(palab2).toHaveTextContent("Task");
  });
});
