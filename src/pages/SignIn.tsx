import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { Envelope, Lock } from "phosphor-react";
import { CheckBox } from "../components/Checkbox";
import { Button } from "../components/Button";
import { FormEvent, useState } from "react";
import { errorAlert, successAlert } from "../components/Alert";
import axios from "axios";
import { Container } from "../components/Container";

function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState<boolean>(false);
  const [credentials, setCredentials] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      const { data } = await axios.post("/sessions", {
        email: credentials.email,
        password: credentials.password,
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
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4"
    >
      <label htmlFor="email" className="flex flex-col gap-3">
        <Text className="font-semibold" size="md">
          Endereço de e-mail
        </Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>
          <TextInput.Input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@example.com"
            autoComplete="off"
            onChange={(ev) =>
              setCredentials((prevCredentials: any) => {
                return { ...prevCredentials, email: ev.target.value };
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
            name="password"
            id="password"
            placeholder="**********"
            onChange={(ev) =>
              setCredentials((prevCredentials: any) => {
                return { ...prevCredentials, password: ev.target.value };
              })
            }
          />
        </TextInput.Root>
      </label>

      <label htmlFor="remember" className="mt-4">
        <CheckBox.Root>
          <CheckBox.Input id="remember" />
          <CheckBox.Text>Lembrar de mim por 30 dias</CheckBox.Text>
        </CheckBox.Root>
      </label>

      <Button
        disabled={!credentials.email || !credentials.password}
        className="mt-8"
        type="submit"
      >
        Entrar na plataforma
      </Button>
    </form>
  );
}

export { SignIn };