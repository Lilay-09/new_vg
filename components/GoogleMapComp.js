import React from "react";

const GoogleMapComp = ({ width, url }) => {
  const regex = /\/place\/([^\/]+)\/@/;
  const match = url.match(regex);
  const placeName = match && match[1].replace(/\+/g, " ");
  console.log(placeName);
  return (
    <div
      style={{
        width: width ? `${width}%` : "85%",
        margin: "0 auto",
        padding: "0.3rem",
      }}
    >
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBZfV2HezW2S-LFeVZDY8f_y9N5ca-vfxg
      &q=${placeName}`}
        style={{
          border: "0",
          width: "100%",
          height: "25vw",
          minHeight: "230px",
        }}
        allowFullScreen
        // loading="lazy"
        // referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapComp;
