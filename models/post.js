const { client, Sequelize } = require('../services/sequelize');

const { DataTypes } = Sequelize;

const Model = client.define('post', {
  title: DataTypes.STRING(128),
  content: DataTypes.TEXT,
});

Model.sync();

async function list({ limit }) {
  const results = await Model.findAll({
    limit,
  });

  return {
    posts: results.map(r => r.dataValues),
  };
}

module.exports = {
  Model,
  list,
};
