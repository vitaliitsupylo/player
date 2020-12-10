import styled from "styled-components";
import THEME from "THEME";

export const MainHeader = styled.header`
  width: 100%;
  padding: 16px;
  position: relative;
  z-index: 15;
  @media (min-width: 960px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 40px 48px;
  }
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const HeaderBottom = styled.div`
  @media (min-width: 960px) {
    width: 100%;
  }
`;

export const MenuBtnLine = styled.span`
  display: block;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background-color: ${THEME.COLOR_GRAY};
`;

export const MenuBtn = styled.div`
  position: relative;
  width: 20px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${THEME.COLOR_GRAY};
    border-radius: 2px;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${THEME.COLOR_GRAY};
    border-radius: 2px;
  }
`;
