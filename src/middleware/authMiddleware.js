const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const userToken = req.cookies.userToken;

  if (!userToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decodedToken = jwt.verify(userToken, process.env.JWT_SECRET);
    req.user = decodedToken;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { requireAuth };
