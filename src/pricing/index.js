import React, { useState } from "react";
import { Container } from "./styled";
import Header from "../components/header";
import Card from "../components/card";

const Pricing = () => {
  const [type, setType] = useState("annually");
  const changeType = () => {
    const newType = type === "annually" ? "monthly" : "annually";
    setType(newType)
  };
  return (
    <Container>
      <Header type={type} changeType={changeType}/>
      <Card type={type}/>
    </Container>
  );
};

export default Pricing;
