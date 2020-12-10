import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";

import { fetchTeams } from "store/actions";
import Logo from "components/Logo";
import UserInfo from "components/UserInfo";
import Search from "components/Search";

import {
  MainHeader,
  HeaderTop,
  HeaderBottom,
  MenuBtn,
  MenuBtnLine,
} from "./styled";

const Header = () => {
  const dispatch = useDispatch();

  const isMobile = useMediaQuery({
    query: "(max-device-width: 960px)",
  });

  useEffect(() => {
    dispatch(fetchTeams());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MainHeader>
      <HeaderTop>
        {isMobile && (
          <MenuBtn>
            <MenuBtnLine />
          </MenuBtn>
        )}
        {isMobile && <Logo />}
        <UserInfo />
      </HeaderTop>
      <HeaderBottom>
        <Search />
      </HeaderBottom>
    </MainHeader>
  );
};

export default Header;
