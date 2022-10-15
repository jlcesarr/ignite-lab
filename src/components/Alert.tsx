import { ToastContainer, ToastContainerProps } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";

interface AlertProps extends ToastContainerProps {}

type Alert = (message: string) => any;

export const successAlert: Alert = (message) => toast.success(message);
export const errorAlert: Alert = (message) => toast.error(message);

function Alert(props: AlertProps) {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      {...props}
    />
  );
}

export { Alert };
