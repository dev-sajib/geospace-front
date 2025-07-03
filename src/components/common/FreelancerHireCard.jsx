export const FreelancerHireCard = ({
  name,
  role,
  verifiedExpert,
  image,
  hourlyRate = 50,
  rating = 5,
  onMessage,
  onHire,
}) => {
  return (
    <div
      className="bg-white rounded-[20px] shadow-[2px_5px_20px_0px_rgba(0,0,0,0.08)] hover:shadow-[2px_8px_40px_0px_rgba(0,0,0,0.15)] transition-shadow duration-300 flex flex-col"
      style={{
        width: "335px",
        height: "490px",
        minWidth: "290px",
        maxWidth: "384px",
      }}
    >
      <div
        className="w-full overflow-hidden flex justify-center items-center rounded-t-[20px]"
        style={{
          height: "271px",
        }}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top rounded-t-[20px]"
        />
      </div>

      <div
        className="flex flex-col justify-between flex-grow"
        style={{
          padding: "24px",
          height: "219px",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          gap: "20px",
        }}
      >
        <div>
          <div className="text-lg font-semibold text-gray-900 mb-1">{name}</div>
          <div className="text-sm text-gray-700 mb-1">{role}</div>
          <div className="flex items-center">
            <img
              src="/images/image 6.svg"
              alt="Verified"
              className="mr-2 w-4 h-4"
            />
            <div className="text-[13px] text-green-600 font-medium">
              {verifiedExpert}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div
            className="flex items-baseline leading-none"
            style={{ fontFamily: "Poppins" }}
          >
            <span className="text-[18px] font-semibold text-gray-900">
              {hourlyRate} USD
            </span>
            <span className="g-16 font-normal text-gray-500 ml-1">
              Hourly
            </span>
          </div>

          <div className="flex items-center">
            {Array.from({ length: rating }).map((_, i) => (
              <img
                key={i}
                src="/images/Star.png"
                alt="star"
                className="w-4 h-4 ml-1"
              />
            ))}
          </div>
        </div>

        <div className="flex justify-between gap-2">
          <button
            onClick={onMessage}
            className="flex-1 py-2 px-4 text-sm font-semibold text-emerald-600 border border-emerald-600 rounded-lg hover:bg-emerald-50 transition-all"
          >
            Message
          </button>
          <button
            onClick={onHire}
            className="flex-1 py-2 px-4 text-sm font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-all"
          >
            Hire
          </button>
        </div>
      </div>
    </div>
  );
};
