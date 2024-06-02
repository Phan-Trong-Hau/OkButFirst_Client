import api from "../utils/apiCaller";

export const fetchAllMerch = async () => {
  const res = await api.get("/merch");
  return res.data;
};

export const createMerch = async (merch) => {
  const res = await api.post("/merch", merch);
  return res.data;
};

export const updateMerch = async (merch) => {
  const res = await api.put(`/merch/${merch.merchId}`, merch);
  return res.data;
};

export const deleteMerch = async (merch) => {
  const res = await api.delete(`/merch/${merch._id}`);
  return res.data;
};
