import { Module } from '@nestjs/common';
import { ManagerController } from './manager.controller';
import { ManagerService } from './manager.service';

@Module({
  controllers: [ManagerController],
  providers: [ManagerService],
})
export class ManagerModule {}

import { Module } from '@nestjs/common';
import { ManagerController } from './manager.controller';
import { ManagerService } from './Services/manager.service';
import { ManagerEntity } from './Entities/manager.entity';
import { NameEntity } from './Entities/name.entity';
import { StaffEntity } from './Entities/staff.entity';
import { ProjectEntity } from './Entities/project.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedIdService } from './Services/shared.service';
import { ManagerCreateService } from './Services/manager-create.service';
import { NameService } from './Services/name.service';
import { DefaultManagerStrategy } from './Stratigies/default-manager.strategy';
import { NameCreateService } from './Services/name-create.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      NameEntity,
      StaffEntity,
      ProjectEntity,
      ManagerEntity,
    ]),
  ],
  controllers: [ManagerController],
  providers: [
    NameService,
    NameCreateService,
    {
      provide: 'NameCreationStrategy',
      useClass: NameCreateService,
    },
    ManagerCreateService,
    ManagerService,
    SharedIdService,
    DefaultManagerStrategy,
    {
      provide: 'ManagerCreationStrategy',
      useClass: DefaultManagerStrategy,
    },
  ],
})
export class ManagerModule {}
