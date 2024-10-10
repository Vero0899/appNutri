// src/entities/Postres.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tabla_postres')
export class Postres {
  @PrimaryGeneratedColumn()
  id_postres: number;

  @Column()
  cant_kcal: number;

  @Column()
  cant_cho: number;

  @Column()
  cant_prot: number;

  @Column()
  cant_grasas: number;

  @Column()
  post_baj_ig: boolean;

  @Column()
  post_alto_ig: boolean;

  @Column()
  post_keto: boolean;

  @Column()
  post_alt_prot: boolean;

  @Column()
  post_sin_lacteos: boolean;
}
