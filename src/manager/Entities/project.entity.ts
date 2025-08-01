<<<<<<< HEAD
import { Column, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ManagerEntity } from './manager.entity';

=======
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ManagerEntity } from './manager.entity';
@Entity()
>>>>>>> lab3
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
<<<<<<< HEAD
  @ManyToMany(() => ManagerEntity, (manager) => manager.projects, {
    cascade: true,
  })
=======

  @ManyToMany(() => ManagerEntity, (manager) => manager.project)

>>>>>>> lab3
  manager: ManagerEntity[];
}
