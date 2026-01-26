import clsx from "clsx";

const colSizeMap: Record<number, string> = {
  1: "w-1/12",
  2: "w-2/12",
  3: "w-3/12",
  4: "w-4/12",
  5: "w-5/12",
  6: "w-6/12",
  7: "w-7/12",
  8: "w-8/12",
  9: "w-9/12",
  10: "w-10/12",
  11: "w-11/12",
  12: "flex-1 w-full",
};

export const colStyles = (xs?: number, sm?: number, md?: number, lg?: number, xl?: number, xxl?: number) =>
  clsx(
    "flex-auto",
    xs && colSizeMap[xs],
    sm && `sm:${colSizeMap[sm]}`,
    md && `md:${colSizeMap[md]}`,
    lg && `lg:${colSizeMap[lg]}`,
    xl && `xl:${colSizeMap[xl]}`,
    xxl && `2xl:${colSizeMap[xxl]}`,
  );
