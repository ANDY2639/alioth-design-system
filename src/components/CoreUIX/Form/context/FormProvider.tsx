"use client";

import { ReactNode, useCallback, useEffect, useImperativeHandle, useMemo, useState } from "react";
import { z } from "zod";
import FormContext from "@/components/CoreUIX/Form/context/FormContext";
import useForm from "@/components/CoreUIX/Form/hooks/useForm";
import Row from "@/components/CoreUIX/Layout/Row";
import { Form } from "@heroui/react";

export type FormProviderMethods<T> = {
  setValues: (values: T) => void;
  getIsValid: () => boolean;
  submitForm: () => void;
  resetForm: () => void;
};

type FormProviderProps<T extends Record<string, unknown>> = {
  data?: { [key: string]: unknown };
  initialValues: T;
  children: ReactNode;
  validationSchema?: z.ZodSchema<T>;
  apiFieldErrors?: string[];
  isDisabledForm?: boolean;
  validOnChange?: boolean;
  onReset?: boolean;
  formRef?: React.RefObject<FormProviderMethods<T> | null>;
  onSubmit: (values: T) => void | Promise<void>;
  clearAlert?: () => void;
};

const FormProvider = <T extends Record<string, unknown>>({
  initialValues,
  onSubmit,
  validationSchema,
  children,
  apiFieldErrors,
  isDisabledForm,
  data,
  validOnChange,
  onReset,
  formRef,
  clearAlert,
}: FormProviderProps<T>) => {
  const [isDisabledSubmit, setIsDisabledSubmit] = useState(false);

  const {
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
    onSubmit: handleSubmit,
    onChangeInput,
    onChangeField,
    onChangeTextArea,
    resetForm,
    setValues,
    submitForm,
    clearError,
  } = useForm<T>({
    initialValues,
    onSubmit: formValues => onSubmit(formValues),
    validateOnBlur: true,
    validateOnChange: validOnChange,
    validationSchema,
    clearAlert,
  });

  // Handle external data changes
  useEffect(() => {
    if (data) {
      const key = Object.keys(data)[0];
      const value = data[key];
      onChangeField(key, value);
    }
  }, [data, onChangeField]);

  // Handle form reset
  useEffect(() => {
    if (onReset) {
      resetForm();
    }
  }, [onReset, resetForm]);

  // Expose methods via ref
  useImperativeHandle(
    formRef,
    () => ({
      resetForm,
      setValues,
      submitForm,
      getIsValid: () => isValid,
    }),
    [resetForm, setValues, submitForm, isValid],
  );

  // Function to update partial values
  const setPartialValues = useCallback(
    (partialValues: Record<string, unknown>) => {
      setValues({
        ...values,
        ...partialValues,
      } as T);
    },
    [setValues, values],
  );

  // Conditional submit handler
  const handleSubmitForm =
    isDisabledForm || isDisabledSubmit
      ? (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
        }
      : handleSubmit;

  // Memoized context value
  const contextValue = useMemo(
    () => ({
      values,
      errors: errors as Record<string, string | undefined>,
      touched: touched as Record<string, boolean>,
      isValid,
      isSubmit: isSubmitting,
      onChangeInput,
      onChangeField,
      onChangeTextArea,
      apiFieldErrors: apiFieldErrors || [],
      isDisabledSubmit,
      setIsDisabledSubmit,
      setPartialValues,
      clearError,
    }),
    [
      values,
      errors,
      touched,
      isValid,
      isSubmitting,
      onChangeInput,
      onChangeField,
      onChangeTextArea,
      apiFieldErrors,
      isDisabledSubmit,
      setPartialValues,
      clearError,
    ],
  );

  return (
    <FormContext.Provider value={contextValue}>
      <Form onSubmit={handleSubmitForm} className="w-full">
        <Row>{children}</Row>
      </Form>
    </FormContext.Provider>
  );
};

export default FormProvider;
