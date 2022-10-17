import { Text } from "../Text";
import { Heading } from "../Heading";
import { Logo } from "../../Logo";

function Header() {
  return (
    <header className="flex flex-col items-center">
      <Logo />
      <Heading size="lg" className="mt-4">
        Ignite Lab
      </Heading>
    </header>
  );
}

export { Header };
