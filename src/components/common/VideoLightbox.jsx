import { useEffect } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";

// Video Lightbox Component
const VideoLightbox = ({
                           isOpen,
                           onClose,
                           videoUrl,
                           title = "Video Player",
                           className = ""
                       }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (isOpen && event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-50 p-4 ${className}`}
            style={{
                backgroundColor: '#5cad9ac7', // Red overlay
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)', // Safari support
            }}
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 w-12 h-12 bg-emerald-700 bg-opacity-80 hover:bg-emerald-700 hover:bg-opacity-90 rounded-full flex items-center justify-center transition-all duration-200 text-white hover:scale-105 shadow-lg"
                aria-label="Close video"
            >
                <FaTimes className="w-6 h-6" />
            </button>

            {/* Video Container */}
            <div
                className="relative w-full max-w-5xl bg-white  overflow-hidden shadow-2xl "
                onClick={(e) => e.stopPropagation()}
                style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(220, 38, 38, 0.1)'
                }}
            >
                <div className="aspect-video">
                    <iframe
                        width="100%"
                        height="100%"
                        src={`${videoUrl}?autoplay=1&rel=0`}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        
                    />
                </div>
            </div>
        </div>
    );
};

export default VideoLightbox;