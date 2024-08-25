import Navbar from "@/components/navbar/page";
import React from "react";

const Eventlayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Eventlayout;
