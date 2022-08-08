import React from "react";
import {
  StyledButton,
  StyledCard,
  StyledDividerMobile,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from "./AdviceGenerator.styled";

const AdvideGenerator = () => {
  return (
    <StyledWrapper>
      <StyledCard>
        <StyledTitle>ADVICE #117</StyledTitle>
        <StyledText>
          “It is easy to sit up and take notice, what's difficult is getting up
          and taking action.”
        </StyledText>
        <StyledDividerMobile />
        <StyledButton />
      </StyledCard>
    </StyledWrapper>
  );
};

export default AdvideGenerator;
