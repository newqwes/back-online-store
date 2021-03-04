"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createResponseUserData = exports.createUserData = exports.setUserDataWithPassword = exports.setUserDataWithToken = exports.getUserId = void 0;

var _fp = require("lodash/fp");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _lodash = require("lodash");

var _extractData = require("./extractData");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Returns the user id if authorized else return null
 * @param {Object} req - receive a request from the user
 * @returns {(string|null)}
 */
var getUserId = function getUserId(req) {
  return (0, _fp.getOr)(null, ['user', 'id'], req);
};
/**
 * Returns the user data including token
 * @param {Object} data - ready user data
 * @returns {Object}
 */


exports.getUserId = getUserId;

var setUserDataWithToken = function setUserDataWithToken(data) {
  var token = _jsonwebtoken.default.sign({
    id: data.id
  }, process.env.ACCESS_TOKEN_SECRET);

  var dataWithToken = _objectSpread(_objectSpread({}, data), {}, {
    token: "Bearer ".concat(token)
  });

  return dataWithToken;
};
/**
 * Returns the user data including password
 * @param {Object} userData - ready user data
 * @param {string} password - new password entered by the user
 * @returns {Object}
 */


exports.setUserDataWithToken = setUserDataWithToken;

var setUserDataWithPassword = function setUserDataWithPassword(userData, password) {
  var salt = _bcryptjs.default.genSaltSync();

  var hashPassword = _bcryptjs.default.hashSync(password, salt);

  var userDataWithPassword = _objectSpread(_objectSpread({}, userData), {}, {
    password: hashPassword
  });

  return userDataWithPassword;
};
/**
 * Returns creates secure user data to write to the database
 * @param {Object} body - new entered user data
 * @returns {Object}
 */


exports.setUserDataWithPassword = setUserDataWithPassword;

var createUserData = function createUserData(body) {
  var userData = (0, _lodash.omit)(body, ['password', 'id', 'type']);
  return userData;
};
/**
 * Returns parses the object in such a way that there is no password in the response
 * @param {Object} userData - data came from database
 * @returns {Object}
 */


exports.createUserData = createUserData;

var createResponseUserData = function createResponseUserData(userData) {
  var extractedData = (0, _extractData.extractDataFromResponseDB)(userData);
  var responseUserData = (0, _lodash.omit)(extractedData, 'password');
  return responseUserData;
};

exports.createResponseUserData = createResponseUserData;
//# sourceMappingURL=user.js.map