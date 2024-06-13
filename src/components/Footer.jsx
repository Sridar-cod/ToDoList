import React from "react";

const Footer = (prop) => {
  return (
    <div className="footer">
      <h2>{`No Of Todos ${prop.length.length}`} </h2>
    </div>
  );
};

export default Footer;
