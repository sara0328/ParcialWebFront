
import { Routes } from '@angular/router';
import { LibrosListComponent } from './libros-list/libros-list.component';
import { LibroCreateComponent } from './libro-create/libro-create.component';

export const routes: Routes = [
  { path: 'libros', component: LibrosListComponent },
  { path: 'crear-libro', component: LibroCreateComponent },
  { path: '', redirectTo: '/libros', pathMatch: 'full' }
];
