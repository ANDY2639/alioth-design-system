import { Button as ButtonUI, ButtonProps as ButtonUIProps } from "@heroui/react";

export interface ButtonProps extends ButtonUIProps {
  minWidth?: string;
}

export const Button = ({ ref, children, ...rest }: ButtonProps) => {
  return (
    <ButtonUI ref={ref} {...rest}>
      {children}
    </ButtonUI>
  );
};

export default Button;
