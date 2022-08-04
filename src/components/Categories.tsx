import { CategoryContext } from "../pages/budgetting";
import CategoryComponent from "./Category";

export default function Categories() {
  return (
    <CategoryContext.Consumer>
      {(categories) => {
        return (
          <div className="h-full w-full flex overflow-y-hidden">
            {categories.map((Category) => {
              return (
                <CategoryComponent category={Category}></CategoryComponent>
              );
            })}
          </div>
        );
      }}
    </CategoryContext.Consumer>
  );
}
