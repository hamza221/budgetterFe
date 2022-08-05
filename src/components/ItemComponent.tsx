import React, { useState } from "react";
import { useDrag } from "react-dnd";
import Modal from "react-modal";
import { io } from "socket.io-client";
import { v4 as uuid } from "uuid";
import { CategoryContext } from "../pages/budgetting";

Modal.setAppElement("#root");

export default function ItemComponent(props: any) {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [data, setData] = useState(props.data);
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: "item",
      item: { data },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 1 : 1,
      }),
    }),
    []
  );
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleModalSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    closeModal();
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
    console.log(data);
  };
  const customStyles = {
    content: {
      top: "30%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translateX(-50%)",
    },
  };
  if (props.data)
    return (
      <>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Modal"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.data.title}
          </h5>

          <form onSubmit={handleModalSubmit} className="w-full max-w-sm">
            <div className="flex justify-between mt-6">
              <label className="mr-5">Amount </label>
              <input
                name="amount"
                className="  appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder={props.data.amount}
                onChange={handleChange}
                aria-label="Price"
              />
            </div>
            <div className="flex justify-between mt-6 ">
              <label className="mr-5">Category </label>
              <div className="inline-block relative w-64">
                <CategoryContext.Consumer>
                  {(categories) => {
                    return (
                      <select
                        name="category"
                        value={props.data.category}
                        onChange={handleChange}
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                      >
                        {categories.map((category: string) => {
                          return <option key={uuid()}>{category}</option>;
                        })}
                      </select>
                    );
                  }}
                </CategoryContext.Consumer>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-6 ">
              <label className="mr-5">Description </label>
              <input
                className=" appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                name="description"
                onChange={handleChange}
                placeholder={props.data.description}
                aria-label="Price"
              />
            </div>
            <div className="w-full flex justify-end mt-6">
              <button
                className="border  border-primary rounded w-1/4 py-1 px-2 flex-shrink-0"
                type="submit"
              >
                Save
              </button>
              <button
                className="ml-7 border  py-1 px-2 border-primary rounded  w-1/4 flex-shrink-0"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </form>
        </Modal>
        <button
          style={{ opacity }}
          ref={dragRef}
          onClick={openModal}
          className="text-left min-w-full mt-4 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex justify-between">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.data.title}
            </h5>
            <div className="flex">
              <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {props.data.amount} HUF
              </h5>
            </div>
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {props.data.description}
          </p>
        </button>
      </>
    );
  else return <></>;
}
