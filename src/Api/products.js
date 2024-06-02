import api from "../utils/apiCaller";

export const getAllProducts = async () => {
  const res = await api.get("/products");
  return res.data;
};

export const createProduct = async (product) => {
  const res = await api.post("/products", product);
  return res.data;
};

export const updateProduct = async (product) => {
  const res = await api.put(`/products/${product.productId}`, product);
  return res.data;
};

export const deleteProduct = async (product) => {
  const res = await api.delete(`/products/${product._id}`);
  return res.data;
};
