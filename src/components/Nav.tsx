import { useState } from "react";
import uuid from "react-uuid";
export default function Nav() {
  const [categories, setCategories] = useState([
    "Food",
    "Transport",
    "Entertainment",
    "Other",
  ] as string[]);

  return (
    <>
      <ul className="mx-auto text-left h-1/2 flex flex-col justify-evenly overflow-visible">
        {categories.map((category) => (
          <li
            key={uuid()}
            className="text-secondary font-mono font-semibold hover:text-primary cursor-pointer"
          >
            <a href="#">{category}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
