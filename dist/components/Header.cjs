"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _voxeliface = require('voxeliface');
var _WindowButtons = require('./WindowButtons'); var _WindowButtons2 = _interopRequireDefault(_WindowButtons);
function TauriHeader({ children, ...props }) {
  return /* @__PURE__ */ _react2.default.createElement(_voxeliface.Header, { ...props }, /* @__PURE__ */ _react2.default.createElement(_WindowButtons2.default, null), children);
}
;


exports.default = TauriHeader;
//# sourceMappingURL=Header.cjs.map