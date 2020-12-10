import React from "react";
import { Link } from "react-router-dom";

import { LogoIcon } from "components/Icons";

const LogoComponent = () => {
  return (
    <Link to="/">
      <LogoIcon width="74px" height="24px" />
    </Link>
  );
};

export default LogoComponent;
