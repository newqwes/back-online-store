"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

module.exports = {
  up: function () {
    var _up = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(queryInterface, DataTypes) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return queryInterface.createTable('order_store', {
                id: {
                  type: DataTypes.INTEGER,
                  allowNull: false,
                  primaryKey: true,
                  autoIncrement: true
                },
                order_id: {
                  type: DataTypes.UUID,
                  allowNull: false,
                  references: {
                    model: 'order',
                    key: 'id'
                  },
                  onUpdate: 'CASCADE',
                  onDelete: 'CASCADE'
                },
                name: {
                  type: DataTypes.STRING(100),
                  allowNull: false
                },
                description: {
                  type: DataTypes.STRING(500),
                  allowNull: false
                },
                photo_url: {
                  type: DataTypes.STRING(500),
                  allowNull: false
                },
                unit_sign: {
                  type: DataTypes.STRING(10),
                  allowNull: false
                },
                currency_sign: {
                  type: DataTypes.STRING(10),
                  allowNull: false
                },
                price: {
                  type: DataTypes.DOUBLE,
                  allowNull: false
                },
                weight: {
                  type: DataTypes.DOUBLE,
                  allowNull: false
                },
                count: {
                  type: DataTypes.INTEGER,
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
              return queryInterface.dropTable('order_store');

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
//# sourceMappingURL=e_order_store.js.map