import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';

import { PokemonModule } from '../pokemon/pokemon.module';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [PokemonModule, HttpModule, CommonModule],
})
export class SeedModule {}
