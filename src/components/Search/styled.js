import styled from "styled-components";
import THEME from "THEME";

export const SearchWrapper = styled.div`
  width: 100%;
  max-width: 488px;
  position: relative;
  margin: auto;
  @media (min-width: 960px) {
    margin: 0 30px 0 0;
  }
`;

export const InputWrapper = styled.div`
  border: 1px solid #8b8e97;
  width: 100%;
  background-color: ${THEME.COLOR_DARK_BLUE};
  border-radius: 6px;
  padding: 8px;
  position: relative;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  border-radius: 6px;
  color: ${THEME.COLOR_RED};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  padding-left: 40px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
`;

export const InputShadow = styled.span`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  padding-left: 40px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  color: #8b8e97;
  width: 100%;
  height: auto;
  span {
    opacity: 0;
  }
`;

export const SearchResult = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  background-color: #181e30;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  width: 100%;
  &::before {
    content: "";
    display: block;
    background: linear-gradient(to top, #181e30, transparent);
    position: absolute;
    width: 100%;
    height: 20px;
    left: 0;
    top: calc(100% - 20px);
    z-index: 1;
  }
`;

export const SearchResultWrapper = styled.div`
  max-height: 375px;
  overflow-y: auto;
  padding: 16px;
`;

export const ResultName = styled.span`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #8b8e97;
  span {
    color: ${THEME.COLOR_RED};
  }
`;

export const ResultImageWrap = styled.div`
  width: 24px;
  min-width: 24px;
  height: 24px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  margin-right: 24px;
  transform: scale(1);
  transition: transform 0.3s ease-out;
`;

export const ResultLine = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
  &:hover {
    ${ResultImageWrap} {
      transform: scale(1.1);
    }
  }
`;

export const ResultImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;
