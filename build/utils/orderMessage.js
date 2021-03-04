"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var orderMessage = function orderMessage(_ref) {
  var cart = _ref.cart,
      _ref$customer = _ref.customer,
      phone = _ref$customer.phone,
      email = _ref$customer.email,
      city = _ref$customer.city,
      home = _ref$customer.home,
      street = _ref$customer.street,
      apartment = _ref$customer.apartment;
  var rows = (0, _lodash.map)(cart, function (_ref2) {
    var count = _ref2.count,
        name = _ref2.name,
        description = _ref2.description,
        id = _ref2.id,
        currencySign = _ref2.currencySign,
        _ref2$options = _ref2.options,
        price = _ref2$options.price,
        weight = _ref2$options.weight;
    return "\n      <tr>\n      <td>".concat(id, "</td>\n      <td>").concat(name, "</td>\n      <td>").concat(description, "</td>\n      <td>").concat(count, "</td>\n      <td>").concat(weight, "</td>\n      <td>").concat(price + currencySign, "</td>\n    </tr>");
  });

  var _head = (0, _lodash.head)(cart),
      currencySign = _head.currencySign;

  var totalCost = (0, _lodash.reduce)(cart, function (sum, _ref3) {
    var count = _ref3.count,
        price = _ref3.options.price;
    return sum + count * price;
  }, 0);
  var html = "\n    <div>\n      <h2>\u041A\u043E\u0440\u0437\u0438\u043D\u0430</h2>\n      <table style=\"border-spacing: 30px;\">\n      <tr>\n        <th>ID \u0442\u043E\u0432\u0430\u0440\u0430</th>\n        <th>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435</th>\n        <th>\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</th>\n        <th>\u041A\u043E\u043B-\u0432\u043E</th>\n        <th>\u0412\u0435\u0441</th>\n        <th>\u0426\u0435\u043D\u0430</th>\n      </tr>\n      ".concat((0, _lodash.join)(rows, ''), "\n      </table>\n      <h3> \u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430\u043A\u0430\u0437\u0430: ").concat(totalCost.toFixed(2) + currencySign, "</h3>\n    </div>\n    <div style='margin-top: 30px;'>\n      <h2>\u0414\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F</h2>\n      <div>\u0422\u0435\u043B\u0435\u0444\u043E\u043D: <a href='tel:").concat(phone, "'>").concat(phone, "</a> </div>\n      <div>\u041F\u043E\u0447\u0442\u0430: ").concat(email, "</div>\n      <div>\u0413\u043E\u0440\u043E\u0434: ").concat(city, "</div>\n      <div>\u0423\u043B\u0438\u0446\u0430: ").concat(street, "</div>\n      <div>\u0414\u043E\u043C: ").concat(home, "</div>\n      <div>\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430: ").concat(apartment, "</div>\n    </div>");
  var to = [process.env.MAIL_ADMIN, email];
  return {
    html: html,
    to: to
  };
};

var _default = orderMessage;
exports.default = _default;
//# sourceMappingURL=orderMessage.js.map