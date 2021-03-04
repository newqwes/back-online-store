import Product from '../database/models/product';
import Option from '../database/models/option';
import createResponse from '../utils/createResponse';

class ProductsService {
  async getAll(type) {
    try {
      const products = await Product.findAll({
        where: { type },
        include: { model: Option, as: 'options' },
      });

      return createResponse(200, 'Successfully!', products);
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }

  async getByID(id) {
    try {
      const product = await Product.findOne({
        where: { id },
        include: { model: Option, as: 'options' },
      });

      if (product) return createResponse(200, 'Successfully!', product);

      return createResponse(404, 'Not found', id);
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }

  async update(id, body) {
    try {
      const { options, ...param } = body;

      const optionsWithId = options.map(prevOption => {
        const option = prevOption;
        option.productId = Number(id);

        return option;
      });

      const [isFound] = await Product.update(param, {
        where: { id },
      });

      if (!isFound) return createResponse(404, 'Not found', id);

      await Option.destroy({ where: { productId: id } });

      await Option.bulkCreate(optionsWithId);

      const product = await Product.findOne({
        where: { id },
        include: { model: Option, as: 'options' },
      });

      return createResponse(200, 'Successfully!', product);
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }

  async delete(id) {
    try {
      const isFound = await Product.destroy({ where: { id } });

      if (isFound) return createResponse(200, 'Successfully!', id);

      return createResponse(404, 'Not found', id);
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }

  async create(body) {
    try {
      const product = await Product.create(body, {
        include: { model: Option, as: 'options' },
      });

      return createResponse(201, 'Successfully!', product);
    } catch (error) {
      return createResponse(500, 'Server Error', error);
    }
  }
}

export default new ProductsService();
