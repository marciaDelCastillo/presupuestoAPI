module.exports = (sequelize, dataTypes) => {
    let alias = "Category";
  
    let cols = {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: dataTypes.INTEGER,
      },
      name: {
        type: dataTypes.STRING(255),
        allowNull: false,
      },
      idType: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
    };
  
    const config = {
      tableName: "categories",
      timestamps: false,
    };
  
    const Category = sequelize.define(alias, cols, config);
  
    Category.associate = (models) => {
        Category.belongsTo(models.Type, {
            as: "type",
            foreignKey: "idType",
          });
        Category.hasMany(models.Operation, {
        as: "operations",
        foreignKey: "idCategory",
      });
    };
  
    return Category;
  };