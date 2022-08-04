import React, { createContext, useMemo, useState } from "react";
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
export const ItemContext = createContext({
  items: [
    {
      id: 1,
      title: "Test",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, qui?",
      category: "Entertainment",
      amount: 50,
    } as Item,
  ],
  setItems: () => {},
});

export default function () {
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      title: "Test",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, qui?",
      category: "Food",
      amount: 50,
    },
    {
      id: 2,
      title: "Test",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, qui?",
      category: "Transport",
      amount: 150,
    },
  ]);
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
