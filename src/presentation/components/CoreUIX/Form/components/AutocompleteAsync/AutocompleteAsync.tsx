import { useEffect, useState } from "react";
import { AutocompleteItem, AutocompleteAsyncProps, AutocompleteUI } from "./AutocompleteAsyncConfig";

export const AutocompleteAsync = <T,>({ dependsOn, fetchOptions, getKey, getLabel, onValueChange, ...rest }: AutocompleteAsyncProps<T>) => {
  const [options, setOptions] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!dependsOn) {
      setOptions([]);
      return;
    }

    const loadOptions = async () => {
      setIsLoading(true);
      try {
        const data = await fetchOptions(dependsOn);
        setOptions(data);
      } catch (error) {
        console.error("Error loading options:", error);
        setOptions([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadOptions();
  }, [dependsOn, fetchOptions]);

  return (
    <AutocompleteUI isDisabled={!dependsOn} isLoading={isLoading} onSelectionChange={key => onValueChange?.(key as string | null)} {...rest}>
      {options.map(option => (
        <AutocompleteItem key={getKey(option)} textValue={getLabel(option)}>
          {getLabel(option)}
        </AutocompleteItem>
      ))}
    </AutocompleteUI>
  );
};

export default AutocompleteAsync;
