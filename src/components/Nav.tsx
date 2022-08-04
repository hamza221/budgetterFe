import { useContext, useState } from "react";
import uuid from "react-uuid";
import { CategoryContext } from "../pages/budgetting";
export default function Nav() {
  const categories = useContext(CategoryContext);

  return (
    <>
      <ul className=" text-left h-1/2 w-full pl-5  flex flex-col justify-evenly overflow-y-hidden hover:overflow-y-scroll pt-8 scrollbar ">
        <CategoryContext.Consumer>
          {(categories) =>
            categories.map((category) => (
              <li
                key={uuid()}
                className="text-secondary font-mono font-semibold hover:text-primary cursor-pointer"
              >
                <a href="#">{category}</a>
              </li>
            ))
          }
        </CategoryContext.Consumer>
      </ul>
    </>
  );
}
