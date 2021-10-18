module.exports = (sequelize, dataTypes) => {
    let alias = "User";
  
    let cols = {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: dataTypes.INTEGER,
      },
      email: {
        type: dataTypes.STRING(255),
        allowNull: false,
      },
      password: {
        type: dataTypes.STRING(255),
        allowNull: false,
      },
      idRol: {
        type: dataTypes.INTEGER,
        allowNull: false,
      }
    };
  
    const config = {
      tableName: "users",
      timestamps: false,
    };
  
    const User = sequelize.define(alias, cols, config);
  
    User.associate = (models) => {
      User.belongsTo(models.Rol, {
        as: "rol",
        foreignKey: "idRol",
      });
  
       User.hasMany(models.Operation,{
        as:"operations",
        foreignKey:"idUser"
      }) 
    };
  
    return User;
  };
  