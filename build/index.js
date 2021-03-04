"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _database = _interopRequireDefault(require("./database"));

var _swagger = _interopRequireDefault(require("../swagger.json"));

var _passport2 = _interopRequireDefault(require("./middleware/passport"));

var _authRoute = _interopRequireDefault(require("./routes/authRoute"));

var _orderRoute = _interopRequireDefault(require("./routes/orderRoute"));

var _productsRoute = _interopRequireDefault(require("./routes/productsRoute"));

var _userRoute = _interopRequireDefault(require("./routes/userRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv.default.config();

var app = (0, _express.default)();
app.use((0, _morgan.default)('dev'));
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_passport.default.initialize());
(0, _passport2.default)(_passport.default);
app.use('/api/auth', _authRoute.default);
app.use('/api/products', _productsRoute.default);
app.use('/api/order', _orderRoute.default);
app.use('/api/user', _userRoute.default);
var port = process.env.SERVER_PORT;
app.use('/api-docs', _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_swagger.default));
app.listen(port, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("Server is listening on port ".concat(port, "..."));
          _context.next = 3;
          return _database.default.authenticate();

        case 3:
          console.log('Database Connected!');

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
//# sourceMappingURL=index.js.map