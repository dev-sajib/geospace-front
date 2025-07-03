import { useState, useEffect } from "react";
import VideoLightbox from "../../../components/common/VideoLightbox.jsx";


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
                <svg width="53" height="33" viewBox="0 0 53 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.944 32.756H0L13.824 0.5H26.24L18.944 32.756ZM44.8 32.756H25.856L39.68 0.5H52.096L44.8 32.756Z" fill="white"/>
                </svg>

                <blockquote className="g-h2 pt-[24px] text-white leading-relaxed mb-8 sm:mb-10">
                  We are really satisfied about this platform
                </blockquote>

                <div className="mb-4 sm:mb-4">
                  <button 
                    className="group relative"
                    onClick={handlePlayClick}
                    aria-label="Play testimonial video"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12   flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 transform hover:scale-110 shadow-2xl">
                      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_96_3473)">
                          <path d="M24 0.5C10.7453 0.5 0 11.2452 0 24.5C0 37.7548 10.7453 48.5 24 48.5C37.2547 48.5 48 37.7548 48 24.5C48 11.2452 37.2547 0.5 24 0.5ZM32.295 25.7722L20.295 33.2722C20.0522 33.4238 19.7761 33.5 19.5 33.5C19.2499 33.5 18.9994 33.4378 18.7727 33.3118C18.2959 33.0474 18 32.5456 18 32V17C18 16.4544 18.2959 15.9526 18.7727 15.6882C19.2495 15.4224 19.8325 15.4385 20.295 15.7278L32.295 23.2278C32.7334 23.5025 33 23.983 33 24.5C33 25.017 32.7334 25.4976 32.295 25.7722Z" fill="white"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_96_3473">
                            <rect width="48" height="48" fill="white" transform="translate(0 0.5)"/>
                          </clipPath>
                        </defs>
                      </svg>

                    </div>
                  </button>
                </div>

                <div className="text-white">
                  <p className="g-title font-medium">
                    The Walt Disney Company
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Lightbox */}
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
