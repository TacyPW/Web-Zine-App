const { db } = require('@vercel/postgres');
const {
  zines,
} = require('../app/lib/placeholder-zines.js');
const bcrypt = require('bcrypt');


async function seedZines(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS zines (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        ref_url TEXT,
        title TEXT,
        description TEXT,
        extracted_text MEDIUMTEXT,
        markup_text MEDIUMTEXT,
        export_url VARCHAR(255) NOT NULL,
      );
    `;

    console.log(`Created "users" table`)

    const insertedZines = await Promise.all(
      zines.map(async (zine) => {
        return client.sql`
        INSERT INTO zines (id, ref_url, title, description, extracted_text, markup_text, export_url)
        VALUES (${zine.id}, ${zine.ref_url}, ${zine.title}, ${zine.description}, ${zine.extracted_text}, ${zine.markup_text}, ${zine.export_url},)
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedZines.length} zines`)

    return {
      createTable,
      zines: insertedZines,
    };
  } catch (error) {
    console.error('Error seeding zines:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedZines(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});