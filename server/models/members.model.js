module.exports = (sequelize, Sequelize) => {
  const members = sequelize.define("members", {
    col1: { type: Sequelize.STRING },
    col2: { type: Sequelize.STRING },
    //////
    //////
    //////
  });

  return members;
};
