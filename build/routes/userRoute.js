"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _checkRole = _interopRequireDefault(require("../middleware/checkRole"));

var _userController = require("../controllers/userController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userRoute = _express.default.Router();

var _process$env = process.env,
    USER_ROLE = _process$env.USER_ROLE,
    ADMIN_ROLE = _process$env.ADMIN_ROLE;
userRoute.get('/', (0, _checkRole.default)([USER_ROLE, ADMIN_ROLE]), _userController.getUserInfo);
userRoute.put('/', (0, _checkRole.default)([USER_ROLE, ADMIN_ROLE]), _userController.updateUser);
userRoute.delete('/delete/', (0, _checkRole.default)([USER_ROLE, ADMIN_ROLE]), _userController.deleteUser);
var _default = userRoute;
exports.default = _default;
//# sourceMappingURL=userRoute.js.map