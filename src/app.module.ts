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


/*

📱 Client (API call: /get-by-name?name=anik)
       │
       ▼
🎮 Controller (ManagerController)
       │
       ▼ (calls)
📦 GetByNameService
       │
       ▼ (delegates)
🎯 GetByNameStrategy → GetByNameCreateService
       │
       ▼ (runs SQL)
🗄️ Database (returns rows)
       │
       ▼ (mapped to string[])
📦 GetByNameCreateService → returns ["Anik", "Manik"]
       │
       ▼
📦 GetByNameService → returns ["Anik", "Manik"]
       │
       ▼
🎮 Controller → returns ["Anik", "Manik"]
       │
       ▼
🌐 NestJS (serializes to JSON)
       │
       ▼
📱 Client (gets JSON response)

*/