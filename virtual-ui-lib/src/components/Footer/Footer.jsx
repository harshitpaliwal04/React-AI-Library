import React from "react";

export const Footer = ({
  logo = "VirtualAI",
  links = ["Terms", "Privacy", "Docs", "Contact"],
  accent = "#6366f1",
  bg = "#0f172a",
  onLinkClick = () => {}
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <footer style={{ background: bg, borderTop: "1px solid rgba(255,255,255,0.06)", fontFamily: "system-ui,sans-serif", width: "100%", boxSizing: "border-box", padding: "24px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
          <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.6) + ")" , display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "800", color: "#fff" }}>{logo[0]}</div>
          <span style={{ fontSize: "15px", fontWeight: "800", color: "#fff" }}>{logo}</span>
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          {links.map(link => (
            <button key={link} onClick={() => onLinkClick(link)} style={{ background: "transparent", border: "none", fontSize: "13px", fontWeight: "500", color: "rgba(255,255,255,0.5)", cursor: "pointer", fontFamily: "inherit" }}>{link}</button>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: "1100px", margin: "20px auto 0", textAlign: "center", fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
        © 2024 {logo}. All rights reserved.
      </div>
    </footer>
  );
};