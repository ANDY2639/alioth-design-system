import { InputOTPUI, InputOTPProps } from "./InputOTPConfig";

export const InputOTP = ({ ref, name, ...rest }: InputOTPProps) => {
  return <InputOTPUI ref={ref} name={name} data-id={name} {...rest} />;
};

export default InputOTP;
