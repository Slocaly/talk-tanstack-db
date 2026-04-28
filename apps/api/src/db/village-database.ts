import { Injectable, OnModuleDestroy } from '@nestjs/common';
import Database from 'better-sqlite3';
import { applySchema } from './schema';
import { openVillageDatabase } from './open-database';

@Injectable()
export class VillageDatabase implements OnModuleDestroy {
  readonly sqlite: Database.Database;

  constructor() {
    this.sqlite = openVillageDatabase();
    applySchema(this.sqlite);
  }

  onModuleDestroy(): void {
    this.sqlite.close();
  }
}
