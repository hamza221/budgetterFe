import React from "react";

export default function Aside(props: any) {
  return (
    <div className="w-1/4 bg-gray-50 h-full p-12 pt-3 pl-0 flex flex-col justify-between">
      {props.children}
    </div>
  );
}
