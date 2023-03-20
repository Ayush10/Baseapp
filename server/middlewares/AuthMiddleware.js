const { verify } = require("jsonwebtoken");

//checks token passed from front end in the header when calling an API
//Call to verify user authentication
const validateToken = (req, res, next) => {
  const accessToken = req.header("Authorization");
  if (!accessToken) return res.json({ error: "User not logged in!" });

  try {
    const isTokenValid = verify(accessToken, "topsecret");

    if (isTokenValid) {
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }
};

module.exports = { validateToken };
