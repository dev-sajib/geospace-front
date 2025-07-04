const Stat_Card = ({ title, value, icon, gradient, borderColor }) => {
  return (
    <div
      className="p-8 rounded-2xl border flex flex-col justify-between min-h-[170px]"
      style={{ background: gradient, borderColor: borderColor }}
    >
      <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center">
        <img src={icon} alt={title} className="w-8 h-8" />
      </div>
      <div>
        <p className="text-3xl font-semibold text-gray-800">{value}</p>
        <p className="text-base text-gray-600 mt-1">{title}</p>
      </div>
    </div>
  );
};

export default Stat_Card;
