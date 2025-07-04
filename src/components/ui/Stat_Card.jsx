import React from "react";

const Stat_Card = ({ title, value, icon, gradient, borderColor }) => {
  return (
    <div
      className="p-6 rounded-2xl border flex flex-col justify-between min-h-[140px]"
      style={{ background: gradient, borderColor: borderColor }}
    >
      <div className="flex justify-between items-start">
        <div className="w-14 h-14 bg-white/60 rounded-full flex items-center justify-center">
          <img src={icon} alt={title} className="w-7 h-7" />
        </div>
        <p className="text-4xl font-semibold text-gray-800">{value}</p>
      </div>
      <p className="text-base text-gray-700 mt-2">{title}</p>
    </div>
  );
};

export default Stat_Card;
