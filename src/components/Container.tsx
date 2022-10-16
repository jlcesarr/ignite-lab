import { ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      {children}
    </div>
  );
}

export { Container };
