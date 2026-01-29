import { SwitchUI, SwitchProps } from "./SwitchConfig";

export const Switch = ({ ref, name, ...rest }: SwitchProps) => {
  return <SwitchUI ref={ref} data-id={name} {...rest} />;
};

export default Switch;
