import React from "react";

export default function Aside(props: any) {
  return (
    <div className="w-1/4 bg-gray-100 h-full p-12 pt-3 flex flex-col justify-between ">
      {props.children}
    </div>
  );
}
