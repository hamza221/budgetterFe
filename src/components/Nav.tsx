import { useState } from "react";

export default function Nav() {
  const [categories, setCategories] = useState([
    "Food",
    "Transport",
    "Entertainment",
    "Other",
  ] as string[]);

  return (
    <>
      <ul className="mx-auto text-left h-1/2 flex flex-col justify-evenly">
        {categories.map((category) => (
          <li>
            <a href="#">{category}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
