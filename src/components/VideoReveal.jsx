import { useRef } from "react";

const VideoReveal = ({ onVideoEnd }) => {
  const wrappedRef = useRef(null);

  const handleVideoEnded = () => {
    wrappedRef?.current?.classList.add("opacity-0", "pointer-events-none");

    setTimeout(() => {
      onVideoEnd();
    }, 500);
  };

  return (
    <div
      ref={wrappedRef}
      className="fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-500"
      onClick={handleVideoEnded}
    >
      <video
        autoPlay
        muted
        className="w-full h-full object-cover"
        onEnded={handleVideoEnded}
      >
        <source src="/door.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoReveal;
