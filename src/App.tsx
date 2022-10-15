import "./styles/global.css";
import { SignIn } from "./pages/SignIn";
import { Alert } from "./components/Alert";

function App() {
  return (
    <>
      <Alert />

      <SignIn />
    </>
  );
}

export { App };
