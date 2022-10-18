import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { ReactNode } from "react";
import clsx from "clsx";

export interface LinkProps extends RouterLinkProps {
  children: ReactNode;
  routerContext?: boolean;
}

function Link({ children, routerContext, className, ...props }: LinkProps) {
  const LinkType: any = routerContext ? RouterLink : "a";

  return (
    <LinkType
      className={clsx(
        "text-gray-400 text-xs underline hover:cursor-pointer hover:text-gray-200 transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </LinkType>
  );
}

export { Link };
