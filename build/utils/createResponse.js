"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Returns the Object with status, message and data
 * @param {number} status - HTTP status code
 * @param {string} message - response message
 * @param {Object} data - response obj
 * @returns {Object}
 */
var _default = function _default(status, message) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return {
    status: status,
    message: message,
    data: data
  };
};

exports.default = _default;
//# sourceMappingURL=createResponse.js.map