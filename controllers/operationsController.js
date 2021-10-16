const db = require("../database/models");
//const bcrypt = require("bcryptjs");
//const { validationResult } = require("express-validator");
//const fetch = require("node-fetch");

module.exports = {
    //LISTA DE OPERACIONES
    list: async (req, res) => {
        try{
            let operations = await db.Operation.findAll({
                include: [
                    {association: "user"},
                    {association: "type"},
                    {association: "category"}
                  ],
            });
            return res.status(200).json({
                    total:operations.length,
                    status:200,
                    data:operations
                })
        }catch(error){
            console.log(error)
        }
        
    },
    //CARGA DE NUEVA OPERACION
    //req.body = date,concept,amount,idUser,idCategory,idType
    store: async (req, res) => {
        try{
            let operation = await db.Operation.create(req.body);
            return res.status(200).json({
                    status:200,
                    data:operation
                })
        }catch(error){
            console.log(error)
        }
    },
    //LISTA DE OPERACIONES FILTRADA POR TIPO
    filterByType: async (req, res) => {
        try{
            let operations = await db.Operation.findAll({
                where: {
                    idType: +req.params.id
                  },
                include: [
                    {association: "user"},
                    {association: "type"},
                    {association: "category"}
                  ],
            });
            return res.status(200).json({
                    total:operations.length,
                    type:operations[0].type,
                    status:200,
                    data:operations
                })
        }catch(error){
            console.log(error)
        }
    },
    //LISTA DE OPERACIONES FILTRADA POR CATEGORIA
    filterByCategory: async (req, res) => {
        try{
            let operations = await db.Operation.findAll({
                where: {
                    idCategory: +req.params.id
                  },
                include: [
                    {association: "user"},
                    {association: "type"},
                    {association: "category"}
                  ],
            });
            return res.status(200).json({
                    total:operations.length,
                    category:operations[0].category,
                    status:200,
                    data:operations
                })
        }catch(error){
            console.log(error)
        }
    },

    //DETALLE DE CADA OPERACION POR ID
    detail: async (req, res) => {
        try{
            let operation = await db.Operation.findOne({
                where: {
                    id: +req.params.id
                  },
                include: [
                    {association: "user"},
                    {association: "type"},
                    {association: "category"}
                  ],
            });
            return res.status(200).json({
                    status:200,
                    data:operation
                })
        }catch(error){
            console.log(error)
        }
    },

    //MODIFICACION DE UNA OPERACION POR ID
    update: async (req, res) => {
        try{
            let operation = await db.Operation.update(req.body);
            return res.status(200).json({
                    status:200,
                    data:operation
                })
        }catch(error){
            console.log(error)
        }
    },

    //ELIMINACION DE UNA OPERACION POR ID
    destroy: async (req, res) => {
        try{
            let response = await db.Operation.destroy({
                where: {
                    id: +req.params.id
                  }
            });
            return res.status(200).json({
                    status:200,
                    data:response
                })
        }catch(error){
            console.log(error)
        }
    },
};