import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ManagerEntity } from './manager.entity';
@Entity()
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @ManyToMany(() => ManagerEntity, (manager) => manager.project)

  manager: ManagerEntity[];
}
