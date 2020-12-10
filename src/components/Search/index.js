import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import onClickOutside from "react-onclickoutside";
import { Link } from "react-router-dom";

import { SearchIcon } from "components/Icons";

import {
  SearchWrapper,
  InputWrapper,
  Input,
  InputShadow,
  SearchResult,
  SearchResultWrapper,
  ResultLine,
  ResultName,
  ResultImageWrap,
  ResultImage,
} from "./styled";

const Search = () => {
  const { data } = useSelector((state) => state.teams);
  const history = useHistory();
  const [opened, changeOpen] = useState(false);
  const [value, changeValue] = useState("");
  const [filterElements, changeFilterElements] = useState([]);
  Search.handleClickOutside = () => changeOpen(false);

  const goToTeam = (idTeam) => () => {
    changeValue("");
    changeOpen(false);
    changeFilterElements(data ? data.teams : []);
    history.push(`/${idTeam}`);
  };

  const createMarkup = (string) => {
    return { __html: string };
  };

  const search = (value, elem) =>
    elem.strTeam.toLowerCase().indexOf(`${value.toLowerCase()}`);

  const sort = (value) => (first, second) => {
    const countFirst = search(value, first);
    const countSecond = search(value, second);
    return !countFirst || !countSecond ? countFirst - countSecond : false;
  };

  const wrapSpan = (string) =>
    string
      .split("")
      .map((elem) => `<span>${elem}</span>`)
      .join("");

  const wrapSpanRandom = (team, value) => {
    const arrTeam = team.split("");
    const arrValue = value.split("");
    return arrTeam
      .map((elem) => {
        return arrValue.find((val) => val.toLowerCase() === elem.toLowerCase())
          ? `<span>${elem}</span>`
          : elem;
      })
      .join("");
  };

  const shadowProgress = () => {
    const string = filterElements.length ? filterElements[0].strTeam : "";
    const startHtml = wrapSpan(value);
    return `${startHtml}${string.slice(value.length)}`;
  };

  const highlightListResult = (elem) => {
    const team = elem.strTeam;
    const start = team.slice(0, value.length);
    return search(value, elem) === 0
      ? `${wrapSpan(start)}${team.slice(start.length)}`
      : wrapSpanRandom(team, value);
  };

  const inputValue = (event) => {
    const inputValue = event.target.value;
    changeValue(inputValue);
    changeFilterElements(
      data.teams
        .filter((elem) => search(inputValue, elem) >= 0)
        .sort(sort(inputValue))
    );
  };

  useEffect(() => {
    changeFilterElements(data ? data.teams : []);
  }, [data]);

  return (
    <SearchWrapper>
      <InputWrapper>
        <SearchIcon width="24px" height="24px" />
        <Input
          onFocus={() => changeOpen(true)}
          onInput={inputValue}
          value={value}
          placeholder="Search for songs, artists etc ..."
        />
        {!!value.length &&
          !!filterElements.length &&
          !search(value, filterElements[0]) && (
            <InputShadow
              dangerouslySetInnerHTML={createMarkup(shadowProgress())}
            />
          )}
      </InputWrapper>
      {opened && data && !!filterElements.length && (
        <SearchResult>
          <SearchResultWrapper>
            {filterElements.map((team) => (
              <ResultLine key={team.idTeam} onClick={goToTeam(team.idTeam)}>
                <ResultImageWrap>
                  <ResultImage src={team.strTeamBanner} />
                </ResultImageWrap>
                <ResultName
                  dangerouslySetInnerHTML={createMarkup(
                    highlightListResult(team)
                  )}
                />
              </ResultLine>
            ))}
          </SearchResultWrapper>
        </SearchResult>
      )}
    </SearchWrapper>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => Search.handleClickOutside,
};
Search.prototype = {};

export default onClickOutside(Search, clickOutsideConfig);
