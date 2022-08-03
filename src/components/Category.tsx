import React, { useState } from "react";
import Item from "../types/item";
import ItemComponent from "./ItemComponent";

export default function Category(props) {
    const [categories,setCategories] = useState(["Food",
    "Transport",
    "Entertainment",
    "Other",])
  const [items, setItems] = useState<Item[]>([

    {
      title: "Test",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, qui?",
      category: "Food",
      amount: 50,
    },
  ]);
  return (
    <div className="h-full min-w-1/4 hover:overflow-y-scroll mr-7 ">
      <>
        <div className="flex justify-between">
          <h1 className="font-semibold font-mono text-left">{props.title}</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 self-center cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="rgb(40, 42, 48)"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </>
      <div>
        {items.map((item) => {
          return (
            <ItemComponent item={item} categories={categories}></ItemComponent>
          );
        })}
      </div>
    </div>
  );
}
