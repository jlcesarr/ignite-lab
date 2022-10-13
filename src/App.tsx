import { Button } from "./components/Button"
import "./styles/global.css"
import { Logo } from './Logo'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import {Envelope, Lock} from "phosphor-react"
import { CheckBox } from "./components/Checkbox"
import { Link } from "./components/Link"


function App() {
  return (
    <>
      <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
        <header className="flex flex-col items-center">
          <Logo />
          <Heading size="lg" className="mt-4">Ignite Lab</Heading>
          <Text size="lg" className="text-gray-400 mt-1">Faça login e comece a usar</Text>
        </header>

        <form className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4">
            <label htmlFor="email" className="flex flex-col gap-3">
              <Text className="font-semibold" size="md">Endereço de e-mail</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <Envelope />
                </TextInput.Icon>
                <TextInput.Input  type="email" id="email" placeholder="johndoe@example.com"  autoComplete="off"/>                 
              </TextInput.Root>
            </label>

            <label htmlFor="password" className="flex flex-col gap-3">
              <Text className="font-semibold" size="md">Sua senha</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <Lock />
                </TextInput.Icon>
                <TextInput.Input type="password" id="email" placeholder="**********" />                 
              </TextInput.Root>
            </label>

            <label htmlFor="remember" className="mt-4">
              <CheckBox.Root>
                <CheckBox.Input id="remember" />
                <CheckBox.Text>Lembrar de mim por 30 dias</CheckBox.Text>
              </CheckBox.Root>
            </label>

            <Button className="mt-8" type="submit">Entrar na plataforma</Button>
        </form>

        <footer className="flex flex-col items-center gap-4 mt-8">
            <Link href="#">Esqueceu sua senha?</Link>
            <Link href="#">Não possui conta? Crie uma agora!</Link>
        </footer>
      </div>
    </>
  )
}

export { App }
