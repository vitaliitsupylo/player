import React from "react";
import { Link } from "react-router-dom";

import { UserPhoto } from "./styled";

const UserInfo = () => {
  return (
    <Link to="/">
      <UserPhoto src={`/images/avatar.png`} />
    </Link>
  );
};

export default UserInfo;
