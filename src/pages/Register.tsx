import { useState, FormEvent, useMemo, ChangeEvent, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { User, Lock, EnvelopeSimple } from "phosphor-react";
import { CheckBox } from "../components/Checkbox";
import { Button } from "../components/Button";
import { errorAlert, successAlert } from "../components/Alert";

import { FormsFooter } from "../components/FormsFooter";
import { Link } from "../components/Link";
import axios from "axios";

import validators from "../helpers/validators";

interface IResgiterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptedTOS: boolean;
}

function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IResgiterForm>({
    criteriaMode: "all",
    shouldFocusError: true,
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptedTOS: false,
    },
  });

  const onSubmit: SubmitHandler<IResgiterForm> = async ({ ...fields }) => {
    try {
      const { data } = await axios.post("/register", {
        ...fields,
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
  };

  return (
    <>
      <Text size="lg" className="text-gray-400 mt-1">
        Cadastre-se e comece a usar!
        {}
      </Text>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4"
      >
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <Text asChild className="font-semibold" size="md">
              <label htmlFor="name">Seu nome</label>
            </Text>

            {errors.name && (
              <Text
                className="text-gray-200 whitespace-normal text-right"
                size="md"
              >
                {errors.name?.message}
              </Text>
            )}
          </div>

          <TextInput.Root>
            <TextInput.Icon>
              <User />
            </TextInput.Icon>
            <TextInput.Input
              type="text"
              id="name"
              aria-invalid={errors.name ? "true" : "false"}
              register={() =>
                register("name", {
                  required: "Digite um nome",
                  validate: {
                    isValidName: (value) =>
                      validators.validateFieldMinLength(value, 2) ||
                      "Insira um nome válido",
                  },
                })
              }
              placeholder="John Doe"
              autoComplete="off"
            />
          </TextInput.Root>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <Text asChild className="font-semibold" size="md">
              <label htmlFor="email">Endereço de e-mail</label>
            </Text>

            {errors.email && (
              <Text
                className="text-gray-200 whitespace-normal text-right"
                size="md"
              >
                {errors.email?.message}
              </Text>
            )}
          </div>

          <TextInput.Root>
            <TextInput.Icon>
              <EnvelopeSimple />
            </TextInput.Icon>
            <TextInput.Input
              aria-invalid={errors.email ? "true" : "false"}
              id="email"
              register={() =>
                register("email", {
                  required: "Digite um e-mail",
                  validate: {
                    isValidMail: (value) =>
                      validators.validateEmail(value) ||
                      "Insira um e-mail válido",
                  },
                })
              }
              placeholder="johndoe@example.com"
              autoComplete="off"
            />
          </TextInput.Root>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <Text asChild className="font-semibold" size="md">
              <div>
                <label htmlFor="password">Sua senha</label>
                <Text asChild className="font-normal block" size="sm">
                  <span>Mínimo 6 digítos</span>
                </Text>
              </div>
            </Text>

            {errors.password && (
              <Text
                className="text-gray-200 whitespace-normal text-right"
                size="md"
              >
                {errors.password?.message}
              </Text>
            )}
          </div>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              aria-invalid={errors.password ? "true" : "false"}
              register={() =>
                register("password", {
                  required: "Digite uma senha",
                  minLength: {
                    value: 6,
                    message: "Insira uma senha válida",
                  },
                })
              }
              placeholder="**********"
            />
          </TextInput.Root>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <Text asChild className="font-semibold" size="md">
              <label htmlFor="confirmPassword">Confirme sua senha</label>
            </Text>

            {errors.confirmPassword && (
              <Text
                className="text-gray-200 whitespace-normal text-right"
                size="md"
              >
                {errors.confirmPassword?.message}
              </Text>
            )}
          </div>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="confirmPassword"
              aria-invalid={errors.confirmPassword ? "true" : "false"}
              register={() =>
                register("confirmPassword", {
                  required: "Repita sua senha",
                  validate: {
                    isSamePassword: (value) =>
                      value === getValues("password") || "Senhas não conferem",
                  },
                })
              }
              placeholder="**********"
            />
          </TextInput.Root>
        </div>

        <label htmlFor="acceptTOS" className="mt-4">
          <CheckBox.Root>
            <CheckBox.Input
              id="acceptTOS"
              aria-invalid={errors.acceptedTOS ? "true" : "false"}
              onCheckedChange={(checked) =>
                setValue("acceptedTOS", Boolean(checked))
              }
              register={() =>
                register("acceptedTOS", {
                  validate: (value) => Boolean(value),
                })
              }
            />
            <CheckBox.Text>Concordo com os termos de uso</CheckBox.Text>
          </CheckBox.Root>

          {errors.acceptedTOS && (
            <Text
              aria-invalid={errors.acceptedTOS ? "true" : "false"}
              className="text-gray-200 mt-3 block"
              size="md"
            >
              Você deve concordar com os termos de uso
            </Text>
          )}
        </label>

        <Button className="mt-8" type="submit">
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
