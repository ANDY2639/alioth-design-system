import { ModalUI, type ModalProps } from "./ModalConfig";

export const Modal = ({ ref, ...props }: ModalProps) => {
  return <ModalUI ref={ref} {...props} />;
};

export default Modal;
