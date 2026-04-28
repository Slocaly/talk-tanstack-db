import { applySchema } from './schema';
import { seedFromSeedData } from './seed-database';
import { openVillageDatabase } from './open-database';

const db = openVillageDatabase();
try {
  applySchema(db);
  seedFromSeedData(db);
} finally {
  db.close();
}
