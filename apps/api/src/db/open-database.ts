import Database from 'better-sqlite3';
import {
  ensureDatabaseDirectory,
  getResolvedDatabasePath,
} from './database-path';

export function openVillageDatabase(): Database.Database {
  const filePath = getResolvedDatabasePath();
  ensureDatabaseDirectory(filePath);
  const db = new Database(filePath);
  db.pragma('foreign_keys = ON');
  return db;
}
