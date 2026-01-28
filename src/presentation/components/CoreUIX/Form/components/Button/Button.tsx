import { ButtonUI, ButtonProps } from "./ButtonConfig";

export const Button = ({ ref, children, ...rest }: ButtonProps) => {
  return (
    <ButtonUI ref={ref} {...rest}>
      {children}
    </ButtonUI>
  );
};

export default Button;
