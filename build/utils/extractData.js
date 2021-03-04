"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrderData = exports.extractDataFromResponseDB = void 0;

var _lodash = require("lodash");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Returns the extracted object
 * @param {Object} data - received data from the table using Sequelize
 * @returns {Object}
 */
var extractDataFromResponseDB = function extractDataFromResponseDB(data) {
  if ((0, _lodash.isArray)(data)) {
    var _dataValues = (0, _lodash.get)(data, [1, 'dataValues']);

    return _dataValues;
  }

  var dataValues = data.dataValues;
  if (dataValues) return dataValues;
  return data;
};
/**
 * Returns the object prepared for writing to the database
 * @param {Array} cart - Array of all orders
 * @param {string} userId - user ID
 * @returns {Object}
 */


exports.extractDataFromResponseDB = extractDataFromResponseDB;

var getOrderData = function getOrderData(cart, userId) {
  var date = Date.now();

  var extractCartData = function extractCartData(_ref) {
    var options = _ref.options,
        other = _objectWithoutProperties(_ref, ["options"]);

    return (0, _lodash.omit)(_objectSpread(_objectSpread({}, options), other), 'id');
  };

  var orderStore = cart.map(extractCartData);
  var orderData = {
    date: date,
    userId: userId,
    orderStore: orderStore
  };
  return orderData;
};

exports.getOrderData = getOrderData;
//# sourceMappingURL=extractData.js.map