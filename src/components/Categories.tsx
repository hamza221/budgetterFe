import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
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
                <DndProvider backend={HTML5Backend}>
                  <CategoryComponent category={Category}></CategoryComponent>
                </DndProvider>
              );
            })}
          </div>
        );
      }}
    </CategoryContext.Consumer>
  );
}
