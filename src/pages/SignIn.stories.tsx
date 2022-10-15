import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { SignIn } from "./SignIn";
import { rest } from "msw";

import { Alert } from "../components/Alert";

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
  decorators: [
    (Story) => {
      return (
        <>
          <Alert />
          {Story()}
        </>
      );
    },
  ],
} as Meta;

export const Default: StoryObj = {};

export const AfterAuthentication: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    userEvent.type(
      canvas.getByPlaceholderText("johndoe@example.com"),
      "validuser@user.com"
    );

    userEvent.type(canvas.getByPlaceholderText("**********"), "validpassword");
    userEvent.click(canvas.getByRole("button"));

    await waitFor(() => {
      return expect(
        canvas.getByText("Usuário autenticado com sucesso!")
      ).toBeInTheDocument();
    });
  },
};

export const InvalidAuthentication: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    userEvent.type(
      canvas.getByPlaceholderText("johndoe@example.com"),
      "johndoe@example.com"
    );

    userEvent.type(canvas.getByPlaceholderText("**********"), "12345678");
    userEvent.click(canvas.getByRole("button"));

    await waitFor(() => {
      return expect(
        canvas.getByText("Credenciais inválidas!")
      ).toBeInTheDocument();
    });
  },
};
