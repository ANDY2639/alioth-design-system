import { Select as SelectUI, SelectProps as SelectUIProps, SelectItem } from "@heroui/react";

interface SelectOptionValue {
  key: string | null;
  label: string;
}

type SelectProps = Omit<SelectUIProps<SelectOptionValue>, "children">;

export { SelectUI, SelectItem, type SelectProps, type SelectOptionValue };
