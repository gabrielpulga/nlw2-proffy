import knex from 'knex';
import path from 'path';

// migrations - controlam a versão do banco de dados

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    }, 
    useNullAsDefault: true,
});

export default db;