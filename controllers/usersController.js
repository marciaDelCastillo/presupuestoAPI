const db = require("../database/models");
const bcrypt = require("bcryptjs");
//const { validationResult } = require("express-validator");
//const fetch = require("node-fetch");

module.exports = {

  //REGISTRO DE USUARIO
  addUser: async (req, res) => {
    try{
      let user = {
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password),
        idRol : req.body.idRol
      };
      user = await db.User.create(user);
      return res.status(200).json({
              status:200,
              data:user
          })
  }catch(error){
      console.log(error)
  }
  },
  //LOGEO DE USUARIO
  logUser: (req, res) => {
    
  },

  //DESLOGUEO DE USUARIO
  logOut: (req, res) => {
    
  },

};
