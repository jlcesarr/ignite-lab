import { useState, FormEvent, useMemo, ChangeEvent, useEffect } from "react";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { User, Lock, EnvelopeSimple } from "phosphor-react";
import { CheckBox } from "../components/Checkbox";
import { Button } from "../components/Button";
import { errorAlert, successAlert } from "../components/Alert";

import { FormsFooter } from "../components/FormsFooter";
import { Link } from "../components/Link";
import axios from "axios";

interface IResgiterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptedTOS: boolean;
}

function Register() {
  const [formData, setFormData] = useState<IResgiterForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptedTOS: false,
  });

  const isValidForm = useMemo(() => {
    const { name, email, password, confirmPassword, acceptedTOS } = formData;
    return !email ||
      !name ||
      !password ||
      !confirmPassword ||
      password != confirmPassword ||
      !acceptedTOS
      ? true
      : false;
  }, [formData]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      const { data } = await axios.post("/register", {
        name: formData.email,
        email: formData.password,
        password: formData.password,
        confirmPassword: formData.password,
      });

      if (data.success === true) {
        successAlert(data.message);
      }
    } catch (error: any) {
      errorAlert(
        error.response?.data?.message ||
          "Erro durante o cadastro, tente novamente!"
      );
    }
  }

  return (
    <>
      <Text size="lg" className="text-gray-400 mt-1">
        Cadastre-se e comece a usar!
      </Text>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4"
      >
        <label htmlFor="name" className="flex flex-col gap-3">
          <Text className="font-semibold" size="md">
            Seu nome
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <User />
            </TextInput.Icon>
            <TextInput.Input
              type="text"
              required
              name="name"
              id="name"
              placeholder="John Doe"
              autoComplete="off"
              onChange={(ev) =>
                setFormData((prevCredentials: any) => {
                  return { ...prevCredentials, name: ev.target.value };
                })
              }
            />
          </TextInput.Root>
        </label>

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold" size="md">
            Endereço de e-mail
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <EnvelopeSimple />
            </TextInput.Icon>
            <TextInput.Input
              required
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@example.com"
              autoComplete="off"
              onChange={(ev) =>
                setFormData((prevCredentials: any) => {
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
              required
              type="password"
              name="password"
              id="password"
              placeholder="**********"
              onChange={(ev) =>
                setFormData((prevCredentials: any) => {
                  return { ...prevCredentials, password: ev.target.value };
                })
              }
            />
          </TextInput.Root>
        </label>

        <label htmlFor="confirmPassword" className="flex flex-col gap-3">
          <Text className="font-semibold" size="md">
            Confirme sua senha
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              required
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="**********"
              onChange={(ev) =>
                setFormData((prevCredentials: any) => {
                  return {
                    ...prevCredentials,
                    confirmPassword: ev.target.value,
                  };
                })
              }
            />
          </TextInput.Root>
        </label>

        <label htmlFor="acceptTOS" className="mt-4">
          <CheckBox.Root>
            <CheckBox.Input
              id="acceptTOS"
              onCheckedChange={(checked) =>
                setFormData((prevCredentials: any) => {
                  return {
                    ...prevCredentials,
                    acceptedTOS: checked,
                  };
                })
              }
              required
            />
            <CheckBox.Text>Concordo com os termos de uso</CheckBox.Text>
          </CheckBox.Root>
        </label>

        <Button disabled={isValidForm} className="mt-8" type="submit">
          Enviar meus dados
        </Button>
      </form>
      <FormsFooter>
        <Link routerContext to="/login">
          Já possui uma conta? Faça login!
        </Link>
      </FormsFooter>
    </>
  );
}

export { Register };
