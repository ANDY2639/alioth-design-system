import { ChangeEvent, FormEvent, useCallback } from "react";
import { FormikErrors, FormikTouched, useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

export type UseFormReturn<T> = {
  values: T;
  errors: FormikErrors<T>;
  touched: FormikTouched<T>;
  isValid: boolean;
  isSubmitting: boolean;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTextArea: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeField: (name: string, value: unknown) => void;
  resetForm: () => void;
  setValues: (values: T) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  submitForm: () => void;
  clearError: (name: string | string[]) => void;
  dirty: boolean;
};

const useForm = <T extends Record<string, unknown>>(config: {
  initialValues: T;
  onSubmit: (values: T) => void | Promise<void>;
  validationSchema?: z.ZodSchema<T>;
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
  clearAlert?: () => void;
}): UseFormReturn<T> => {
  const formikValidationSchema = config.validationSchema ? toFormikValidationSchema(config.validationSchema) : undefined;

  const {
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
    setErrors,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm,
    setValues,
    submitForm,
    dirty,
  } = useFormik<T>({
    onSubmit: config.onSubmit,
    initialValues: config.initialValues,
    validateOnBlur: config.validateOnBlur,
    validateOnChange: config.validateOnChange,
    validationSchema: formikValidationSchema,
  });

  const clearError = useCallback(
    (data: string | string[]) => {
      if (typeof data === "string") {
        const updatedErrors = { ...errors };
        delete updatedErrors[data as keyof T];
        setErrors(updatedErrors);
        if (config.clearAlert) {
          config.clearAlert();
        }
      } else {
        const updatedErrors = { ...errors };
        data.forEach(name => {
          delete updatedErrors[name as keyof T];
        });
        setErrors(updatedErrors);
        if (config.clearAlert) {
          config.clearAlert();
        }
      }
    },
    [errors, setErrors, config],
  );

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.type === "checkbox") {
        setFieldValue(e.target.name, e.target.checked);
      } else {
        handleChange(e);
      }
      clearError(e.target.name);
    },
    [handleChange, setFieldValue, clearError],
  );

  const onChangeTextArea = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      handleChange(e);
      clearError(e.target.name);
    },
    [handleChange, clearError],
  );

  const onChangeField = useCallback(
    (name: string, value: unknown) => {
      setFieldValue(name, value);
      clearError(name);
    },
    [setFieldValue, clearError],
  );

  return {
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
    onChangeField,
    onChangeTextArea,
    onChangeInput,
    resetForm,
    setValues,
    onSubmit: handleSubmit,
    submitForm,
    clearError,
    dirty,
  };
};

export default useForm;
