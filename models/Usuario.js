const Usuario = (sequelize, Datatypes) => {
  
  let usuario = sequelize.define(
    
    'Usuario',
    {
      id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      email: {
        type: Datatypes.STRING(120),
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
      },
      senha: {
        type: Datatypes.STRING(255),
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
      }
    },
    {
      tableName: 'Usuarios',
      timestamps: false
    }
  );
    
  return usuario;
};
  
  module.exports = Usuario;