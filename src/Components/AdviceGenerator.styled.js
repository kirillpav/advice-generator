import styled from "styled-components";

import DividerMobile from "../images/pattern-divider-mobile.svg";
import DividerDesktop from "../images/pattern-divider-desktop.svg";

import DiceIcon from "../images/icon-dice.svg";

export const StyledWrapper = styled.div`
  padding: 0 16px;

  @media screen and (min-width: 1440px) {
    padding: 0 450px;
  }
`;

export const StyledCard = styled.div`
  position: relative;

  padding-top: 40px;
  padding-left: 24px;
  padding-right: 24px;

  margin: 0 auto;
  margin-top: 120px;

  width: 343px;
  height: 315px;

  background: #313a48;
  box-shadow: 30px 50px 80px rgba(0, 0, 0, 0.100202);
  border-radius: 10px;

  text-align: center;

  @media screen and (min-width: 1440px) {
    padding-top: 48px;
    padding-left: 48px;
    padding-right: 48px;

    margin-top: 223px;

    width: 540px;
    height: 332px;
  }
`;

export const StyledTitle = styled.p`
  font-style: normal;
  font-weight: 800;
  font-size: 11px;
  line-height: 15px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 3.45714px;

  /* Neon Green */

  color: #53ffaa;

  margin-bottom: 24px;

  @media screen and (min-width: 1440px) {
    font-size: 13px;
    line-height: 18px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 4.08571px;
  }
`;

export const StyledText = styled.p`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  letter-spacing: -0.257143px;

  /* Light Cyan */

  color: #cee3e9;

  @media screen and (min-width: 1440px) {
    font-size: 28px;
    line-height: 38px;
    text-align: center;
    letter-spacing: -0.3px;
  }
`;

export const StyledDivider = styled.div`
  position: absolute;
  bottom: 64px;
  left: 24px;

  width: 295px;
  height: 16px;

  background-image: url(${DividerMobile});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 1440px) {
    background-image: url(${DividerDesktop});

    width: 444px;

    bottom: 72px;
    left: 48px;
  }
`;

export const StyledButton = styled.button`
  width: 64px;
  height: 64px;

  position: absolute;
  bottom: -32px;
  left: 140px;

  border: none;

  background: #53ffaa;
  border-radius: 50%;

  background-image: url(${DiceIcon});
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-width: 1440px) {
    left: 238px;

    &:hover {
      background: #53ffaa;
      box-shadow: 0px 0px 40px #53ffaa;

      background-image: url(${DiceIcon});
      background-size: 24px;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`;
