import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./listing.scss";
export const Listing = () => {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <div
      src="path-to-img"
      onDragStart={handleDragStart}
      role="presentation"
    ></div>,
    <div
      src="path-to-img"
      onDragStart={handleDragStart}
      role="presentation"
    ></div>,
    <div
      src="path-to-img"
      onDragStart={handleDragStart}
      role="presentation"
    ></div>,
  ];
  return (
    <div className="listing">
      <h1>Recent Listing</h1>
      <h3>CHECK THEM OUT</h3>
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        infinite
        autoPlayInterval={2000}
      />
    </div>
  );
};
