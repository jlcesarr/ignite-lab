import { rest, setupWorker, StartOptions } from "msw";

interface IResponseBase {
  success: boolean;
  message: string;
}

interface ILoginResponseBody extends IResponseBase {
  token: string;
}
interface IRegisterResponseBody extends IResponseBase {}

interface ILoginRequestBody {
  email: string;
  password: string;
}

interface IRegisterRequestBody {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptedTOS: string;
}

export default {
  createMockAPI: (options: StartOptions, ...handlers: any[]) => {
    const worker = setupWorker(...handlers);
    worker.start({ ...options });
  },
  handlers: {
    login: rest.post("/sessions", async (req, res, ctx) => {
      const { email, password } = await req.json<ILoginRequestBody>();

      if (email === "validuser@user.com" && password == "validpassword") {
        return res(
          ctx.json<ILoginResponseBody>({
            success: true,
            message: "Usuário autenticado com sucesso!",
            token: "*"
              .repeat(10)
              .replaceAll("*", new Date().getTime().toString()),
          })
        );
      }

      return res(
        ctx.status(401),
        ctx.json<Omit<ILoginResponseBody, "token">>({
          success: false,
          message: "Credenciais inválidas!",
        })
      );
    }),
    register: rest.post("/register", async (request, response, ctx) => {
      const { name, email, password, confirmPassword, acceptedTOS } =
        await request.json<IRegisterRequestBody>();

      if (
        !name ||
        !email ||
        !password ||
        !confirmPassword ||
        !acceptedTOS ||
        password != confirmPassword
      ) {
        return response(
          ctx.json<IRegisterResponseBody>({
            success: false,
            message:
              "Erro durante o cadastro, verifique todos os campos e tente novamente!",
          })
        );
      }

      return response(
        ctx.json<IRegisterResponseBody>({
          success: true,
          message: "Cadastro realizado com sucesso!",
        })
      );
    }),
  },
};
