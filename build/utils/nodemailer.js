"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transporter = _nodemailer.default.createTransport({
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.MAIL_ADMIN,
    pass: process.env.MAIL_PASS
  }
}, {
  from: "Pizza Store ".concat(process.env.MAIL_ADMIN),
  subject: 'New order!'
});

var mailer = function mailer(message) {
  transporter.sendMail(message, function (err, info) {
    if (err) {
      console.log(err);
      return;
    }

    console.log('Email sent: ', info);
  });
};

var _default = mailer;
exports.default = _default;
//# sourceMappingURL=nodemailer.js.map