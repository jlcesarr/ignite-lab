import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { ReactNode, ButtonHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface CheckboxRootProps {
  children: ReactNode;
}
function CheckboxRoot({ children }: CheckboxRootProps) {
  return <div className="flex gap-2 items-center">{children}</div>;
}

CheckboxRoot.displayName = "Checkbox.Root";

export interface CheckboxInputProps extends CheckboxPrimitive.CheckboxProps {
  register?: () => UseFormRegisterReturn<any>;
}

function CheckboxInput({ register, ...props }: CheckboxInputProps) {
  return (
    <>
      <CheckboxPrimitive.Root
        {...props}
        className="items-center w-6 h-6 p-[2px] bg-gray-800 rounded"
        {...(register && { ...register() })}
      >
        <CheckboxPrimitive.Indicator asChild>
          <Check weight="bold" className="h-5 w-5 text-cyan-500" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </>
  );
}

CheckboxInput.displayName = "Checkbox.Input";

export interface CheckboxTextProps {
  children?: string;
}

function CheckboxText({ children }: CheckboxTextProps) {
  return <span className="text-xs text-gray-200">{children}</span>;
}

CheckboxText.displayName = "Checkbox.Text";

export const CheckBox = {
  Root: CheckboxRoot,
  Input: CheckboxInput,
  Text: CheckboxText,
};
