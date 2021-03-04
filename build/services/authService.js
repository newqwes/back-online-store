"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _createResponse = _interopRequireDefault(require("../utils/createResponse"));

var _user = require("../utils/user");

var _userService = _interopRequireDefault(require("./userService"));

var _user2 = _interopRequireDefault(require("../database/models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AuthService = /*#__PURE__*/function () {
  function AuthService() {
    _classCallCheck(this, AuthService);
  }

  _createClass(AuthService, [{
    key: "login",
    value: function () {
      var _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var email, password, foundUser, userPassword, isPasswordEqual, responseUserData, responseUserDataWithToken;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                email = _ref.email, password = _ref.password;
                _context.prev = 1;
                _context.next = 4;
                return _userService.default.findByEmail(email);

              case 4:
                foundUser = _context.sent;

                if (foundUser) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", (0, _createResponse.default)(401, 'Incorrect email or password!'));

              case 7:
                userPassword = foundUser.password;
                isPasswordEqual = _bcryptjs.default.compareSync(password, userPassword);

                if (!isPasswordEqual) {
                  _context.next = 13;
                  break;
                }

                responseUserData = (0, _user.createResponseUserData)(foundUser);
                responseUserDataWithToken = (0, _user.setUserDataWithToken)(responseUserData);
                return _context.abrupt("return", (0, _createResponse.default)(200, 'Successfully!', responseUserDataWithToken));

              case 13:
                return _context.abrupt("return", (0, _createResponse.default)(401, 'Incorrect email or password!'));

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", (0, _createResponse.default)(500, 'Server Error', _context.t0));

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 16]]);
      }));

      function login(_x) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(body) {
        var email, password, foundUser, userData, userDataWithPassword, user, responseUserData, responseUserDataWithToken;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                email = body.email, password = body.password;
                _context2.next = 4;
                return _userService.default.findByEmail(email);

              case 4:
                foundUser = _context2.sent;

                if (!foundUser) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", (0, _createResponse.default)(409, 'email already exists!'));

              case 7:
                userData = (0, _user.createUserData)(body);
                userDataWithPassword = (0, _user.setUserDataWithPassword)(userData, password);
                _context2.next = 11;
                return _user2.default.create(userDataWithPassword);

              case 11:
                user = _context2.sent;
                responseUserData = (0, _user.createResponseUserData)(user);
                responseUserDataWithToken = (0, _user.setUserDataWithToken)(responseUserData);
                return _context2.abrupt("return", (0, _createResponse.default)(201, 'Successfully!', responseUserDataWithToken));

              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", (0, _createResponse.default)(500, 'Server Error', _context2.t0));

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 17]]);
      }));

      function create(_x2) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }]);

  return AuthService;
}();

var _default = new AuthService();

exports.default = _default;
//# sourceMappingURL=authService.js.map