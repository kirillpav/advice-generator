import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  StyledButton,
  StyledCard,
  StyledDivider,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from "./AdviceGenerator.styled";

const AdvideGenerator = () => {
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    const advice = await axios("https://api.adviceslip.com/advice");
    const response = advice.data;
    setAdvice(response.slip);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <StyledWrapper>
      <StyledCard>
        <StyledTitle>ADVICE #{advice.id}</StyledTitle>
        <StyledText>"{advice.advice}"</StyledText>
        <StyledDivider />
        <StyledButton type="button" onClick={getAdvice} />
      </StyledCard>
    </StyledWrapper>
  );
};

export default AdvideGenerator;
