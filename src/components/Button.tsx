import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';


export interface ButtonProps{
    children: string | ReactNode;
    asChild?: boolean;
    type?: string;
}

function Button({children, asChild, type}: ButtonProps){
    const Comp = asChild ? Slot : 'button'

    return (
        <Comp className={
            clsx("bg-cyan-500 text-black font-semibold text-sm px-4 py-3 rounded w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white"
        )}>
            {children}
        </Comp>
    )
}

export { Button }