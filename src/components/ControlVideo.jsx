import { useRef, useState } from "react";

const ControlVideo = () => {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    setProgress((current / total) * 100);
  };

  return (
    <div>
      <video
        ref={videoRef}
        src="/door.mp4"
        width="600"
        controls={false}
        onTimeUpdate={handleTimeUpdate}
      ></video>

      <div className="max-w-[600px] bg-gray-300 h-2 rounded">
        <div
          className="bg-blue-500 h-2 rounded"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div>
        <button onClick={handlePlayPause}>Play / Pause ▶</button>
      </div>
    </div>
  );
};

export default ControlVideo;
