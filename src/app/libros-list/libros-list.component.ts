// libros-list.component.ts
import { Component, OnInit } from '@angular/core';
import { LibroService } from '../services/libro.service';
import { Libro } from '../models/libro';

@Component({
  selector: 'app-libros-list',
  templateUrl: './libros-list.component.html',
  standalone: true,
  styleUrls: ['./libros-list.component.css']
})
export class LibrosListComponent implements OnInit {
  libros: Libro[] = [];

  constructor(private libroService: LibroService) { }

  ngOnInit(): void {
    this.libroService.getLibros().subscribe({
      next: (libros) => this.libros = libros,
      error: (error) => console.error('Error al obtener libros', error)
    });
  }
}
