import { AnchorHTMLAttributes, ReactNode } from "react"

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>{
    children: ReactNode
}

function Link({children, ...props}: LinkProps){
    return(
        <a className="text-gray-400 text-xs underline hover:cursor-pointer hover:text-gray-200 transition-colors" {...props}>
            {children}
        </a>
    )
}


export { Link }