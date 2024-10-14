import { iBrandLogoMini } from "@/app/utils/ImageImports";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Brand() {
  return (
    <Link href={"/"} className="flex items-center space-x-3">
      <Image src={iBrandLogoMini} alt="Brand Logo" width={30} height={30} />
      <div className="text-2xl">Z-INK</div>
    </Link>
  );
}
