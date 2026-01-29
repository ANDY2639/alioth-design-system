import { Autocomplete as AutocompleteUI, AutocompleteItem, AutocompleteProps as AutocompleteUIProps } from "@heroui/react";

interface AutocompleteOptionValue {
  key: string | null;
  label: string;
}

interface AutocompleteAsyncProps<T> extends Omit<AutocompleteUIProps<AutocompleteOptionValue>, "children"> {
  name: string;
  dependsOn: string | null;
  getKey: (item: T) => string;
  getLabel: (item: T) => string;
  fetchOptions: (parentId: string) => Promise<T[]>;
  onValueChange?: (value: string | null) => void;
}

export { AutocompleteUI, AutocompleteItem, type AutocompleteAsyncProps, type AutocompleteOptionValue };
