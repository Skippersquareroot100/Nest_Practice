/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { NameEntity } from './name.entity';
import { StaffEntity } from './staff.entity';
import { ProjectEntity } from './project.entity';


@Entity()
export class ManagerEntity {
  @PrimaryColumn()
  id: number;

  @Column('varchar', { unique: true, length: 100 })
  username: string;

  @Column('boolean', { default: false })
  isActive: boolean;


  @OneToOne(() => NameEntity, (name) => name.manager, { cascade: true })
  @JoinColumn()
  name: NameEntity;

  @OneToMany(() => StaffEntity, (staff) => staff.manager, { cascade: true })
  staff: StaffEntity[];

  @ManyToMany(() => ProjectEntity, (project) => project.manager, {
    cascade: true,
  })
  @JoinTable()

  project: ProjectEntity[];

}
