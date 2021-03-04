import { isArray, get, omit } from 'lodash';

/**
 * Returns the extracted object
 * @param {Object} data - received data from the table using Sequelize
 * @returns {Object}
 */
export const extractDataFromResponseDB = data => {
  if (isArray(data)) {
    const dataValues = get(data, [1, 'dataValues']);

    return dataValues;
  }

  const { dataValues } = data;

  if (dataValues) return dataValues;

  return data;
};

/**
 * Returns the object prepared for writing to the database
 * @param {Array} cart - Array of all orders
 * @param {string} userId - user ID
 * @returns {Object}
 */
export const getOrderData = (cart, userId) => {
  const date = Date.now();

  const extractCartData = ({ options, ...other }) => omit({ ...options, ...other }, 'id');

  const orderStore = cart.map(extractCartData);

  const orderData = { date, userId, orderStore };

  return orderData;
};
