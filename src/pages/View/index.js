import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchTeam } from "store/actions";

import { SiteIcon, TwitterIcon } from "components/Icons";
import { Wrapper, Title, WrapperContent, Image, Links } from "./styled";

const View = (props) => {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.team);
  const { match, history } = props;
  const { viewId } = match.params;
  const [textInfo, setTextInfo] = useState(null);
  const { strLeague, strTeamBanner, strWebsite, strTwitter } = data
    ? data.teams[0]
    : {};

  useEffect(() => {
    dispatch(fetchTeam(viewId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewId]);

  useEffect(() => {
    error && history.push("/");
    data && typeof data.teams === "string" && setTextInfo(data.teams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, data]);

  return (
    <Wrapper>
      <Title>{strLeague || textInfo}</Title>
      {!textInfo && (
        <WrapperContent>
          <Image src={strTeamBanner} />
          <Links>
            <Link
              to={{
                pathname: `https://${strWebsite}`,
              }}
              target="_blank"
            >
              <SiteIcon width="30px" height="30px" />
            </Link>
            <Link
              to={{
                pathname: `https://${strTwitter}`,
              }}
              target="_blank"
            >
              <TwitterIcon width="30px" height="30px" />
            </Link>
          </Links>
        </WrapperContent>
      )}
    </Wrapper>
  );
};

export default View;
