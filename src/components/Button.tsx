import React from "react";

export default function Button(props: any) {
  return (
    <div
      onClick={props.handleButton}
      className="p-5 ml-5 h-auto w-auto text-secondary font-bold border-primary border-2 rounded-lg font-mono  bg-white hover:bg-primary hover:text-white cursor-pointer"
    >
      {props.text}
    </div>
  );
}
