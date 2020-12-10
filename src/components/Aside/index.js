import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import { Wrapper, WrapperImage, Image } from "./styled";

const Aside = () => {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 960px)",
  });

  return isMobile ? null : (
    <Wrapper>
      <WrapperImage>
        <Link to="/">
          <Image src={`/images/Sidebar.svg`} />
        </Link>
      </WrapperImage>
    </Wrapper>
  );
};

export default Aside;
