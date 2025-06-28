import React, { useState } from "react";

export const TabComponent = ({
  tabs,
  children,
  defaultTabClassName = "",
  inactiveTabClassName = "",
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  const defaultButtonStyle = `
    flex items-center bg-white space-x-1 sm:space-x-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0
  `;

  const buttonClassName = defaultTabClassName ?? defaultButtonStyle;
  const activeButtonStyle = "bg-[#0B8468] text-white shadow-md";
  const inactiveButtonStyle =
    inactiveTabClassName ?? "bg-gray-100 text-gray-600 hover:bg-gray-200";

  return (
    <div className="w-full">
      <div className="w-[1400px] h-[80px] justify-between border-t border-b border-gray-100 pt-4 pb-4 flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide mx-auto max-w-full ">
        {tabs.map((tab) => (
          <>
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${buttonClassName}
              ${activeTab === tab.id ? activeButtonStyle : inactiveButtonStyle}
            `}
            >
              {tab.icon && (
                <img
                  src={tab.icon.src}
                  alt={tab.icon.alt}
                  className={`${
                    activeTab === tab.id ? "brightness-0 invert" : "opacity-60"
                  }`}
                />
              )}
              <span>{tab.name}</span>
            </button>
            <span className="w-px h-6 bg-gray-200 self-center last:hidden"></span>
          </>
        ))}
      </div>

      <div className="mt-4 relative">
        {React.Children.map(children, (child) => {
          const tabId = child.props["tab-id"];
          const isActive = tabId === activeTab;
          return (
            <div
              key={tabId}
              className={`
                transition-all duration-300 ease-in-out
                ${
                  isActive
                    ? "opacity-100 translate-y-0 relative"
                    : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                }
              `}
            >
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
};
