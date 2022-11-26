const User = require('../models/user');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const oldUser = await User.findOne({ email });

  if (oldUser) {
    return res.status(401).json({ error: 'This email is already in use' });
  }

  const newUser = new User({ name, email, password });

  await newUser.save();

  return res.status(201).json({ user: newUser });
};

module.exports = {
  createUser,
};
