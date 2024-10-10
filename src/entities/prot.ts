// src/entities/Prot.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tabla_prot')
export class Prot {
  @PrimaryGeneratedColumn()
  id_prot: number;

  @Column()
  cant_kcal: number;

  @Column()
  cant_cho: number;

  @Column()
  cant_prot: number;

  @Column()
  cant_grasas: number;

  @Column()
  prot_veget: boolean;

  @Column()
  prot_animal: boolean;

  @Column()
  prot_mixta: boolean;

  @Column()
  prot_min: number;

  @Column()
  prot_max: number;
}
