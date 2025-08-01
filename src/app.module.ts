import { Module } from '@nestjs/common';
<<<<<<< HEAD
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
=======
import { ManagerModule } from './manager/manager.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    ManagerModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'lab3',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
>>>>>>> lab3
})
export class AppModule {}
