// src/entities/Dulces.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tabla_dulces')
export class Dulces {
  @PrimaryGeneratedColumn()
  id_dulces: number;

  @Column()
  cant_kcal: number;

  @Column()
  cant_cho: number;

  @Column()
  cant_prot: number;

  @Column()
  cant_grasas: number;

  @Column()
  dulc_sinazuc: boolean;

  @Column()
  dulc_conazuc: boolean;

  @Column()
  dulc_veganos: boolean;

  @Column()
  dulc_import: boolean;

  @Column()
  dulc_acidos: boolean;
}
