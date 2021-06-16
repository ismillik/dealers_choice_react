const { db, Team } = require('./db');

const teams = [
    {
        name: 'Turkey',
        group: 'Group A',
        losses: 2,
        flagUrl: 'turkey.png'
    },
    {
        name: 'Italy',
        group: 'Group A',
        wins: 1,
        flagUrl: 'italy.png'
    },
    {
        name: 'Switzerland',
        group: 'Group A',
        draws: 1,
        flagUrl: 'switzerland.png'
    },
    {
        name: 'Wales',
        group: 'Group A',
        wins: 1,
        draws: 1,
        flagUrl: 'wales.png'
    },
    {
        name: 'Belgium',
        group: 'Group B',
        wins: 1,
        flagUrl: 'belgium.png'
    },
    {
        name: 'Russia',
        group: 'Group B',
        wins: 1,
        losses: 1,
        flagUrl: 'russia.png'
    },
    {
        name: 'Finland',
        group: 'Group B',
        wins: 1,
        losses: 1,
        flagUrl: 'finland.png'
    },
    {
        name: 'Denmark',
        group: 'Group B',
        losses: 1,
        flagUrl: 'denmark.png'
    },
    {
        name: 'Austria',
        group: 'Group C',
        wins: 1,
        flagUrl: 'austria.png'
    },
    {
        name: 'Netherlands',
        group: 'Group C',
        wins: 1,
        flagUrl: 'netherlands.png'
    },
    {
        name: 'Ukraine',
        group: 'Group C',
        losses: 1,
        flagUrl: 'ukraine.png'
    },
    {
        name: 'North Macedonia',
        group: 'Group C',
        losses: 1,
        flagUrl: 'northmacedonia.png'
    },
    {
        name: 'Czech Republic',
        group: 'Group D',
        wins: 1,
        flagUrl: 'czech.png'
    },
    {
        name: 'England',
        group: 'Group D',
        wins: 1,
        flagUrl: 'england.png'
    },
    {
        name: 'Croatia',
        group: 'Group D',
        losses: 1,
        flagUrl: 'croatia.png'
    },
    {
        name: 'Scotland',
        group: 'Group D',
        losses: 1,
        flagUrl: 'scotland.png'
    },
    {
        name: 'Slovakia',
        group: 'Group E',
        wins: 1,
        flagUrl: 'slovakia.png'
    },
    {
        name: 'Spain',
        group: 'Group E',
        draws: 1,
        flagUrl: 'spain.png'
    },
    {
        name: 'Sweden',
        group: 'Group E',
        draws: 1,
        flagUrl: 'sweden.png'
    },
    {
        name: 'Poland',
        group: 'Group E',
        losses: 1,
        flagUrl: 'Poland.png'
    },
    {
        name: 'Portugal',
        group: 'Group F',
        wins: 1,
        flagUrl: 'portugal.png'
    },
    {
        name: 'France',
        group: 'Group F',
        wins: 1,
        flagUrl: 'france.png'
    },
    {
        name: 'Germany',
        group: 'Group F',
        losses: 1,
        flagUrl: 'germany.png'
    },
    {
        name: 'Hungary',
        group: 'Group F',
        losses: 1,
        flagUrl: 'hungary.png'
    }
];

async function seedDatabase() {
    try {
        await db.sync({ force: true });
        await Promise.all(teams.map((team) => Team.create(team)));
        console.log('Seed success!');
    }
    catch(err) {
        console.error(err.stack);
    };
};

seedDatabase();



