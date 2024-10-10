// src/entities/Usuario.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tabla_usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column()
  rut_usuario: string;

  @Column()
  nombre_completo_usuario: string;

  @Column()
  apellido_pat_usuario: string;

  @Column()
  apellido_mat_usuario: string;

  @Column()
  edad_usuario: number;

  @Column()
  correo_usuario: string;

  @Column()
  pais_usuario: string;

  @Column()
  contrasena_usuario: string;

  @Column()
  telefono_usuario: string;
}
