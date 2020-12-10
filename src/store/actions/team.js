import config from "config";

export const REQ_TEAM = "REQ_TEAM";
export const RES_TEAM = "RES_TEAM";
export const ERR_TEAM = "ERR_TEAM";

export const fetchTeam = (teamId, data = {}) => (dispatch, getState) => {
  dispatch({
    type: "PROMISE",
    actions: [REQ_TEAM, RES_TEAM, ERR_TEAM],
    promise: fetch(`${config.domainAPI}lookupteam.php?id=${teamId}`, {
      method: "GET",
      Accept: "application/json",
      "Content-Type": "application/json",
      ...data,
    }),
  });
};
