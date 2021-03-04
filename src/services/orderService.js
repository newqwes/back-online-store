import { getUserId } from '../utils/user';
import mailer from '../utils/nodemailer';
import orderMessage from '../utils/orderMessage';
import createResponse from '../utils/createResponse';
import { getOrderData } from '../utils/extractData';

import OrderStore from '../database/models/orderStore';
import Order from '../database/models/order';

class OrderService {
  async createOrder(req) {
    try {
      const { body } = req;

      const userId = getUserId(req);

      if (userId) {
        const { cart } = body;
        const orderData = getOrderData(cart, userId);

        await Order.create(orderData, {
          include: { model: OrderStore, as: 'orderStore' },
        });
      }

      mailer(orderMessage(body));

      return createResponse(201, 'Successfully!', body);
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }

  async getUserOrders(req) {
    try {
      const userId = getUserId(req);

      const orders = await Order.findAll({
        where: { userId },
        include: { model: OrderStore, as: 'orderStore' },
      });

      return createResponse(200, 'Successfully!', orders);
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }

  async deleteUserOrder(orderId) {
    try {
      const isFound = await Order.destroy({ where: { orderId } });

      if (isFound) return createResponse(200, 'Successfully!', orderId);

      return createResponse(404, 'Not found', orderId);
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }
}

export default new OrderService();
