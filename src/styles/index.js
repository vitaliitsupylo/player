import { createGlobalStyle } from "styled-components";

import { styleReset } from "./reset";
import { styleDefault } from "./default";

export default createGlobalStyle`
  ${styleReset}
  ${styleDefault}
`;
