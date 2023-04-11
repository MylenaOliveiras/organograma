import * as React from "react";

export default function Titulo({ children }: { children: React.ReactNode }) {
  return <h1 className="font-prata font-normal text-4xl">{children}</h1>;
}
