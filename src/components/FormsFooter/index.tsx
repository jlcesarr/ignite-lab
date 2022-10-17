import { ReactNode } from "react";
import { Link } from "../Link";

export interface FormsFooterProps {
  children?: ReactNode;
}

function FormsFooter({ children }: FormsFooterProps) {
  return (
    <footer className="flex flex-col items-center gap-4 mt-8">
      {children}
    </footer>
  );
}

export { FormsFooter };
