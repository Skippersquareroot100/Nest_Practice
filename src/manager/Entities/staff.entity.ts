import { PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Entity } from 'typeorm';
import { ManagerEntity } from './manager.entity';

@Entity()
export class StaffEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  name: string;
  @ManyToOne(() => ManagerEntity, (manager) => manager.staff)
  manager: ManagerEntity;
}
