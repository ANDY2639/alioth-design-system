import { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

import { RowStyles } from "./styles";

type Props = {
  children: ReactNode;
  gap?: "sm" | "md" | "lg" | "xl" | "none";
} & HTMLAttributes<HTMLDivElement>;

const Row = ({ children, gap = "md", className, ...rest }: Props) => {
  return (
    <div className={clsx(RowStyles(gap), className)} {...rest}>
      {children}
    </div>
  );
};

export default Row;
