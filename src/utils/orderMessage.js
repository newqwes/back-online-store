import { head, reduce, join, map } from 'lodash';

const orderMessage = ({ cart, customer: { phone, email, city, home, street, apartment } }) => {
  const rows = map(
    cart,
    ({ count, name, description, id, currencySign, options: { price, weight } }) => `
      <tr>
      <td>${id}</td>
      <td>${name}</td>
      <td>${description}</td>
      <td>${count}</td>
      <td>${weight}</td>
      <td>${price + currencySign}</td>
    </tr>`
  );

  const { currencySign } = head(cart);

  const totalCost = reduce(cart, (sum, { count, options: { price } }) => sum + count * price, 0);

  const html = `
    <div>
      <h2>Корзина</h2>
      <table style="border-spacing: 30px;">
      <tr>
        <th>ID товара</th>
        <th>Название</th>
        <th>Описание</th>
        <th>Кол-во</th>
        <th>Вес</th>
        <th>Цена</th>
      </tr>
      ${join(rows, '')}
      </table>
      <h3> Общая стоимость заказа: ${totalCost.toFixed(2) + currencySign}</h3>
    </div>
    <div style='margin-top: 30px;'>
      <h2>Данные пользователя</h2>
      <div>Телефон: <a href='tel:${phone}'>${phone}</a> </div>
      <div>Почта: ${email}</div>
      <div>Город: ${city}</div>
      <div>Улица: ${street}</div>
      <div>Дом: ${home}</div>
      <div>Квартира: ${apartment}</div>
    </div>`;

  const to = [process.env.MAIL_ADMIN, email];

  return { html, to };
};

export default orderMessage;
