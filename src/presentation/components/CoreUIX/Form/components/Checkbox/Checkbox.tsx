import { CheckboxUI, CheckboxGroupUI, type CheckboxProps, type CheckboxGroupProps } from "./CheckboxConfig";

export const Checkbox = ({ ref, name, ...rest }: CheckboxProps) => {
  return <CheckboxUI ref={ref} data-id={name} {...rest} />;
};

export const CheckboxGroup = ({ ref, name, ...rest }: CheckboxGroupProps) => {
  return <CheckboxGroupUI ref={ref} data-id={name} {...rest} />;
};
