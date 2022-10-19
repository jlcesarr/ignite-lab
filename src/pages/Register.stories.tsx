import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { Alert } from "../components/Alert";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { Register } from "./Register";
import { expect } from "@storybook/jest";
import mswConfig from "../msw";

export default {
  title: "Pages/Register",
  component: Register,
  parameters: {
    msw: {
      handlers: [mswConfig.handlers.register],
    },
  },
  decorators: [
    (Story) => {
      return (
        <>
          <BrowserRouter>
            <Container>
              <Alert />
              <Header />
              {Story()}
            </Container>
          </BrowserRouter>
        </>
      );
    },
  ],
} as Meta;

export const Default = {};
export const SuccessfulRegistration: StoryObj = {
  name: "Simulate successful registration",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByPlaceholderText("John Doe"), "John Doe");
    userEvent.type(
      canvas.getByPlaceholderText("johndoe@example.com"),
      "johndoe@example.com"
    );
    canvas
      .getAllByPlaceholderText("**********")
      .forEach((input) => userEvent.type(input, "validpassword"));

    userEvent.click(canvas.getByRole("checkbox"));

    await waitFor(() => {
      return userEvent.click(canvas.getByText("Enviar meus dados"));
    });

    await waitFor(async () => {
      return expect(
        canvas.getByText("Cadastro realizado com sucesso!")
      ).toBeInTheDocument();
    });
  },
};

export const EmptyFields: StoryObj = {
  name: "Simulate registration attempt with empty fields",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(() => {
      return userEvent.click(canvas.getByText("Enviar meus dados"));
    });

    await waitFor(async () => {
      return expect([
        canvas.getByText("Digite um nome"),
        canvas.getByText("Digite um e-mail"),
        canvas.getByText("Digite uma senha"),
        canvas.getByText("Repita sua senha"),
        canvas.getByText("Você deve concordar com os termos de uso"),
      ]).toHaveLength(5);
    });
  },
};

export const NoAPIResponse: StoryObj = {
  name: "Simulate registration attempt when the API is possibly down",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByPlaceholderText("John Doe"), "John Doe");
    userEvent.type(
      canvas.getByPlaceholderText("johndoe@example.com"),
      "johndoe@example.com"
    );
    canvas
      .getAllByPlaceholderText("**********")
      .forEach((input) => userEvent.type(input, "validpassword"));

    userEvent.click(canvas.getByRole("checkbox"));

    await waitFor(() => {
      return userEvent.click(canvas.getByText("Enviar meus dados"));
    });

    await waitFor(async () => {
      return expect(
        canvas.getByText("Erro durante o cadastro, tente novamente!")
      ).toBeInTheDocument();
    });
  },
  parameters: { msw: { handlers: [] } },
};
