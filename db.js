const { STRING } = require('sequelize');
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/dealers_choice_react', {
    logging: false,
});

const Team = db.define('team', {
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    group: {
        type: ENUM(['Group A', 'Group B', 'Group C', 'Group D', 'Group E', 'Group F']),
        allowNull: false
    }
})

module.exports = {
    db
}

