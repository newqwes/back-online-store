"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _product = _interopRequireDefault(require("../database/models/product"));

var _option = _interopRequireDefault(require("../database/models/option"));

var _createResponse = _interopRequireDefault(require("../utils/createResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ProductsService = /*#__PURE__*/function () {
  function ProductsService() {
    _classCallCheck(this, ProductsService);
  }

  _createClass(ProductsService, [{
    key: "getAll",
    value: function () {
      var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(type) {
        var products;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _product.default.findAll({
                  where: {
                    type: type
                  },
                  include: {
                    model: _option.default,
                    as: 'options'
                  }
                });

              case 3:
                products = _context.sent;
                return _context.abrupt("return", (0, _createResponse.default)(200, 'Successfully!', products));

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", (0, _createResponse.default)(500, 'Server Error', _context.t0));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function getAll(_x) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "getByID",
    value: function () {
      var _getByID = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        var product;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _product.default.findOne({
                  where: {
                    id: id
                  },
                  include: {
                    model: _option.default,
                    as: 'options'
                  }
                });

              case 3:
                product = _context2.sent;

                if (!product) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", (0, _createResponse.default)(200, 'Successfully!', product));

              case 6:
                return _context2.abrupt("return", (0, _createResponse.default)(404, 'Not found', id));

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", (0, _createResponse.default)(500, 'Server Error', _context2.t0));

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }));

      function getByID(_x2) {
        return _getByID.apply(this, arguments);
      }

      return getByID;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id, body) {
        var options, param, optionsWithId, _yield$Product$update, _yield$Product$update2, isFound, product;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                options = body.options, param = _objectWithoutProperties(body, ["options"]);
                optionsWithId = options.map(function (prevOption) {
                  var option = prevOption;
                  option.productId = Number(id);
                  return option;
                });
                _context3.next = 5;
                return _product.default.update(param, {
                  where: {
                    id: id
                  }
                });

              case 5:
                _yield$Product$update = _context3.sent;
                _yield$Product$update2 = _slicedToArray(_yield$Product$update, 1);
                isFound = _yield$Product$update2[0];

                if (isFound) {
                  _context3.next = 10;
                  break;
                }

                return _context3.abrupt("return", (0, _createResponse.default)(404, 'Not found', id));

              case 10:
                _context3.next = 12;
                return _option.default.destroy({
                  where: {
                    productId: id
                  }
                });

              case 12:
                _context3.next = 14;
                return _option.default.bulkCreate(optionsWithId);

              case 14:
                _context3.next = 16;
                return _product.default.findOne({
                  where: {
                    id: id
                  },
                  include: {
                    model: _option.default,
                    as: 'options'
                  }
                });

              case 16:
                product = _context3.sent;
                return _context3.abrupt("return", (0, _createResponse.default)(200, 'Successfully!', product));

              case 20:
                _context3.prev = 20;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", (0, _createResponse.default)(500, 'Server Error', _context3.t0));

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 20]]);
      }));

      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id) {
        var isFound;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _product.default.destroy({
                  where: {
                    id: id
                  }
                });

              case 3:
                isFound = _context4.sent;

                if (!isFound) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt("return", (0, _createResponse.default)(200, 'Successfully!', id));

              case 6:
                return _context4.abrupt("return", (0, _createResponse.default)(404, 'Not found', id));

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", (0, _createResponse.default)(500, 'Server Error', _context4.t0));

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 9]]);
      }));

      function _delete(_x5) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(body) {
        var product;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _product.default.create(body, {
                  include: {
                    model: _option.default,
                    as: 'options'
                  }
                });

              case 3:
                product = _context5.sent;
                return _context5.abrupt("return", (0, _createResponse.default)(201, 'Successfully!', product));

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", (0, _createResponse.default)(500, 'Server Error', _context5.t0));

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 7]]);
      }));

      function create(_x6) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }]);

  return ProductsService;
}();

var _default = new ProductsService();

exports.default = _default;
//# sourceMappingURL=productsService.js.map