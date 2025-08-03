<<<<<<< HEAD
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
=======
import { BeforeInsert, Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { ManagerEntity } from './manager.entity';
import { SharedIdService } from '../Services/shared.service';

@Entity()
export class NameEntity {
  @PrimaryColumn({ unique: true })
  id: number;

  @Column('varchar', { length: 150 })
  fullname: string;

  @OneToOne(() => ManagerEntity, (manager) => manager.name)
  manager: ManagerEntity;

  @BeforeInsert()
  generateId() {
    const genId = Math.floor(Math.random() * 1000000);
    this.id = genId;
    SharedIdService.setId(genId);
  }
>>>>>>> lab3
}
