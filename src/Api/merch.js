import api from "../utils/apiCaller";

const getAllMerch = async () => {
  const res = await api.get("v1/merch");
  return res.data;
};

const createMerch = async (merch) => {
  const res = await api.post("v1/merch", merch);
  return res.data;
};

const updateMerch = async (merch) => {
  const res = await api.put(`v1/merch/${merch.merchId}`, merch);
  return res.data;
};

const deleteMerch = async (merch) => {
  const res = await api.delete(`v1/merch/${merch._id}`);
  return res.data;
};

export const MerchApi = {
  getAllMerch,
  createMerch,
  updateMerch,
  deleteMerch,
};
