const { User } = require("../db/database");
const bcrypt = require("bcryptjs");
//const moment = require("moment");
//const jwt = require("jwt-simple");
const { generateToken } = require("../jwt/generateToken");

const createUser = async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    await User.create(req.body);
    res.json({ message: "usuario registrado" });
    //console.log(user);
  } catch (error) {
    res.json({ message: error });
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { user: req.body.user } });

    if (user) {
      const password = bcrypt.compareSync(req.body.password, user.password);
      if (password) {
        //res.json({ message: "usuario logeado" });
        res.json({ token: generateToken(user) });
        console.log("correcto");
      } else {
        res.json({ message: "contraseña incorrecta" });
        console.log("incorrecto");
      }
    } else {
      res.json({ message: "usuario y/o password son incorrectos" });
      console.log("incorrecto");
    }
  } catch (error) {
    res.json("ha ocurrido un error");
    console.log(error);
  }
};

/*const generateToken = (user) => {
  const payload = {
    userId: user.id,
    createdAt: moment().unix(),
    expiredAt: moment().add(5, "minutes").unix(),
  };
  return jwt.encode(payload, "secretKey");
};*/

module.exports = {
  createUser,
  loginUser,
};
