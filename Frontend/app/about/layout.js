import Navbar from "@/components/navbar/page";
import React from "react";

const Aboutlayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Aboutlayout;
