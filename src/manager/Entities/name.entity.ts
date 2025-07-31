import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { ManagerEntity } from './manager.entity';

@Entity()
export class NameEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  firstName: string;

  @Column({ nullable: true })
  middleName?: string;

  @Column()
  lastName: string;
  @OneToOne(() => ManagerEntity, (manager) => manager.name)
  manager: ManagerEntity;
}
