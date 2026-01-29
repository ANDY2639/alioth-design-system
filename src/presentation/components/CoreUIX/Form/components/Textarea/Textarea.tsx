import { TextareaUI, TextAreaProps } from "./TextareaConfig";

export const Textarea = ({ ref, name, ...rest }: TextAreaProps) => {
  return <TextareaUI ref={ref} name={name} data-id={name} {...rest} />;
};

export default Textarea;
