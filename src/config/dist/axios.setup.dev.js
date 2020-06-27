"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_axios["default"].defaults.baseURL = "http://localhost:8080";
var UNPROTECTED_PATHS = ["login", "register", "reset-password"];

var isUnprotectedPath = function isUnprotectedPath(url) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = UNPROTECTED_PATHS[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var path = _step.value;

      if (url.includes(path)) {
        return true;
      }

      return false;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

_axios["default"].interceptors.request.use(function _callee(config) {
  var token;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!isUnprotectedPath(config.url)) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return", config);

        case 2:
          token = localStorage.getItem("ACCESS_TOKEN");
          config.headers["Authorization"] = "Bearer ".concat(token);
          return _context.abrupt("return", config);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}, function _callee2(error) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          throw error;

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
});

var _default = _axios["default"];
exports["default"] = _default;