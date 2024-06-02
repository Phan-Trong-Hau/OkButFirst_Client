import api from "../utils/apiCaller";

const getAllProducts = async () => {
  const res = await api.get("v1/products");
  return res.data;
};

const createProduct = async (product) => {
  const res = await api.post("v1/products", product);
  return res.data;
};

const updateProduct = async (product) => {
  const res = await api.put(`v1/products/${product.productId}`, product);
  return res.data;
};

const deleteProduct = async (product) => {
  const res = await api.delete(`v1/products/${product._id}`);
  return res.data;
};

export const ProductApi = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
