import { useContext } from "react";
import FormContext, { FormContextValues } from "@/presentation/components/CoreUIX/Form/context/FormContext";

type TypedFormContextValues<T extends Record<string, unknown>> = Omit<FormContextValues, "values" | "setPartialValues"> & {
  values: T;
  setPartialValues: (values: Partial<T>) => void;
};

function useFormContext<T extends Record<string, unknown> = Record<string, unknown>>(): TypedFormContextValues<T> {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }

  return context as TypedFormContextValues<T>;
}

export default useFormContext;
