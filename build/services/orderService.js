"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = require("../utils/user");

var _nodemailer = _interopRequireDefault(require("../utils/nodemailer"));

var _orderMessage = _interopRequireDefault(require("../utils/orderMessage"));

var _createResponse = _interopRequireDefault(require("../utils/createResponse"));

var _extractData = require("../utils/extractData");

var _orderStore = _interopRequireDefault(require("../database/models/orderStore"));

var _order = _interopRequireDefault(require("../database/models/order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OrderService = /*#__PURE__*/function () {
  function OrderService() {
    _classCallCheck(this, OrderService);
  }

  _createClass(OrderService, [{
    key: "createOrder",
    value: function () {
      var _createOrder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req) {
        var body, userId, cart, orderData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                body = req.body;
                userId = (0, _user.getUserId)(req);

                if (!userId) {
                  _context.next = 8;
                  break;
                }

                cart = body.cart;
                orderData = (0, _extractData.getOrderData)(cart, userId);
                _context.next = 8;
                return _order.default.create(orderData, {
                  include: {
                    model: _orderStore.default,
                    as: 'orderStore'
                  }
                });

              case 8:
                (0, _nodemailer.default)((0, _orderMessage.default)(body));
                return _context.abrupt("return", (0, _createResponse.default)(201, 'Successfully!', body));

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", (0, _createResponse.default)(500, 'Server Error', _context.t0));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 12]]);
      }));

      function createOrder(_x) {
        return _createOrder.apply(this, arguments);
      }

      return createOrder;
    }()
  }, {
    key: "getUserOrders",
    value: function () {
      var _getUserOrders = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req) {
        var userId, orders;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                userId = (0, _user.getUserId)(req);
                _context2.next = 4;
                return _order.default.findAll({
                  where: {
                    userId: userId
                  },
                  include: {
                    model: _orderStore.default,
                    as: 'orderStore'
                  }
                });

              case 4:
                orders = _context2.sent;
                return _context2.abrupt("return", (0, _createResponse.default)(200, 'Successfully!', orders));

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", (0, _createResponse.default)(500, 'Server Error', _context2.t0));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }));

      function getUserOrders(_x2) {
        return _getUserOrders.apply(this, arguments);
      }

      return getUserOrders;
    }()
  }, {
    key: "deleteUserOrder",
    value: function () {
      var _deleteUserOrder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(orderId) {
        var isFound;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _order.default.destroy({
                  where: {
                    orderId: orderId
                  }
                });

              case 3:
                isFound = _context3.sent;

                if (!isFound) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return", (0, _createResponse.default)(200, 'Successfully!', orderId));

              case 6:
                return _context3.abrupt("return", (0, _createResponse.default)(404, 'Not found', orderId));

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", (0, _createResponse.default)(500, 'Server Error', _context3.t0));

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 9]]);
      }));

      function deleteUserOrder(_x3) {
        return _deleteUserOrder.apply(this, arguments);
      }

      return deleteUserOrder;
    }()
  }]);

  return OrderService;
}();

var _default = new OrderService();

exports.default = _default;
//# sourceMappingURL=orderService.js.map