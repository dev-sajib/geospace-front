export const TeamMemberCard = ({
  image,
  name,
  role,
  description,
  icons = [],
}) => {
  return (
    <div className="flex w-full max-w-sm h-[120px] rounded-xl overflow-hidden shadow-md bg-white">
      <div className="w-[100px] h-full">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 p-3 flex flex-col justify-between">
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">{name}</h4>
          <p className="text-xs text-emerald-600 font-medium">{role}</p>
          <p className="text-xs text-gray-500 mt-1">{description}</p>
        </div>
        <div className="flex gap-2 mt-1">
          {icons.map((icon, index) => (
            <img key={index} src={icon} className="w-4 h-4" />
          ))}
        </div>
      </div>
    </div>
  );
};
