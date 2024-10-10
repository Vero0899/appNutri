// src/entities/Vegetales.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tabla_vegetales')
export class Vegetales {
  @PrimaryGeneratedColumn()
  id_veg: number;

  @Column()
  cant_kcal: number;

  @Column()
  cant_cho: number;

  @Column()
  cant_prot: number;

  @Column()
  cant_grasas: number;

  @Column()
  veg_baj_ig: boolean;

  @Column()
  veg_alt_ig: boolean;

  @Column()
  veg_crudos: boolean;

  @Column()
  veg_cocidos: boolean;

  @Column()
  veg_exotics: boolean;
}
