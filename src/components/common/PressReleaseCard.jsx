const PressReleaseCard = ({
  category = "FOR IMMEDIATE RELEASE",
  title,
  date,
  location,
  content,
  keyFeatures = [],
  aboutSection,
  mediaContact,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
      <div className="mb-4 sm:mb-6">
        <span className="inline-block bg-gray-100 text-gray-800 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
        {title}
      </h1>

      {(date || location) && (
        <div className="flex items-center text-emerald-600 font-medium mb-4 sm:mb-6">
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-xs sm:text-sm lg:text-base">
            {location && date ? `${location} - ${date}` : location || date}
          </span>
        </div>
      )}

      {content && (
        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-700 mb-6 sm:mb-8">
          {content.split("\n").map((paragraph, index) => (
            <p
              key={index}
              className="mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {keyFeatures.length > 0 && (
        <div className="mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
            Key Features of the Platform:
          </h3>
          <ul className="space-y-2 sm:space-y-3">
            {keyFeatures.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-[#0B8468] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {aboutSection && (
        <div className="mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
            About GeoEspace Corporation
          </h3>
          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-700">
            {aboutSection.split("\n").map((paragraph, index) => (
              <p
                key={index}
                className="mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}

      {mediaContact && (
        <div className="border-t border-gray-200 pt-4 sm:pt-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
            Media Contact:
          </h3>
          <div className="text-gray-700">
            <p className="font-semibold text-sm sm:text-base">
              {mediaContact.name}
            </p>
            <p className="text-gray-600 text-xs sm:text-sm">
              {mediaContact.title}
            </p>
            <p className="mt-2 font-semibold text-sm sm:text-base">
              {mediaContact.company}
            </p>

            <div className="mt-3 sm:mt-4 space-y-2">
              {mediaContact.email && (
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-emerald-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a
                    href={`mailto:${mediaContact.email}`}
                    className="text-emerald-600 hover:underline text-xs sm:text-sm break-all"
                  >
                    {mediaContact.email}
                  </a>
                </div>
              )}

              {mediaContact.phone && (
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-emerald-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-xs sm:text-sm">
                    {mediaContact.phone}
                  </span>
                </div>
              )}

              {mediaContact.website && (
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-emerald-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <a
                    href={mediaContact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline text-xs sm:text-sm break-all"
                  >
                    {mediaContact.website}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PressReleaseCard;
