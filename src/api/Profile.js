const profile = async (userInfo) => {
  const res = await instance.post("/api/auth/profile", userInfo);
  setToken(res.data.token);
  return res.data;
};

export { profile };
