import axios from "axios";
import React, { createContext, useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
import Aside from "../components/Aside";
import Button from "../components/Button";
import Categories from "../components/Categories";
import Category from "../components/Categories";
import Content from "../components/Content";
import Logo from "../components/Logo";
import MainContainer from "../components/MainContainer";
import Nav from "../components/Nav";
import Item from "../types/item";

const baseUrl = "http://localhost:3000/";
export const CategoryContext = createContext<string[]>([]);
export const ItemContext = createContext({
  items: [
    {
      $id: 2,
      title: "Penny",
      description: "Penny",
      amount: 20,
      category: "Food",
    },
  ],
  setItems: () => {},
});

export default function () {
  const socket = io("http://localhost:80/");

  const [items, setItems] = useState<Item[]>([
    {
      $id: 2,
      title: "test",
      description: "Penny",
      amount: 20,
      category: "Food",
    },
  ]);
  useEffect(() => {
    axios.get(baseUrl + "items").then((response) => {
      setItems(response.data);
    });
  }, []);
  socket.on("dropped", (tmp) => {
    console.log("asba");
    axios.get(baseUrl + "items").then((response) => {
      setItems(response.data);
    });
    console.log(tmp);
  });
  const value = useMemo(() => ({ items, setItems }), [items]);
  const [categories, setCategories] = useState([
    "Food",
    "Transport",
    "Entertainment",
    "Other",
  ]);

  const connectBank = () => {
    return;
  };

  return (
    <CategoryContext.Provider value={categories}>
      <ItemContext.Provider value={value}>
        <MainContainer>
          <Aside>
            <Logo></Logo>
            <Nav></Nav>
            <Button
              text="Connect Your Bank"
              handleButton={connectBank()}
            ></Button>
          </Aside>
          <Content>
            <Categories></Categories>
          </Content>
        </MainContainer>
      </ItemContext.Provider>
    </CategoryContext.Provider>
  );
}
