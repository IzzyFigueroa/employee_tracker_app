import {promises as fs} from 'fs';
import path from 'path';

import client from './connection.js'

const __dirname = path.resolve();
const schemaSQL = await fs.readFile(path.join(__dirname, './db/schema.sql'), 'utf-8');

await client.query(schemaSQL);
console.log('tables created successfully')

const seedSQL = await fs.readFile(path.join(__dirname, './db/seed.sql'), 'utf-8');
await client.query(seedSQL);
console.log('tables seeded successfully')

process.exit()