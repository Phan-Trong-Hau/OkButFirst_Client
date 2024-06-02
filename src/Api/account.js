import api from "../utils/apiCaller";

export const fetchAllAccount = async () => {
  const res = await api.get("/accounts");
  return res.data;
};

export const updateAccount = async (account) => {
  const res = await api.put(`/accounts/${account.email}`, account);
  return res.data;
};
