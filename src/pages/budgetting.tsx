import React, { createContext, useState } from "react";
import Aside from "../components/Aside";
import Button from "../components/Button";
import Categories from "../components/Categories";
import Category from "../components/Categories";
import Content from "../components/Content";
import Logo from "../components/Logo";
import MainContainer from "../components/MainContainer";
import Nav from "../components/Nav";
import Item from "../types/item";
export const CategoryContext = createContext<string[]>([]);
export const ItemContext = createContext<Item[]>([]);

export default function () {
  const [categories, setCategories] = useState([
    "Food",
    "Transport",
    "Entertainment",
    "Other",
  ]);
  const [items, setItems] = useState([
    {
      title: "Test",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, qui?",
      category: "Entertainment",
      amount: 50,
    },
    {
      title: "Test",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, qui?",
      category: "Transport",
      amount: 150,
    },
  ]);
  const connectBank = () => {
    return;
  };
  return (
    <CategoryContext.Provider value={categories}>
      <ItemContext.Provider value={items}>
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
