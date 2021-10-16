module.exports = (sequelize, dataTypes) => {
  const alias = "Operation";
  const cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: dataTypes.DATE,
      allowNull: false,
    },
    concept: {
        type: dataTypes.STRING(255),
        allowNull: false,
      },
    amount: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    idUser: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    idCategory: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
    idType: {
    type: dataTypes.INTEGER,
    allowNull: false,
    },
  };
  const config = {
    tableName: "operations",
    timestamps: false,
  };
  const Operation = sequelize.define(alias, cols, config);

  Operation.associate = function (models) {
    Operation.belongsTo(models.User, {
      as: "user",
      foreignKey: "idUser",
    });
    Operation.belongsTo(models.Category, {
        as: "category",
        foreignKey: "idCategory",
    });
    Operation.belongsTo(models.Type, {
    as: "type",
    foreignKey: "idType",
    });
  };
  return Operation;
};
