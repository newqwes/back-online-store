"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _passport = _interopRequireDefault(require("passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GUEST_ROLE = process.env.GUEST_ROLE;

var checkRole = function checkRole(roles) {
  return function (req, res, next) {
    _passport.default.authenticate('jwt', {
      session: false
    }, function (err, user) {
      if (err) {
        res.status(403).send('Not authorized to access');
        return;
      }

      if (roles.includes(GUEST_ROLE) && !user) {
        next();
        return;
      }

      if (roles.includes(user.type)) {
        req.user = user;
        next();
        return;
      }

      res.status(403).send('Not authorized to access');
    })(req, res, next);
  };
};

var _default = checkRole;
exports.default = _default;
//# sourceMappingURL=checkRole.js.map