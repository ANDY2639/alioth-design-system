import { Autocomplete as AutocompleteUI, AutocompleteItem, AutocompleteProps as AutocompleteUIProps } from "@heroui/react";

interface AutocompleteOptionValue {
  key: string | null;
  label: string;
}

interface AutocompleteProps extends Omit<AutocompleteUIProps<AutocompleteOptionValue>, "children"> {
  name: string;
}

export { AutocompleteUI, AutocompleteItem, type AutocompleteProps, type AutocompleteOptionValue };
