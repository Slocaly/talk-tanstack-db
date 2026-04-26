import * as fs from 'node:fs';
import * as path from 'node:path';

export function getResolvedDatabasePath(): string {
  const raw = process.env.DATABASE_PATH?.trim();
  if (raw) {
    return path.isAbsolute(raw) ? raw : path.resolve(process.cwd(), raw);
  }
  return path.resolve(process.cwd(), 'data', 'village.sqlite');
}

export function ensureDatabaseDirectory(filePath: string): void {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}
