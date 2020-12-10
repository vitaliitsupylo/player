import { REQ_TEAMS, RES_TEAMS, ERR_TEAMS } from "../actions";

const teamsInitialState = {
  loading: false,
  loaded: false,
  error: false,
  data: null,
};

const teamsReducer = (state = teamsInitialState, action) => {
  switch (action.type) {
    case REQ_TEAMS:
      return {
        loading: true,
        loaded: false,
        error: false,
        data: null,
      };

    case RES_TEAMS:
      return {
        loading: false,
        loaded: true,
        error: false,
        data: action.payload,
      };
    case ERR_TEAMS:
      return {
        ...state,
        loaded: true,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default teamsReducer;
