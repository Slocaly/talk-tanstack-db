import { Module } from '@nestjs/common';
import { VillageModule } from './village/village.module';

@Module({
  imports: [VillageModule],
})
export class AppModule {}
