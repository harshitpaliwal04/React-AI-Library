import React, { useState } from "react";

export const EcommerceCard = ({
  image = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
  name = "Wireless Headphones",
  description = "High-quality wireless headphones with noise cancellation and long battery life.",
  price = 199.99,
  currency = "$",
  rating = 4.5,
  reviews = 1200,
  accent = "#6366f1",
  bg = "#0f172a",
  onAddToCart = () => {}
}) => {
  const [hovered, setHovered] = useState(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: bg,
        borderRadius: "20px",
        overflow: "hidden",
        width: "300px",
        border: "1px solid " + (hovered ? alpha(accent, 0.3) : "rgba(255,255,255,0.07)"),
        fontFamily: "system-ui,sans-serif",
        transition: "transform 0.25s, box-shadow 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0px)",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.3)"
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "200px", overflow: "hidden" }}>
        <img src={image} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", transform: hovered ? "scale(1.05)" : "scale(1)", transition: "transform 0.4s ease" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
      </div>
      <div style={{ padding: "18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#fff", margin: 0 }}>{name}</h3>
          <div style={{ fontSize: "14px", fontWeight: "700", color: accent }}>{currency}{price.toFixed(2)}</div>
        </div>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.65, margin: "0 0 18px" }}>{description}</p>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "18px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < Math.floor(rating) ? accent : "rgba(255,255,255,0.1)"} stroke={i < Math.floor(rating) ? accent : "rgba(255,255,255,0.3)"} strokeWidth="1.5"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
            ))}
          </div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>({reviews} reviews)</div>
        </div>
        <button
          onClick={onAddToCart}
          style={{ width: "100%", padding: "11px", borderRadius: "12px", border: "none", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")" , color: "#fff", fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }}
        >Add to Cart</button>
      </div>
    </div>
  );
};