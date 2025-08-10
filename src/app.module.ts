import { Module } from '@nestjs/common';
import { ManagerModule } from './manager/manager.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PracticeModule } from './practice/practice.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
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
    PracticeModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
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