import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from './config/database.config';
import { UserModule } from './user/user.module';
import { PetModule } from './pet/pet.module';

@Module({
  imports: [databaseConfig, UserModule, PetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 