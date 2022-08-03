import React from "react";
import Aside from "../components/Aside";
import Button from "../components/Button";
import Content from "../components/Content";
import Logo from "../components/Logo";
import MainContainer from "../components/MainContainer";
import Nav from "../components/Nav";

export default function () {
  const connectBank = () => {
    return;
  };
  return (
    <MainContainer>
      <Aside>
        <Logo></Logo>
        <Nav></Nav>
        <Button text="Connect Your Bank" handleButton={connectBank()}></Button>
      </Aside>
      <Content></Content>
    </MainContainer>
  );
}
