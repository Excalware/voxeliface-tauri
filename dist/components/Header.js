import React from "react";
import { Header } from "voxeliface";
import WindowButtons from "./WindowButtons";
function TauriHeader({ children, ...props }) {
  return /* @__PURE__ */ React.createElement(Header, { ...props }, /* @__PURE__ */ React.createElement(WindowButtons, null), children);
}
;
export {
  TauriHeader as default
};
//# sourceMappingURL=Header.js.map