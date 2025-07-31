import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
=======
import { ManagerModule } from './manager/manager.module';
@Module({
  imports: [ManagerModule],
  controllers: [],
  providers: [],
>>>>>>> ac2e4b8 (update)
})
export class AppModule {}
