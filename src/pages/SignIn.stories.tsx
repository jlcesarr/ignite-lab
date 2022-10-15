import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { SignIn } from "./SignIn";
import { rest } from "msw";

interface IAuthenticateUserResponse {
  success: boolean;
  message: string;
}

export default {
  title: "Pages/Sign In",
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/sessions", async (req, res, ctx) => {
          const { email, password } = await req.json();

          if (email === "validuser@user.com" && password == "validpassword") {
            return res(
              ctx.json<IAuthenticateUserResponse>({
                success: true,
                message: "Usuário autenticado com sucesso!",
              })
            );
          }

          return res(
            ctx.status(401),
            ctx.json<IAuthenticateUserResponse>({
              success: false,
              message: "Credenciais inválidas!",
            })
          );
        }),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {};

export const ValidCredentials: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    userEvent.type(
      canvas.getByPlaceholderText("johndoe@example.com"),
      "validuser@user.com"
    );

    userEvent.type(canvas.getByPlaceholderText("**********"), "validpassword");
    userEvent.click(canvas.getByRole("button"));

    await waitFor(() => {
      return expect(canvas.getByText("Login realizado!")).toBeInTheDocument();
    });
  },
};

export const InvalidCredentials: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    userEvent.type(
      canvas.getByPlaceholderText("johndoe@example.com"),
      "johndoe@example.com"
    );

    userEvent.type(canvas.getByPlaceholderText("**********"), "12345678");
    userEvent.click(canvas.getByRole("button"));

    // need to verify if the error modal is present
  },
};
