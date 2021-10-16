module.exports = (sequelize, dataTypes) => {
    let alias = "Type";
  
    let cols = {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: dataTypes.INTEGER,
      },
      name: {
        type: dataTypes.STRING(45),
        allowNull: false,
      },
    };
  
    const config = {
      tableName: "types",
      timestamps: false,
    };
  
    const Type = sequelize.define(alias, cols, config);
  
    Type.associate = (models) => {
      Type.hasMany(models.Operation, {
        as: "operations",
        foreignKey: "idType",
      });
      Type.hasMany(models.Category, {
        as: "categories",
        foreignKey: "idType",
      });
    };
  
    return Type;
  };