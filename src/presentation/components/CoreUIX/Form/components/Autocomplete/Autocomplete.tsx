import { AutocompleteUI, AutocompleteItem, AutocompleteProps } from "./AutocompleteConfig";

export const Autocomplete = ({ ref, name, ...rest }: AutocompleteProps) => {
  return (
    <AutocompleteUI ref={ref} name={name} data-id={name} {...rest}>
      {option => <AutocompleteItem key={option.key}>{option.label}</AutocompleteItem>}
    </AutocompleteUI>
  );
};

export default Autocomplete;
