"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _checkRole = _interopRequireDefault(require("../middleware/checkRole"));

var _productsController = require("../controllers/productsController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _process$env = process.env,
    GUEST_ROLE = _process$env.GUEST_ROLE,
    USER_ROLE = _process$env.USER_ROLE,
    ADMIN_ROLE = _process$env.ADMIN_ROLE;

var productsRoute = _express.default.Router();

productsRoute.get('/', (0, _checkRole.default)([USER_ROLE, ADMIN_ROLE, GUEST_ROLE]), _productsController.getProducts);
productsRoute.get('/:id', (0, _checkRole.default)([USER_ROLE, ADMIN_ROLE, GUEST_ROLE]), _productsController.getByIDProduct);
productsRoute.post('/', (0, _checkRole.default)([ADMIN_ROLE]), _productsController.createProduct);
productsRoute.put('/:id', (0, _checkRole.default)([ADMIN_ROLE]), _productsController.updateProduct);
productsRoute.delete('/:id', (0, _checkRole.default)([ADMIN_ROLE]), _productsController.deleteProduct);
var _default = productsRoute;
exports.default = _default;
//# sourceMappingURL=productsRoute.js.map