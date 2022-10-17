import "./styles/global.css";
import { Alert } from "./components/Alert";
import { Header } from "./components/Header";
import { Container } from "./components/Container";
import { Routes } from "./Routes";

function App() {
  return (
    <Container>
      <Alert />
      <Header />
      <Routes />
    </Container>
  );
}

export { App };
