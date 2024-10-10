// src/entities/PlatosPrepar.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tabla_platos_prepar')
export class PlatosPrepar {
  @PrimaryGeneratedColumn()
  id_platos_prep: number;

  @Column()
  cant_kcal: number;

  @Column()
  cant_cho: number;

  @Column()
  cant_prot: number;

  @Column()
  cant_grasas: number;

  @Column()
  platos_saludab: boolean;

  @Column()
  platos_notansaludab: boolean;

  @Column()
  platos_diabetic: boolean;

  @Column()
  platos_exotic: boolean;
}
