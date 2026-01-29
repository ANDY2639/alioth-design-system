import { Textarea as TextareaUI, type TextAreaProps as TextAreaUIProps } from "@heroui/react";

interface TextAreaProps extends TextAreaUIProps {
  name: string;
}

export { TextareaUI, type TextAreaProps };
