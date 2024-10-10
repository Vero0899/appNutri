// src/entities/Carbos.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tabla_carbos')
export class Carbos {
  @PrimaryGeneratedColumn()
  id_cho: number;

  @Column()
  cant_kcal: number;

  @Column()
  cant_cho: number;

  @Column()
  cant_prot: number;

  @Column()
  cant_grasas: number;

  @Column()
  cho_normal: boolean;

  @Column()
  cho_baj_ig: boolean;

  @Column()
  cho_alt_ig: boolean;

  @Column()
  cho_sin_gluten: boolean;

  @Column()
  cho_diabetic: boolean;
}
