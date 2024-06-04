// libro-create.component.ts
import { Component } from '@angular/core';
import { LibroService } from '../services/libro.service';
import { Libro } from '../models/libro';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-libro-create',
  templateUrl: './libro-create.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./libro-create.component.css']
})
export class LibroCreateComponent {
  libro: Libro = new Libro('', '', new Date(), 1, 0, '', '');

  constructor(private libroService: LibroService) { }

  onSubmit(): void {
    this.libroService.createLibro(this.libro).subscribe({
      next: (libro) => console.log('Libro creado', libro),
      error: (error) => console.error('Error al crear libro', error)
    });
  }
}
