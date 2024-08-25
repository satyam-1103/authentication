"use client";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";

const Rootlayout = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      <main>
        {children}
        <Analytics />
      </main>
    </SessionProvider>
  );
};

export default Rootlayout;
