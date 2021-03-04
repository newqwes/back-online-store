"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = require("../utils/user");

var _createResponse = _interopRequireDefault(require("../utils/createResponse"));

var _user2 = _interopRequireDefault(require("../database/models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserService = /*#__PURE__*/function () {
  function UserService() {
    _classCallCheck(this, UserService);
  }

  _createClass(UserService, [{
    key: "findByEmail",
    value: function () {
      var _findByEmail = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(email) {
        var foundUser;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _user2.default.findOne({
                  where: {
                    email: email
                  }
                });

              case 2:
                foundUser = _context.sent;

                if (!foundUser) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", foundUser.toJSON());

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function findByEmail(_x) {
        return _findByEmail.apply(this, arguments);
      }

      return findByEmail;
    }()
  }, {
    key: "getInfo",
    value: function () {
      var _getInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req) {
        var id, user, responseUserData, responseUserDataWithToken;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                id = (0, _user.getUserId)(req);
                _context2.next = 4;
                return _user2.default.findOne({
                  where: {
                    id: id
                  }
                });

              case 4:
                user = _context2.sent;
                responseUserData = (0, _user.createResponseUserData)(user);
                responseUserDataWithToken = (0, _user.setUserDataWithToken)(responseUserData);
                return _context2.abrupt("return", (0, _createResponse.default)(200, 'Successfully!', responseUserDataWithToken));

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", (0, _createResponse.default)(500, 'Server Error', _context2.t0));

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 10]]);
      }));

      function getInfo(_x2) {
        return _getInfo.apply(this, arguments);
      }

      return getInfo;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req) {
        var body, id, userData, _userData, email, foundUser, password, user, responseUserData, responseUserDataWithToken;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                body = req.body;
                id = (0, _user.getUserId)(req);
                userData = (0, _user.createUserData)(body);
                _userData = userData, email = _userData.email;

                if (!email) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 8;
                return this.findByEmail(email);

              case 8:
                foundUser = _context3.sent;

                if (!(foundUser && foundUser.id !== id)) {
                  _context3.next = 11;
                  break;
                }

                return _context3.abrupt("return", (0, _createResponse.default)(409, 'email already exists!'));

              case 11:
                password = body.password;

                if (password) {
                  userData = (0, _user.setUserDataWithPassword)(userData, password);
                }

                _context3.next = 15;
                return _user2.default.update(userData, {
                  where: {
                    id: id
                  },
                  returning: true,
                  plain: true
                });

              case 15:
                user = _context3.sent;
                responseUserData = (0, _user.createResponseUserData)(user);
                responseUserDataWithToken = (0, _user.setUserDataWithToken)(responseUserData);
                return _context3.abrupt("return", (0, _createResponse.default)(200, 'Successfully!', responseUserDataWithToken));

              case 21:
                _context3.prev = 21;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", (0, _createResponse.default)(500, 'Server Error', _context3.t0));

              case 24:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 21]]);
      }));

      function update(_x3) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req) {
        var id;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                id = (0, _user.getUserId)(req);
                _context4.next = 4;
                return _user2.default.destroy({
                  where: {
                    id: id
                  }
                });

              case 4:
                return _context4.abrupt("return", (0, _createResponse.default)(200, 'Successfully!', id));

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", (0, _createResponse.default)(500, 'Server Error', _context4.t0));

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }));

      function _delete(_x4) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);

  return UserService;
}();

var _default = new UserService();

exports.default = _default;
//# sourceMappingURL=userService.js.map