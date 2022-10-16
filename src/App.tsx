import "./styles/global.css";
import { SignIn } from "./pages/SignIn";
import { Alert } from "./components/Alert";
import { Header } from "./components/Header";
import { FormsFooter } from "./components/FormsFooter";
import { Container } from "./components/Container";
function App() {
  return (
    <Container>
      <Alert />
      <Header />
      <SignIn />
      <FormsFooter />
    </Container>
  );
}

export { App };
