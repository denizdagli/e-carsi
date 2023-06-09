exports.getUsers = async (req, res) => {
  res.json({
    message: "getUsers is successfull",
  });
};

exports.addUser = async (req, res) => {
  const username = req.body.username;
  res.json({
    username: username,
    message: "addUser is successfull",
  });
};
