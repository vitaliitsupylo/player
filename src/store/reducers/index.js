import { combineReducers } from "redux";

import teams from "./teams";
import team from "./team";

const reducers = combineReducers({
  teams,
  team,
});

export default reducers;
