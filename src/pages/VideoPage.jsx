import { useState } from "react";
import VideoReveal from "../components/VideoReveal";

const VideoPage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  return (
    <main className="flex min-h-dvh flex-col items-center justify-between p-24">
      {isVideoPlaying && (
        <VideoReveal onVideoEnd={() => setIsVideoPlaying(false)} />
      )}
      <div>
        <h1 className="text-4xl font-bold text-center">Welcome to React App</h1>
        <p className="mt-4 text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis placeat
          asperiores itaque fugit possimus similique. Delectus est ullam
          eligendi enim totam, recusandae sunt animi, adipisci dolores incidunt
          asperiores repellendus aliquid?
        </p>
        <p className="mt-2 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis placeat
          asperiores itaque fugit possimus similique. Delectus est ullam
          eligendi enim totam, recusandae sunt animi, adipisci dolores incidunt
          asperiores repellendus aliquid?
        </p>
      </div>
    </main>
  );
};

export default VideoPage;
