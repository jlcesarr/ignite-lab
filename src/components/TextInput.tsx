import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode, useState, createContext, useContext } from 'react';
import { Slot } from '@radix-ui/react-slot';



interface TextInputContextProps{
    onFilled?: any;
}

const TextInputContext = createContext({} as TextInputContextProps);


export interface TextInputRootProps{
    children?: ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
    const [filled, setFilled] = useState(false)
    return(
        <TextInputContext.Provider value={{ onFilled: setFilled }}>
            <div className={clsx("flex px-4 py-3 gap-3 w-full h-12 bg-gray-800 items-center rounded focus-within:ring-2 ring-cyan-300", {
              'ring-gray-100': filled === true
            })}>
                {children}
            </div>
        </TextInputContext.Provider>
    )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps{
    children: ReactNode,
}

function TextInputIcon({children}: TextInputIconProps) {
    return(
        <Slot className="w-6 h-6 text-gray-400">
            {children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{
}

function TextInputInput(props: TextInputInputProps){
    const { onFilled } = useContext(TextInputContext)
    return(
        <input className="bg-transparent flex-1 text-xs text-gray-100 placeholder:text-gray-400 outline-none" onChange={ev => onFilled(() => !!ev.target.value)}  {...props} />
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}