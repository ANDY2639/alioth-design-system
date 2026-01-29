import { SelectUI, SelectProps, SelectItem } from "./SelectConfig";

export const Select = ({ ref, name, ...rest }: SelectProps) => {
  return (
    <SelectUI ref={ref} name={name} data-id={name} {...rest}>
      {option => <SelectItem key={option.key}>{option.label}</SelectItem>}
    </SelectUI>
  );
};

export default Select;
