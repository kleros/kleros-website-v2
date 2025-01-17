import React from "react";

interface IColorCard {
  name: string;
  hexColor: string;
}

const ColorCard: React.FC<IColorCard> = ({ name, hexColor }) => {
  return (
    <div
      className="flex h-[200px] w-[380px] flex-col items-center justify-center gap-3 rounded-lg shadow-md"
      style={{ backgroundColor: hexColor }}
    >
      <span className="text-lg text-white">{name}</span>
      <span className="text-white">{hexColor}</span>
    </div>
  );
};

export default ColorCard;
