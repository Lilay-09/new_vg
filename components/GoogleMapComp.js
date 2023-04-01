import React from "react";

const GoogleMapComp = ({ width }) => {
  return (
    <div
      style={{
        width: width ? `${width}` : "85%",
        margin: "0 auto",
        padding: "0.3rem",
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.1035369269835!2d104.92480222895313!3d11.597838188690075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951def85fcf25%3A0xb231d7b61e45f6a9!2sVectorasoft%20Co.%2C%20Ltd!5e0!3m2!1skm!2skh!4v1679457201239!5m2!1skm!2skh"
        style={{
          border: "0",
          width: "100%",
          height: "25vw",
          minHeight: "230px",
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapComp;
