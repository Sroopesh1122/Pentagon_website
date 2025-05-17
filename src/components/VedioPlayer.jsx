import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

const VedioPlayer = ({ url }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (playerRef.current) {
        setTimeout(() => {
          const internal = playerRef.current.getInternalPlayer?.();
          if (internal?.pause) {
            internal.pause();
          }
        }, 0);
      }
    };
  }, []);

  return (
    <section className="w-full h-full">
      <ReactPlayer
        ref={playerRef}
        controls={false}
        url={url}
        width="100%"
        height="100%"
        playing
        loop={true}
      />
    </section>
  );
};

export default VedioPlayer;
