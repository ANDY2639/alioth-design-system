import { useState } from "react";
import VisibilityIcon from "./components/VisibilityIcon";
import { Input, PasswordProps } from "./InputPasswordConfig";

export const InputPassword = ({ ref, name, ...rest }: PasswordProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Input
      ref={ref}
      name={name}
      type={isVisible ? "text" : "password"}
      data-id={name}
      {...rest}
      endContent={<VisibilityIcon isVisible={isVisible} setIsVisible={setIsVisible} />}
    />
  );
};

export default InputPassword;
