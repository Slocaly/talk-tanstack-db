import { Module } from '@nestjs/common';
import { VillageDatabase } from './village-database';

@Module({
  providers: [VillageDatabase],
  exports: [VillageDatabase],
})
export class DatabaseModule {}
