import "./styles/global.css";
import { SignIn } from "./pages/SignIn";
import { Alert } from "./components/Alert";
import { Header } from "./components/Header";
import { FormsFooter } from "./components/FormsFooter";
import { Container } from "./components/Container";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Alert />
        <Header />
        <Routes />
      </Container>
    </BrowserRouter>
  );
}

export { App };
