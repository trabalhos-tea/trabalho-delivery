const Sequelize = require("sequelize");

class Associado extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        senha: Sequelize.STRING,
        endereco: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.ClienteAssociado, { foreignKey: "associadoId" });
    this.hasMany(models.Entrega, { foreignKey: "associadoId" });
  }
}

module.exports = Associado;