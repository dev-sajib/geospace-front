import { useEffect, useRef } from "react";

export const LogoCarousel = () => {
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);

  const trustedBrands = [
    {
      name: "CNESST",
      logo: "/svg/CNESST.svg",
    },
    {
      name: "AEMQ",
      logo: "/svg/AEMQ.svg",
    },
    {
      name: "OGQ",
      logo: "/svg/OGQ.svg",
    },
    {
      name: "Wallbridge Mining",
      logo: "/svg/Wallbridge Mining.svg",
    },
    {
      name: "Wallbridge Mining",
      logo: "/svg/Wallbridge Mining.svg",
    },
  ];

  useEffect(() => {
    const initCarousel = () => {
      const track = trackRef.current;
      const wrapper = wrapperRef.current;

      if (!track || !wrapper) return;

      // Calculate the width of one set of items
      const items = track.children;
      const itemCount = trustedBrands.length;

      if (items.length === 0) return;

      // Calculate total width of one set
      let firstSetWidth = 0;
      for (let i = 0; i < itemCount; i++) {
        if (items[i]) {
          firstSetWidth += items[i].offsetWidth;
        }
      }

      // Speed factor: LOWER number = SLOWER animation
      const speedFactor = 50; // Adjust this to control speed

      if (firstSetWidth > 0) {
        const duration = firstSetWidth / speedFactor;
        track.style.animation = `marqueeScroll ${duration}s linear infinite`;
      }
    };

    // Small delay to ensure everything is rendered
    const timer = setTimeout(initCarousel, 100);

    // Also initialize on window load to handle image loading
    window.addEventListener("load", initCarousel);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", initCarousel);
    };
  }, [trustedBrands.length]);

  // Create multiple copies for seamless scrolling
  const repeatedBrands = [];
  for (let i = 0; i < 10; i++) {
    repeatedBrands.push(...trustedBrands);
  }

  return (
    <>
      <style>{`
                @keyframes marqueeScroll {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-100%);
                    }
                }
                
                .carousel-track {
                    will-change: transform;
                }
            `}</style>

      <div
        ref={wrapperRef}
        className="trusted-brands-swiper overflow-hidden relative w-full"
      >
        <div ref={trackRef} className="carousel-track flex flex-nowrap">
          {repeatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex items-center justify-center px-10 flex-shrink-0"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-[20px] sm:h-[42px] w-auto object-contain transition-all duration-300"
                onError={(e) => {
                  // Fallback for missing images - show brand name
                  e.target.style.display = "none";
                  e.target.nextSibling?.remove(); // Remove any existing fallback
                  const fallback = document.createElement("div");
                  fallback.textContent = brand.name;
                  fallback.className = "text-gray-600 font-medium text-sm";
                  e.target.parentNode.appendChild(fallback);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
