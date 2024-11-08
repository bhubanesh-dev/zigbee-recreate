import React from "react";
import { Navbar } from "@/ui/index";

export default function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
