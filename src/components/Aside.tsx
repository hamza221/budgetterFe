import React from "react";

export default function Aside(props: any) {
  return (
    <div className="w-1/6 bg-white h-full p-12 pt-3 pl-0 flex flex-col justify-between place-items-start ">
      {props.children}
    </div>
  );
}
