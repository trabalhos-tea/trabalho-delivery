const Sequelize = require('sequelize');

class Cliente extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        endereco: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Associado, { through: models.ClienteAssociado, foreignKey: 'id_cliente' });
    this.hasMany(models.Entrega, { foreignKey: 'id_cliente' });
  }
}

module.exports = Cliente;
