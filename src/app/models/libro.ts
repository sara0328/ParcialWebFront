// src/app/models/libro.model.ts

export class Libro {
  id?: string | undefined;
  nombre: string;
  autor: Date | undefined;
  fechaEscritura: number | undefined;
  numeroEdicion: number;
  precio: string | undefined;
  tipo: string;
  famaEscritor: string;

  constructor(
    id?: string,
    nombre: string = '',
    autor?: Date,
    fechaEscritura?: number,
    numeroEdicion: number = 0,
    precio?: string,
    tipo: string = '',
    famaEscritor: string = ''
  ) {
    this.id = id;
    this.nombre = nombre;
    this.autor = autor;
    this.fechaEscritura = fechaEscritura;
    this.numeroEdicion = numeroEdicion;
    this.precio = precio;
    this.tipo = tipo;
    this.famaEscritor = famaEscritor;
  }
}
