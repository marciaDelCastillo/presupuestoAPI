const db = require("../database/models");
//const bcrypt = require("bcryptjs");
//const { validationResult } = require("express-validator");
//const fetch = require("node-fetch");

module.exports = {
    //LISTA DE CATEGORIAS FILTRADAS POR TIPO (INGRESO O EGRESO)
    list: async (req, res) => {
        try{
            let categories = await db.Category.findAll({
                where: {
                    idType: +req.params.id
                  },
                include: [
                    {association: "operations"},
                    {association: "type"}
                  ],
            });
            return res.status(200).json({
                    total:categories.length,
                    status:200,
                    data:categories
                })
        }catch(error){
            console.log(error)
        }
    },
    //CARGA DE NUEVA CATEGORIA
    store: async (req, res) => {
        try{
            let category = await db.Category.create(req.body);
            return res.status(200).json({
                    status:200,
                    data:category
                })
        }catch(error){
            console.log(error)
        }
    },

    //DETALLE DE CADA CATEGORIA POR ID
    detail: async (req, res) => {
        try{
            let category = await db.Category.findOne({
                where: {
                    id: +req.params.id
                  },
                include: [
                    {association: "operations"},
                    {association: "type"}
                  ],
            });
            return res.status(200).json({
                    status:200,
                    data:category
                })
        }catch(error){
            console.log(error)
        }
    },

    //MODIFICACION DE UNA CATEGORIA POR ID
    update: async (req, res) => {
        try{
            let category = await db.Category.update(req.body);
            return res.status(200).json({
                    status:200,
                    data:category
                })
        }catch(error){
            console.log(error)
        }
    },

    //ELIMINACION DE UNA CATEGORIA POR ID
    destroy: (req, res) => {

    },
};