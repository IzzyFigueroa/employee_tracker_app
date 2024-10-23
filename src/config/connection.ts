import pg from 'pg';

const { Client } = pg;
const client = new Client({
    user: 'postgres',
    password: 'pass',
    database: 'employee_tracker_app'
});

await client.connect();

export default client;