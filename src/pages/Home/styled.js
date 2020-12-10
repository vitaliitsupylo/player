import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 16px;
`;
export const SliderWrapper = styled.div`
  width: 100%;
  max-width: 486px;
  margin: auto;
  @media (min-width: 960px) {
    max-width: 100%;
    padding: 0 56px;
    margin-bottom: 55px;
  }
`;

export const SliderImage = styled.img`
  width: 100%;
  height: auto;
  @media (min-width: 960px) {
    margin-top: 40px;
  }
`;

export const FeaturedWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding-left: 16px;
  margin-bottom: 16px;
  @media (min-width: 960px) {
    max-width: 100%;
    padding: 0 56px;
    margin-bottom: 55px;
  }
`;

export const FeaturedImage = styled.img`
  width: 856px;
  height: auto;
  @media (min-width: 960px) {
    width: 100%;
  }
`;
