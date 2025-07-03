import { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";
import VideoLightbox from "../../../components/common/VideoLightbox.jsx";

// Video Lightbox Component

const VideoCard = ({
                       backgroundImage,
                       title = "Watch Now",
                       onClick,
                   }) => {
    return (
        <div
            className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-all duration-200"
            onClick={onClick}
        >
            <div
                className="w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url('${backgroundImage}')`,
                }}
            >
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.25)]  opacity-100 group-hover:bg-[#0b846870] transition-all duration-300 flex items-center justify-center rounded-t-xl">
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-95 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200 mb-2">
                        <FaPlay className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 ml-0.5" />
                    </div>
                    <p className="text-white g-title drop-shadow-lg">
                        {title}
                    </p>
                </div>
            </div>
        </div>
    );
};

const WhyChoose = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState("");
    const [currentVideoTitle, setCurrentVideoTitle] = useState("");

    const handleVideoClick = (videoUrl, title = "Video Player") => {
        setCurrentVideoUrl(videoUrl);
        setCurrentVideoTitle(title);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
        setCurrentVideoUrl("");
        setCurrentVideoTitle("");
    };

    const videos = [
        {
            id: 1,
            backgroundImage: "/images/choose-ge1.jpg",
            title: "Client Success Story 1",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 2,
            backgroundImage: "/images/choose-ge1.jpg",
            title: "GeoEspace Implementation",
            videoUrl: "https://www.youtube.com/embed/FWjAbqBWT3k"
        },
        {
            id: 3,
            backgroundImage: "/images/choose-ge1.jpg",
            title: "Industry Solutions",
            videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw"
        },
        {
            id: 4,
            backgroundImage: "/images/choose-ge1.jpg",
            title: "Technology Overview",
            videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0"
        },
        {
            id: 5,
            backgroundImage: "/images/choose-ge2.jpg",
            title: "Customer Testimonial",
            videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4"
        },
        {
            id: 6,
            backgroundImage: "/images/choose-ge2.jpg",
            title: "Product Demo",
            videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk"
        },
        {
            id: 7,
            backgroundImage: "/images/choose-ge2.jpg",
            title: "Case Study",
            videoUrl: "https://www.youtube.com/embed/L_jWHffIx5E"
        },
        {
            id: 8,
            backgroundImage: "/images/choose-ge2.jpg",
            title: "Future Roadmap",
            videoUrl: "https://www.youtube.com/embed/y6120QOlsfU"
        },
    ];

    return (
        <section className="py-12 sm:py-16 lg:py-20 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="g-h2 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Why Organizations Choose{" "}
                        <span className="text-[#064939]">GeoEspace</span>
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Discover how our clients are leveraging the power of Geoespace to
                        unlock new possibilities and drive success across industries.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {videos.map((video) => (
                        <VideoCard
                            key={video.id}
                            backgroundImage={video.backgroundImage}
                            title="Watch Now"
                            onClick={() => handleVideoClick(video.videoUrl, video.title)}
                        />
                    ))}
                </div>

                {/*<div className="text-center mt-12 sm:mt-16">*/}
                {/*    <button className="bg-[#0B8468] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">*/}
                {/*        View All Success Stories*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>

            {/* Video Lightbox */}
            <VideoLightbox
                isOpen={isLightboxOpen}
                onClose={closeLightbox}
                videoUrl={currentVideoUrl}
                title={currentVideoTitle}
            />
        </section>
    );
};

