"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Popup = function Popup(_ref) {
  var title = _ref.title,
    content = _ref.content,
    isDarkMode = _ref.isDarkMode,
    _ref$primaryColor = _ref.primaryColor,
    primaryColor = _ref$primaryColor === void 0 ? 'blue' : _ref$primaryColor,
    onClose = _ref.onClose,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? 'default' : _ref$style;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isVisible = _useState2[0],
    setIsVisible = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isClosing = _useState4[0],
    setIsClosing = _useState4[1];
  (0, _react.useEffect)(function () {
    setTimeout(function () {
      return setIsVisible(true);
    }, 50);
  }, []);
  var handleClose = function handleClose() {
    setIsClosing(true);
    setTimeout(function () {
      setIsVisible(false);
      onClose();
    }, 300);
  };
  var themeClass = isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  var buttonClass = isDarkMode ? "bg-".concat(primaryColor, "-700") : "bg-".concat(primaryColor, "-500");
  var styleVariants = {
    "default": '',
    rounded: 'rounded-lg',
    flat: 'shadow-none',
    shadow: 'shadow-xl'
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0 bg-black transition-opacity duration-300 ".concat(isVisible && !isClosing ? 'opacity-50' : 'opacity-0'),
    onClick: handleClose
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "transform transition-all duration-300 ".concat(isVisible && !isClosing ? 'scale-100 opacity-100' : 'scale-90 opacity-0', " \n                    p-6 w-full max-w-lg mx-auto ").concat(themeClass, " ").concat(styleVariants[style], " shadow-lg rounded-lg z-10")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between items-center border-b pb-3"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-xl font-semibold"
  }, title), /*#__PURE__*/_react["default"].createElement("button", {
    className: "text-gray-500 hover:text-gray-800",
    onClick: handleClose
  }, "X")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/_react["default"].createElement("p", null, content)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-end mt-6"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "text-white py-2 px-4 rounded-lg ".concat(buttonClass, " hover:bg-").concat(primaryColor, "-600"),
    onClick: handleClose
  }, "Close"))));
};
Popup.propTypes = {
  title: _propTypes["default"].string.isRequired,
  content: _propTypes["default"].string.isRequired,
  isDarkMode: _propTypes["default"].bool,
  onClose: _propTypes["default"].func.isRequired,
  style: _propTypes["default"].oneOf(['default', 'rounded', 'flat', 'shadow'])
};
var _default = exports["default"] = Popup;