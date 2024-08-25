import Navbar from "@/components/navbar/page";
import React from "react";

const Contactlayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Contactlayout;
