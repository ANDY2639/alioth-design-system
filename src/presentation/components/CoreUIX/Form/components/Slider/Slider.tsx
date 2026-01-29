import { SliderUI, SliderProps } from "./SliderConfig";

export const Slider = ({ ref, name, ...rest }: SliderProps) => {
  return <SliderUI ref={ref} data-id={name} {...rest} />;
};

export default Slider;
