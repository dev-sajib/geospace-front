import { useState } from "react";
import VideoLightbox from "../../../components/common/VideoLightbox";

const Testimonial = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // You can change this URL to your actual testimonial video
  const testimonialVideoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  const handlePlayClick = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden min-h-[500px] lg:min-h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/satisfied1.jpg')",
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-start h-full min-h-[400px] lg:min-h-[500px]">
            <div className="text-left max-w-2xl lg:max-w-3xl">
              <div className="mb-6 sm:mb-8">
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 text-white mb-4 sm:mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-8 sm:mb-10">
                  We are really satisfied about this platform
                </blockquote>

                <div className="mb-4 sm:mb-4">
                  <button
                    className="group relative"
                    onClick={handlePlayClick}
                    aria-label="Play testimonial video"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 transform hover:scale-110 shadow-2xl">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-800 ml-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                </div>

                <div className="text-white">
                  <p className="text-lg sm:text-xl font-medium">
                    The Walt Disney Company
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoLightbox
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        videoUrl={testimonialVideoUrl}
        title="Customer Testimonial - The Walt Disney Company"
      />
    </>
  );
};

export default Testimonial;
