"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('uuid'),
    uuidv4 = _require.v4;

module.exports = {
  up: function () {
    var _up = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(queryInterface, DataTypes) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return queryInterface.createTable('user', {
                id: {
                  type: DataTypes.UUID,
                  primaryKey: true,
                  allowNull: false,
                  defaultValue: uuidv4()
                },
                login: {
                  type: DataTypes.STRING(50),
                  allowNull: false
                },
                password: {
                  type: DataTypes.STRING(100),
                  allowNull: false
                },
                email: {
                  type: DataTypes.STRING(50),
                  allowNull: false
                },
                phone: {
                  type: DataTypes.STRING(20),
                  allowNull: false
                },
                city: {
                  type: DataTypes.STRING(50)
                },
                street: {
                  type: DataTypes.STRING(50)
                },
                home: {
                  type: DataTypes.STRING(50)
                },
                apartment: {
                  type: DataTypes.STRING(50)
                },
                type: {
                  type: DataTypes.STRING(50),
                  allowNull: false
                }
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function up(_x, _x2) {
      return _up.apply(this, arguments);
    }

    return up;
  }(),
  down: function () {
    var _down = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(queryInterface) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return queryInterface.dropTable('user');

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function down(_x3) {
      return _down.apply(this, arguments);
    }

    return down;
  }()
};
//# sourceMappingURL=b_user.js.map