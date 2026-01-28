import { Input as InputUI, InputProps as InputUIProps } from "@heroui/react";

interface HelpText {
  onClick?: VoidFunction;
  content: React.ReactNode;
}

export interface InputProps extends InputUIProps {
  name: string;
  helpText?: HelpText;
}

export const Input = ({ ref, name, helpText, ...rest }: InputProps) => {
  return (
    <>
      <InputUI ref={ref} name={name} data-id={name} {...rest} />

      {helpText && (
        <button type="button" className="w-full p-1 text-right text-xs font-regular text-primary underline" onClick={helpText.onClick}>
          {helpText.content}
        </button>
      )}
    </>
  );
};

export default Input;
