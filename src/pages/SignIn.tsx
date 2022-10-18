import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { EnvelopeSimple, Lock } from "phosphor-react";
import { CheckBox } from "../components/Checkbox";
import { Button } from "../components/Button";
import { useState } from "react";
import { errorAlert, successAlert } from "../components/Alert";
import { FormsFooter } from "../components/FormsFooter";
import { Link } from "../components/Link";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

interface ISignInForm {
  email: string;
  password: string;
  remember: boolean;
}

function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState<boolean>(false);

  const {
    watch,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<ISignInForm>({
    shouldFocusError: true,
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit: SubmitHandler<ISignInForm> = async ({ ...fields }) => {
    try {
      const { data } = await axios.post("/sessions", {
        ...fields,
      });

      if (data.success === true) {
        setIsUserSignedIn(true);
        successAlert(data.message);
      }
    } catch (error: any) {
      errorAlert(
        error.response?.data?.message ||
          "Erro durante a autenticação, tente novamente!"
      );
    }
  };

  return (
    <>
      <Text size="lg" className="text-gray-400 mt-1">
        Faça login e comece a usar!
      </Text>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4"
      >
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold" size="md">
            Endereço de e-mail
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <EnvelopeSimple />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              placeholder="johndoe@example.com"
              autoComplete="off"
              register={() =>
                register("email", {
                  required: true,
                  validate: {
                    isValidMail: (value) =>
                      new RegExp(
                        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
                      ).test(value) || "Insira um e-mail válido",
                  },
                })
              }
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold" size="md">
            Sua senha
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="**********"
              register={() => register("password", { required: true })}
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="mt-4">
          <CheckBox.Root>
            <CheckBox.Input
              id="remember"
              register={() => register("remember")}
              onCheckedChange={(checked) =>
                setValue("remember", Boolean(checked))
              }
            />
            <CheckBox.Text>Lembrar de mim por 30 dias</CheckBox.Text>
          </CheckBox.Root>
        </label>

        <Button className="mt-8" type="submit">
          Entrar na plataforma
        </Button>
      </form>
      <FormsFooter>
        <Link
          routerContext
          to="/"
          className="blur-[0.7px] pointer-events-none cursor"
        >
          Esqueceu sua senha?
        </Link>
        <Link routerContext to="/register">
          Não possui conta? Crie uma agora!
        </Link>
      </FormsFooter>
    </>
  );
}

export { SignIn };
