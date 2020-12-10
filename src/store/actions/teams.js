import config from "config";

export const REQ_TEAMS = "REQ_TEAMS";
export const RES_TEAMS = "RES_TEAMS";
export const ERR_TEAMS = "ERR_TEAMS";

export const fetchTeams = (teams = "English%20Premier%20League", data = {}) => (
  dispatch,
  getState
) => {
  dispatch({
    type: "PROMISE",
    actions: [REQ_TEAMS, RES_TEAMS, ERR_TEAMS],
    promise: fetch(`${config.domainAPI}search_all_teams.php?l=${teams}`, {
      method: "GET",
      Accept: "application/json",
      "Content-Type": "application/json",
      ...data,
    }),
  });
};
