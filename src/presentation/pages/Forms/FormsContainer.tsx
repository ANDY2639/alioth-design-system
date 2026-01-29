"use client";

import { useState } from "react";
import Forms from "./Forms";
import { demoFormSchema, FormValues, initialValues } from "./FormsConfig";

const FormsContainer = () => {
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = (values: FormValues) => {
    try {
      setSubmitError(null);
      setSubmittedData(values);
      console.log("Form submitted with values:", values);
    } catch (error) {
      setSubmitError("An error occurred while submitting the form");
      console.error(error);
    }
  };

  return (
    <Forms
      initialValues={initialValues}
      submittedData={submittedData}
      submitError={submitError}
      validationSchema={demoFormSchema}
      onSubmit={handleSubmit}
    />
  );
};

export default FormsContainer;