export default WhyChoose;
// import { useState, useEffect } from "react";
// import { FaPlay, FaTimes } from "react-icons/fa";
//
// // Video Lightbox Component
// const VideoLightbox = ({
//                            isOpen,
//                            onClose,
//                            videoUrl,
//                            title = "Video Player",
//                            className = ""
//                        }) => {
//     useEffect(() => {
//         if (isOpen) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'unset';
//         }
//
//         return () => {
//             document.body.style.overflow = 'unset';
//         };
//     }, [isOpen]);
//
//     useEffect(() => {
//         const handleKeyDown = (event) => {
//             if (isOpen && event.key === 'Escape') {
//                 onClose();
//             }
//         };
//
//         document.addEventListener('keydown', handleKeyDown);
//         return () => document.removeEventListener('keydown', handleKeyDown);
//     }, [isOpen, onClose]);
//
//     if (!isOpen) return null;
//
//     return (
//         <div
//             className={`fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 ${className}`}
//             onClick={onClose}
//         >
//             {/* Close Button */}
//             <button
//                 onClick={onClose}
//                 className="absolute top-4 right-4 z-20 w-10 h-10 bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full flex items-center justify-center transition-all duration-200 text-white hover:scale-105"
//                 aria-label="Close video"
//             >
//                 <FaTimes className="w-5 h-5" />
//             </button>
//
//             {/* Video Container */}
//             <div
//                 className="relative w-full max-w-5xl bg-black rounded-lg overflow-hidden shadow-2xl"
//                 onClick={(e) => e.stopPropagation()}
//             >
//                 <div className="aspect-video">
//                     <iframe
//                         width="100%"
//                         height="100%"
//                         src={`${videoUrl}?autoplay=1&rel=0`}
//                         title={title}
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                         referrerPolicy="strict-origin-when-cross-origin"
//                         allowFullScreen
//                         className="rounded-lg"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// const VideoCard = ({
//                        backgroundImage,
//                        title = "Watch Now",
//                        onClick,
//                    }) => {
//     return (
//         <div
//             className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-all duration-200"
//             onClick={onClick}
//         >
//             <div
//                 className="w-full h-full bg-cover bg-center"
//                 style={{
//                     backgroundImage: `url('${backgroundImage}')`,
//                 }}
//             >
//                 <div className="absolute inset-0 bg-[#5cad9ac7] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-t-xl">
//                 </div>
//                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
//                     <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-95 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200 mb-2">
//                         <FaPlay className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 ml-0.5" />
//                     </div>
//                     <p className="text-white font-medium text-sm drop-shadow-lg">
//                         {title}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// const WhyChoose = () => {
//     const [isLightboxOpen, setIsLightboxOpen] = useState(false);
//     const [currentVideoUrl, setCurrentVideoUrl] = useState("");
//     const [currentVideoTitle, setCurrentVideoTitle] = useState("");
//
//     const handleVideoClick = (videoUrl, title = "Video Player") => {
//         setCurrentVideoUrl(videoUrl);
//         setCurrentVideoTitle(title);
//         setIsLightboxOpen(true);
//     };
//
//     const closeLightbox = () => {
//         setIsLightboxOpen(false);
//         setCurrentVideoUrl("");
//         setCurrentVideoTitle("");
//     };
//
//     const videos = [
//         {
//             id: 1,
//             backgroundImage: "/images/choose-ge1.jpg",
//             title: "Client Success Story 1",
//             videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
//         },
//         {
//             id: 2,
//             backgroundImage: "/images/choose-ge1.jpg",
//             title: "GeoEspace Implementation",
//             videoUrl: "https://www.youtube.com/embed/FWjAbqBWT3k"
//         },
//         {
//             id: 3,
//             backgroundImage: "/images/choose-ge1.jpg",
//             title: "Industry Solutions",
//             videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw"
//         },
//         {
//             id: 4,
//             backgroundImage: "/images/choose-ge1.jpg",
//             title: "Technology Overview",
//             videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0"
//         },
//         {
//             id: 5,
//             backgroundImage: "/images/choose-ge2.jpg",
//             title: "Customer Testimonial",
//             videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4"
//         },
//         {
//             id: 6,
//             backgroundImage: "/images/choose-ge2.jpg",
//             title: "Product Demo",
//             videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk"
//         },
//         {
//             id: 7,
//             backgroundImage: "/images/choose-ge2.jpg",
//             title: "Case Study",
//             videoUrl: "https://www.youtube.com/embed/L_jWHffIx5E"
//         },
//         {
//             id: 8,
//             backgroundImage: "/images/choose-ge2.jpg",
//             title: "Future Roadmap",
//             videoUrl: "https://www.youtube.com/embed/y6120QOlsfU"
//         },
//     ];
//
//     return (
//         <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="text-center mb-12 sm:mb-16">
//                     <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
//                         Why Organizations Choose{" "}
//                         <span className="text-[#064939]">GeoEspace</span>
//                     </h2>
//                     <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//                         Discover how our clients are leveraging the power of Geoespace to
//                         unlock new possibilities and drive success across industries.
//                     </p>
//                 </div>
//
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
//                     {videos.map((video) => (
//                         <VideoCard
//                             key={video.id}
//                             backgroundImage={video.backgroundImage}
//                             title="Watch Now"
//                             onClick={() => handleVideoClick(video.videoUrl, video.title)}
//                         />
//                     ))}
//                 </div>
//
//                 <div className="text-center mt-12 sm:mt-16">
//                     <button className="bg-[#0B8468] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
//                         View All Success Stories
//                     </button>
//                 </div>
//             </div>
//
//             {/* Video Lightbox */}
//             <VideoLightbox
//                 isOpen={isLightboxOpen}
//                 onClose={closeLightbox}
//                 videoUrl={currentVideoUrl}
//                 title={currentVideoTitle}
//             />
//         </section>
//     );
// };
//
// export default WhyChoose;
