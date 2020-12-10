import React from "react";
import { useMediaQuery } from "react-responsive";

import { Wrapper, WrapperImage, Image } from "./styled";

const Player = () => {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 960px)",
  });

  return (
    <Wrapper>
      <WrapperImage>
        <Image
          src={`/images/${isMobile ? "Playbar-mob.svg" : "Playbar.svg"}`}
        />
      </WrapperImage>
    </Wrapper>
  );
};

export default Player;
