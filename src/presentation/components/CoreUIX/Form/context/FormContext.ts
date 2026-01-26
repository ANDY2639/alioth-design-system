import { createContext } from "react";

export type FormContextValues = {
  values: Record<string, unknown>;
  errors: Record<string, string | undefined>;
  touched: Record<string, boolean>;
  isValid: boolean;
  isSubmit: boolean;
  apiFieldErrors: string[];
  isDisabledSubmit: boolean;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextArea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeField: (name: string, value: unknown) => void;
  setPartialValues: (values: Record<string, unknown>) => void;
  setIsDisabledSubmit: (isDisabledSubmit: boolean) => void;
  clearError: (name: string | string[]) => void;
};

const FormContext = createContext<FormContextValues>({
  values: {},
  errors: {},
  touched: {},
  isValid: false,
  isSubmit: false,
  apiFieldErrors: [],
  isDisabledSubmit: false,
  onChangeField: () => {},
  onChangeInput: () => {},
  onChangeTextArea: () => {},
  setPartialValues: () => {},
  setIsDisabledSubmit: () => {},
  clearError: () => {},
});

export default FormContext;
