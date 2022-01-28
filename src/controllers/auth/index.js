const login = (req, res) => {
  return res.json({ success: false });
};

const signup = (req, res) => {
  return res.json({ success: true });
};

const logout = (req, res) => {
  return res.json({ success: true });
};

module.exports = { login, logout, signup };
