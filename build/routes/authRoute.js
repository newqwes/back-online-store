"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _checkRole = _interopRequireDefault(require("../middleware/checkRole"));

var _authController = require("../controllers/authController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authRoute = _express.default.Router();

var _process$env = process.env,
    GUEST_ROLE = _process$env.GUEST_ROLE,
    USER_ROLE = _process$env.USER_ROLE,
    ADMIN_ROLE = _process$env.ADMIN_ROLE;
authRoute.post('/login', (0, _checkRole.default)([USER_ROLE, ADMIN_ROLE, GUEST_ROLE]), _authController.login);
authRoute.post('/register', (0, _checkRole.default)([USER_ROLE, ADMIN_ROLE, GUEST_ROLE]), _authController.register);
var _default = authRoute;
exports.default = _default;
//# sourceMappingURL=authRoute.js.map