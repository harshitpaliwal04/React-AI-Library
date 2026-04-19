import React from "react";

export const Loader = ({ size = 32, color = "#6366f1", thickness = 3, speed = 1 }) => {
  return (
    <div style={{ position: "relative", width: size + "px", height: size + "px" }}>
      <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: thickness + "px solid rgba(255,255,255,0.1)" }} />
      <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: thickness + "px solid " + color, borderRightColor: "transparent", animation: "spin " + speed + "s linear infinite" }} />
      <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
    </div>
  );
};