import { ReactNode, useCallback, useEffect, useState } from "react";
import { Alert } from "@heroui/react";

export type UseFormErrorProps = {
  errorFields: string[];
  formAlert: ReactNode;
  showAlert: (content: ReactNode, errorFields: string[], disableAutoClear?: boolean) => void;
  clearAlert: () => void;
};

const useFormError = () => {
  const [alertContent, setAlertContent] = useState<ReactNode | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [errorFields, setErrorFields] = useState<string[]>([]);
  const showAlert = useCallback(
    (content: ReactNode, errorFields: string[], disableAutoClear?: boolean) => {
      setAlertContent(content);
      setErrorFields(errorFields);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      if (!disableAutoClear) {
        const newTimeoutId = setTimeout(() => {
          setAlertContent(null);
          setErrorFields([]);
        }, 8000);

        setTimeoutId(newTimeoutId);
      }
    },
    [timeoutId],
  );

  const clearAlert = useCallback(() => {
    setAlertContent(null);
    setErrorFields([]);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }, [timeoutId]);

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  const FormAlert: React.FC<{
    color?: "danger" | "success" | "primary" | "secondary" | "warning";
  }> = ({ color = "danger" }) => {
    return alertContent ? <Alert hideIconWrapper color={color} description={alertContent} /> : null;
  };

  return {
    clearAlert,
    showAlert,
    errorFields,
    FormAlert,
  };
};

export default useFormError;
