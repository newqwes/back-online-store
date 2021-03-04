import productsService from '../services/productsService';

export const getProducts = async (req, res) => {
  const result = await productsService.getAll(req.query.type);

  res.status(result.status).json(result);
};

export const getByIDProduct = async (req, res) => {
  const result = await productsService.getByID(req.params.id);

  res.status(result.status).json(result);
};

export const createProduct = async (req, res) => {
  const result = await productsService.create(req.body);

  res.status(result.status).json(result);
};

export const updateProduct = async (req, res) => {
  const result = await productsService.update(req.params.id, req.body);

  res.status(result.status).json(result);
};

export const deleteProduct = async (req, res) => {
  const result = await productsService.delete(req.params.id);

  res.status(result.status).json(result);
};
