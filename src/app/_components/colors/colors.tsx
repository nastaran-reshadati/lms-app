"use client";
import { colord } from "colord";
import { tailwindColors } from "../../../../tailwind.config";

const getTextColor = (backgroundColor: string): string =>
  colord(backgroundColor).isDark() ? "#dddddd" : "#dddddd";

export const Colors: React.FC = () => (
  <div className="flex flex-wrap justify-center">
    {Object.entries(tailwindColors).map(([name, color]) => (
      <ColorBox key={name} name={name} color={color}></ColorBox>
    ))}
  </div>
);

const ColorBox: React.FC<{ name: string; color: string }> = ({
  name,
  color,
}) => (
  <div
    className="w-96 h-60 flex flex-col items-center justify-center text-center uppercase"
    style={{ backgroundColor: color, color: getTextColor(color) }}
    dir="ltr"
  >
    <span>{name}</span>
    <span>{color}</span>
  </div>
);
