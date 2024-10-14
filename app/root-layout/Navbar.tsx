import React from "react";
import Brand from "./navbar-components/Brand";

export default function Navbar() {
  return (
    <div className="p-2 flex items-center border rounded-lg">
      <Brand />
    </div>
  );
}
