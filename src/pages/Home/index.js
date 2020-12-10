import React from "react";
import { useMediaQuery } from "react-responsive";

import {
  SliderWrapper,
  SliderImage,
  FeaturedWrapper,
  FeaturedImage,
} from "./styled";

const Home = () => {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 960px)",
  });
  return (
    <>
      <SliderWrapper>
        <SliderImage
          src={`/images/${isMobile ? "slider-mob.png" : "slider.png"}`}
        />
      </SliderWrapper>
      <FeaturedWrapper>
        <FeaturedImage
          src={`/images/${isMobile ? "FEATURED-mob.png" : "FEATURED.png"}`}
        />
      </FeaturedWrapper>
    </>
  );
};

export default Home;
