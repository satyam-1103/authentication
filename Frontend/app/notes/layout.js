import Navbar from "@/components/navbar/page";
import React from "react";

const Noteslayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Noteslayout;
