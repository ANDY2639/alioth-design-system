import { InputUI, InputProps } from "./InputConfig";

export const Input = ({ ref, name, helpText, ...rest }: InputProps) => {
  return (
    <>
      <InputUI ref={ref} name={name} data-id={name} {...rest} />

      {helpText && (
        <button type="button" className="w-full p-1 text-right text-xs font-regular text-primary underline" onClick={helpText.onClick}>
          {helpText.content}
        </button>
      )}
    </>
  );
};

export default Input;
