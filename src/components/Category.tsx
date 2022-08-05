import axios from "axios";
import { useContext } from "react";
import { useDrop } from "react-dnd";
import { io } from "socket.io-client";
import { v4 as uuid } from "uuid";
import { ItemContext } from "../pages/budgetting";
import Item from "../types/item";
import ItemComponent from "./ItemComponent";
const baseUrl = "http://localhost:3000/";

export default function CategoryComponent(props) {
  const socket = io("http://localhost:80/");

  const { items, setItems } = useContext(ItemContext);

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "item",
      drop: (item: any) => {
        updateItem(item.data);
        socket.emit("drop", "chay");
      },
      collect: (monitor) => ({
        isOver: monitor.isOver,
      }),
    }),
    []
  );
  function updateItem(item: Item) {
    console.log(item);
    axios
      .patch(`${baseUrl}items/${item.$id}`, {
        title: item.title,
        description: item.description,
        amount: item.amount,
        category: props.category,
      })
      .then((response) => {
        console.log(response);
      });
  }
  return (
    <div className="h-full min-w-1/4 hover:overflow-y-scroll mr-7 " ref={drop}>
      <>
        <div className="flex justify-between">
          <h1 className="font-semibold font-mono text-left">
            {props.category}
          </h1>
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
        {items
          .filter((item) => item.category == props.category)
          .map((item) => {
            return <ItemComponent key={uuid()} data={item}></ItemComponent>;
          })}
      </div>
    </div>
  );
}
