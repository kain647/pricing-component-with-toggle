import React from "react";
import {
  SwitchContainer,
  Title,
  ToggleContainer,
  Circle,
  HeaderContainer
} from "../pricing/styled";

const Header = props => {
  const { type, changeType } = props;
  const checked = type === "annually";

  return (
    <HeaderContainer>
      <Title>Our pricing</Title>
      <ToggleContainer>
        <p>Annually</p>
        <SwitchContainer onClick={changeType}>
          <Circle value={checked} />
        </SwitchContainer>
        <p>Monthly</p>
      </ToggleContainer>
    </HeaderContainer>
  );
};

export default Header;
