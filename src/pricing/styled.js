import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
`;
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  @media (max-width: 1024px) {
    margin-top: 20px;
  }
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  color: #6d708d;
`;
export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 1em;
    color: #b3b5c6;
    margin-right: 10px;
    :last-child {
      margin-right: 0;
    }
  }
`;
export const SwitchContainer = styled.label`
  position: relative;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 29px;
  padding: 10px;
  margin-right: 10px;
  border-radius: 50px;
  overflow: hidden;
  background: linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%));
  input {
    width: 0px;
    height: 0px;
  }
`;
export const Circle = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50px;
  :before {
    position: absolute;
    content: "";
    height: 23px;
    width: 23px;
    left: ${({ value }) => (value ? "4px" : "34px")};
    right: ${({ value }) => (value ? "35px" : "4px")};
    bottom: 3px;
    border-radius: 50%;
    background-color: white;
    transition: all 0.4s ease 0s;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 15px;
  height: auto;
  width: 400px;
  padding: 10px;
  background: #fff;
  color: #494c5f;
  &.left {
    @media (min-width: 1024px) {
      border-radius: 10px 0px 0px 10px;
      margin: 15px 0px 15px 0px;
    }
  }
  &.middle {
    border-radius: 10px;
    background: linear-gradient(
      to bottom,
      hsl(236, 72%, 79%),
      hsl(237, 63%, 64%)
    );
    color: #fff;
  }
  &.right {
    @media (min-width: 1024px) {
      border-radius: 0px 10px 10px 0px;
      margin: 15px 0px 15px 0px;
    }
  }
  @media (max-width: 1024px) {
    margin-bottom: 20px;
    border-radius: 10px;
  }
`;
export const TitleCard = styled.div`
  display: flex;
`;
export const Price = styled.div`
  display: flex;
  font-size: 46px;
`;
export const Storage = styled.div`
  display: flex;
`;
export const Users = styled.div`
  display: flex;
`;
export const Volume = styled.div`
  display: flex;
`;
export const Button = styled.button`
  display: flex;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  &.left {
    width: 80%;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 1rem;
    border: 1px solid transparent;
    border-radius: 5px;
    color: #fff;
    transition: all 0.2s ease;
    background: linear-gradient(
      to right,
      hsl(236, 72%, 79%),
      hsl(237, 63%, 64%)
    );
    :hover {
      background: transparent;
      border: 1px solid hsl(237, 63%, 64%);
      color: hsl(237, 63%, 64%);
    }
  }
  &.middle {
    width: 80%;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 1rem;
    border-radius: 5px;
    transition: all 0.2s ease;
    background: #fff;
    border: 1px solid transparent;
    color: hsl(237, 63%, 64%);
    :hover {
      background: transparent;
      border: 1px solid #fff;
      color: #fff;
    }
  }
  &.right {
    width: 80%;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 1rem;
    border: 1px solid transparent;
    border-radius: 5px;
    color: #fff;
    transition: all 0.2s ease;
    background: linear-gradient(
      to right,
      hsl(236, 72%, 79%),
      hsl(237, 63%, 64%)
    );
    :hover {
      background: transparent;
      border: 1px solid hsl(237, 63%, 64%);
      color: hsl(237, 63%, 64%);
    }
`;
export const ComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  font-weight: 600;
  padding: 12px;
  margin-bottom: 10px;
  box-shadow: 0px 1px 0px 0px rgba(199, 199, 199, 1);
`;
