// VedioPlayer.jsx
import React, { forwardRef } from 'react';

const VedioPlayer = forwardRef(({ url }, ref) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <video 
        ref={ref}
        className="w-full h-full object-contain"
        controls
        autoPlay
      >
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
});

VedioPlayer.displayName = 'VedioPlayer';

export default VedioPlayer;