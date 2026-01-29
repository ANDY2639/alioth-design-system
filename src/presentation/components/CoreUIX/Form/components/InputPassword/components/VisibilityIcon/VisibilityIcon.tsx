import EyeFilledIcon from "./EyeFilledIcon";
import EyeSlashFilledIcon from "./EyeSlashFilledIcon";

type VisibilityIconProps = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
};

const VisibilityIcon = ({ isVisible, setIsVisible }: VisibilityIconProps) => {
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <button type="button" className="flex h-full items-center" aria-label="toggle password visibility" onClick={toggleVisibility}>
      {isVisible ? <EyeSlashFilledIcon size={20} /> : <EyeFilledIcon size={20} />}
    </button>
  );
};

export default VisibilityIcon;
