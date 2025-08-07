import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../../models/proyect.interface';
import { ProyectsService } from '../../../services/proyects.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  categorias: { nombre: string, cantidad: number }[] = [];


  public proyectos: Proyecto[] = [];

  constructor(private proySrv: ProyectsService){}

  ngOnInit(): void {
    this.proySrv.getAll().subscribe({
      next: data=>{
        this.proyectos = data,
        this.categorias = this.generarCategorias()
      },
      error: err=> console.error('Error cargando proyectos', err),
    })
  }

  generarCategorias(): any[] {
    const contador: Record<string, number> = {};

    for (let proyecto of this.proyectos) {
      const lenguajes = proyecto.lenguajes!.split(',').map(l => l.trim().toUpperCase());

      for (let lenguaje of lenguajes) {
        contador[lenguaje] = (contador[lenguaje] || 0) + 1;
      }
    }
    return this.categorias = Object.entries(contador).map(([nombre, cantidad]) => ({
      nombre,
      cantidad
    }));
  }



}
