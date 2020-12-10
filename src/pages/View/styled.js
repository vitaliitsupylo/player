import styled from "styled-components";

export const Wrapper = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  @media (min-width: 960px) {
    padding-left: 48px;
    padding-right: 48px;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 16px;
  color: #ffffff;
  @media (min-width: 960px) {
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 32px;
  }
`;

export const WrapperContent = styled.div``;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 16px;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  a {
    margin-right: 20px;
    transform: scale(1);
    transition: transform 0.4s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
