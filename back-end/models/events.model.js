module.exports = (sequelize, Sequelize) => {
  const events = sequelize.define("events", {
    col1: { type: Sequelize.STRING },
    col2: { type: Sequelize.STRING },
    //
    //
  });

  return events;
};
