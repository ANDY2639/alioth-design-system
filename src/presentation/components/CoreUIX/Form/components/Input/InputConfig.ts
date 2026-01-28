import { Input as InputUI, InputProps as InputUIProps } from "@heroui/react";

interface InputHelpText {
  onClick?: VoidFunction;
  content: React.ReactNode;
}

interface InputProps extends InputUIProps {
  name: string;
  helpText?: InputHelpText;
}

export { InputUI, type InputProps };
