import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { Alert } from "../components/Alert";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { Register } from "./Register";
import { rest, setupWorker } from "msw";

export default {
  title: "Pages/Register",
  component: Register,
  parameters: {
    msw: {
      handlers: [
        rest.post("/register", async (request, response, ctx) => {
          const { name, email, password, confirmPassword } =
            await request.json();

          return response(
            ctx.json({
              success: true,
              message: "Cadastro realizado com sucesso!",
            })
          );
        }),
      ],
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
export const AfterRegistration: StoryObj = {
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
  },
};
