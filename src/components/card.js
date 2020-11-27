import React from "react";
import {
  CardContainer,
  ItemContainer,
  TitleCard,
  Price,
  Storage,
  Users,
  Volume,
  Button,
  ComponentContainer
} from "../pricing/styled";

const Card = props => {
  const items = [
    {
      title: "Basic",
      price: {
        annually: "$199.99",
        monthly: "$19.99"
      },
      storage: "500 BG Storage",
      users: "2 Users Allowed",
      volume: "Send up to 3 GB",
      className: "left"
    },
    {
      title: "Professional",
      price: {
        annually: "$249.99",
        monthly: "$24.99"
      },
      storage: "1 TB Storage",
      users: "5 Users Allowed",
      volume: "Send up to 10 GB",
      className: "middle"
    },
    {
      title: "Master",
      price: {
        annually: "$399.99",
        monthly: "$39.99"
      },
      storage: "2 TB Storage",
      users: "10 Users Allowed",
      volume: "Send up tp 20 GB",
      className: "right"
    }
  ];
  return (
    <CardContainer>
      {items.map(item => {
        return <Item item={item} key={item.title} type={props.type} />;
      })}
    </CardContainer>
  );
};

const Item = ({ item, type }) => {
  const { title, price, storage, users, volume, className } = item;
  const priceValue = price[type];
  //console.log({priceValue, type, price})
  return (
    <ItemContainer className={className || ""}>
      <ComponentContainer>
        <TitleCard>{title}</TitleCard>
      </ComponentContainer>
      <ComponentContainer>
        <Price>{priceValue}</Price>
      </ComponentContainer>
      <ComponentContainer>
        <Storage>{storage}</Storage>
      </ComponentContainer>
      <ComponentContainer>
        <Users>{users}</Users>
      </ComponentContainer>
      <ComponentContainer>
        <Volume>{volume}</Volume>
      </ComponentContainer>
      <Button className={className || ""}>Learn More</Button>
    </ItemContainer>
  );
};

export default Card;
