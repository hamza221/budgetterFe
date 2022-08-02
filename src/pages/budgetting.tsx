import React from "react";
import Aside from "../components/Aside";
import Content from "../components/Content";
import Logo from "../components/Logo";
import MainContainer from "../components/MainContainer";
import Nav from "../components/Nav";

export default function () {
  return (
    <MainContainer>
      <Aside>
        <Logo></Logo>
        <Nav></Nav>
      </Aside>
      <Content></Content>
    </MainContainer>
  );
}
