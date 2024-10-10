// src/entities/Snacks.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tabla_snacks')
export class Snacks {
  @PrimaryGeneratedColumn()
  id_snacks: number;

  @Column()
  cant_kcal: number;

  @Column()
  cant_cho: number;

  @Column()
  cant_prot: number;

  @Column()
  cant_grasas: number;

  @Column()
  nombre_snack: string;

  @Column()
  snack_saludab: boolean;

  @Column()
  snack_nosaludab: boolean;
}
