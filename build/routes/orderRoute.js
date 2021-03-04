"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _checkRole = _interopRequireDefault(require("../middleware/checkRole"));

var _orderController = require("../controllers/orderController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var orderRoute = _express.default.Router();

var _process$env = process.env,
    GUEST_ROLE = _process$env.GUEST_ROLE,
    USER_ROLE = _process$env.USER_ROLE,
    ADMIN_ROLE = _process$env.ADMIN_ROLE;
orderRoute.post('/', (0, _checkRole.default)([GUEST_ROLE, USER_ROLE, ADMIN_ROLE]), _orderController.createOrder);
orderRoute.get('/', (0, _checkRole.default)([USER_ROLE, ADMIN_ROLE]), _orderController.getUserOrders);
orderRoute.delete('/delete/:orderId', (0, _checkRole.default)([ADMIN_ROLE]), _orderController.deleteUserOrder);
var _default = orderRoute;
exports.default = _default;
//# sourceMappingURL=orderRoute.js.map