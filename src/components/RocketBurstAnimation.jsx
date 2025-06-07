import React, { useEffect, useRef, useState } from "react";

const RocketBurstAnimation = ({ onComplete }) => {
  const rocketRef = useRef();
  const [showSpace, setShowSpace] = useState(true);
  useEffect(() => {
    // Rocket animation duration: 0.7s + 0.1s delay = 0.8s
    const closeSpaceTimer = setTimeout(() => {
      setShowSpace(false);
    }, 800); // match rocket exit
    // Call onComplete after a short delay to allow fade-out
    const completeTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 1000);
    return () => {
      clearTimeout(closeSpaceTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 overflow-hidden">
      {/* Space with stars, closes after rocket leaves */}
      {showSpace && (
        <div className="absolute inset-0 flex items-center justify-center fade-space">
          <div className="space-opening">
            {[...Array(80)].map((_, i) => (
              <div
                key={i}
                className="star"
                style={{
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                  width: Math.random() * 2 + 1,
                  height: Math.random() * 2 + 1,
                  opacity: Math.random() * 0.7 + 0.3,
                }}
              />
            ))}
          </div>
        </div>
      )}
      {/* Modern rocket design */}
      <div
        ref={rocketRef}
        className="modern-cartoon-rocket-fly-in"
        style={{ position: "absolute", width: 80, height: 160, zIndex: 10 }}
      >
        {/* Modern pointed nose cone */}
        <div className="modern-rocket-nose" />
        {/* Sleek main body */}
        <div className="modern-rocket-body" />
        {/* Blue window */}
        <div className="modern-rocket-window" />
        {/* Left metallic fin */}
        <div className="modern-rocket-fin left" />
        {/* Right metallic fin */}
        <div className="modern-rocket-fin right" />
        {/* Center metallic fin */}
        <div className="modern-rocket-fin center" />
        {/* Metallic stripe */}
        <div className="modern-rocket-stripe" />
        {/* Flame */}
        <div className="modern-rocket-flame" />
      </div>
      <style>{`
        .modern-cartoon-rocket-fly-in {
          left: 50vw;
          bottom: -140px;
          transform: translateX(-50%);
          animation: modern-rocket-fly-in 0.7s cubic-bezier(0.4,0,0.2,1) 0.1s forwards;
          opacity: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .modern-rocket-nose {
          width: 0;
          height: 0;
          border-left: 18px solid transparent;
          border-right: 18px solid transparent;
          border-bottom: 38px solid #1976d2;
          position: absolute;
          left: 50%;
          top: 0px;
          transform: translateX(-50%);
          z-index: 3;
        }
        .modern-rocket-body {
          width: 36px;
          height: 90px;
          background: linear-gradient(180deg, #f5f7fa 0%, #c3cfe2 100%);
          border-radius: 18px 18px 14px 14px/38px 38px 18px 18px;
          position: absolute;
          left: 50%;
          top: 28px;
          transform: translateX(-50%);
          box-shadow: 0 4px 16px #0002, 0 0 0 4px #fff2;
          border: 2px solid #b0b7c6;
          z-index: 2;
        }
        .modern-rocket-window {
          width: 14px;
          height: 14px;
          background: radial-gradient(circle at 60% 40%, #64b5f6 70%, #1976d2 100%);
          border-radius: 50%;
          border: 2px solid #fff;
          position: absolute;
          left: 50%;
          top: 48px;
          transform: translateX(-50%);
          box-shadow: 0 0 12px #64b5f699, 0 0 2px #fff;
          z-index: 4;
        }
        .modern-rocket-fin {
          width: 20px;
          height: 32px;
          background: linear-gradient(135deg, #90a4ae 0%, #263238 100%);
          position: absolute;
          top: 88px;
          border-radius: 0 0 12px 12px/0 0 24px 24px;
          z-index: 1;
          box-shadow: 0 2px 8px #26323833;
        }
        .modern-rocket-fin.left {
          left: 0;
          transform: rotate(-8deg) scaleX(-1);
        }
        .modern-rocket-fin.right {
          right: 0;
          transform: rotate(8deg);
        }
        .modern-rocket-fin.center {
          left: 50%;
          transform: translateX(-50%) scaleY(1.1);
          width: 10px;
          height: 24px;
          background: linear-gradient(135deg, #b0bec5 0%, #263238 100%);
          top: 116px;
          border-radius: 0 0 10px 10px/0 0 24px 24px;
          z-index: 0;
        }
        .modern-rocket-stripe {
          width: 20px;
          height: 6px;
          background: linear-gradient(90deg, #1976d2 0%, #fff 100%);
          position: absolute;
          left: 50%;
          top: 80px;
          transform: translateX(-50%);
          border-radius: 3px;
          z-index: 5;
        }
        .modern-rocket-flame {
          width: 16px;
          height: 38px;
          background: radial-gradient(circle at 50% 20%, #fff176 60%, #ff9800 80%, transparent 100%);
          position: absolute;
          left: 50%;
          top: 130px;
          transform: translateX(-50%);
          border-radius: 50% 50% 60% 60%/60% 60% 100% 100%;
          opacity: 0.92;
          animation: modern-rocket-flame-flicker 0.16s infinite alternate;
          filter: blur(0.5px);
          z-index: 4;
        }
        @keyframes modern-rocket-flame-flicker {
          0% { height: 38px; opacity: 0.92; }
          100% { height: 46px; opacity: 1; }
        }
        @keyframes modern-rocket-fly-in {
          0% { bottom: -140px; opacity: 0; }
          60% { bottom: 40vh; opacity: 1; }
          75% { bottom: 50vh; opacity: 1; }
          100% { bottom: 120vh; opacity: 0.7; }
        }
        .space-opening {
          width: 0;
          height: 0;
          border-radius: 50%;
          background: radial-gradient(circle, #1b2735 60%, #090a0f 100%);
          animation: open-space 0.7s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        @keyframes open-space {
          0% { width: 0; height: 0; opacity: 0.7; }
          80% { width: 0; height: 0; opacity: 1; }
          100% { width: 120vw; height: 120vw; opacity: 1; }
        }
        .fade-space {
          animation: fade-space-out 0.18s linear 0.8s forwards;
        }
        @keyframes fade-space-out {
          to { opacity: 0; }
        }
        .star {
          position: absolute;
          background: #fff;
          border-radius: 50%;
          filter: blur(0.5px);
        }
      `}</style>
    </div>
  );
};

export default RocketBurstAnimation;
