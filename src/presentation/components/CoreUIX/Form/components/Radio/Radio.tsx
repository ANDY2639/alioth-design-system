import { RadioUI, RadioGroupUI, type RadioProps, type RadioGroupProps } from "./RadioConfig";

export const Radio = ({ ref, name, ...rest }: RadioProps) => {
  return <RadioUI ref={ref} data-id={name} {...rest} />;
};

export const RadioGroup = ({ ref, name, ...rest }: RadioGroupProps) => {
  return <RadioGroupUI ref={ref} data-id={name} {...rest} />;
};
