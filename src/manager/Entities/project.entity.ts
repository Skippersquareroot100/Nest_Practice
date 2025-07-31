import { Column, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ManagerEntity } from './manager.entity';

export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @ManyToMany(() => ManagerEntity, (manager) => manager.projects, {
    cascade: true,
  })
  manager: ManagerEntity[];
}
