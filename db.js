const { STRING, ENUM, INTEGER, UUID, UUIDV4 } = require('sequelize');
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/dealers_choice_react', {
    logging: false,
});

const Team = db.define('team', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
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
    },
    wins: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    draws: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    losses: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    flagUrl: {
        type: STRING,
        allowNull: false
    }
})

module.exports = {
    db,
    Team
}

