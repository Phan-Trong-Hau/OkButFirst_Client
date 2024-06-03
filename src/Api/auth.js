import api from "../utils/apiCaller";

const getLogin = async (account) => {
  const res = await api.get("auth/login", account);
  return res.data;
};

const login = async (account) => {
  const res = await api.post("auth/login", account);
  return res.data;
};

const logout = async () => {
  const res = await api.get("auth/logout");
  return res.data;
};

const signup = async (account) => {
  const res = await api.post("auth/signup", account);
  return res.data;
};

export const Auth = {
  getLogin,
  login,
  logout,
  signup,
};
