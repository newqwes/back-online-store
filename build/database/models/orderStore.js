"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var OrderStore = /*#__PURE__*/function (_Model) {
  _inherits(OrderStore, _Model);

  var _super = _createSuper(OrderStore);

  function OrderStore() {
    _classCallCheck(this, OrderStore);

    return _super.apply(this, arguments);
  }

  return OrderStore;
}(_sequelize.Model);

OrderStore.init({
  id: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  orderId: {
    type: _sequelize.DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'order',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  name: {
    type: _sequelize.DataTypes.STRING(100),
    allowNull: false
  },
  description: {
    type: _sequelize.DataTypes.STRING(500),
    allowNull: false
  },
  photoUrl: {
    type: _sequelize.DataTypes.STRING(500),
    allowNull: false
  },
  unitSign: {
    type: _sequelize.DataTypes.STRING(10),
    allowNull: false
  },
  currencySign: {
    type: _sequelize.DataTypes.STRING(10),
    allowNull: false
  },
  price: {
    type: _sequelize.DataTypes.DOUBLE,
    allowNull: false
  },
  weight: {
    type: _sequelize.DataTypes.DOUBLE,
    allowNull: false
  },
  count: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize: _.default,
  tableName: 'order_store',
  timestamps: false,
  underscored: true
});
var _default = OrderStore;
exports.default = _default;
//# sourceMappingURL=orderStore.js.map