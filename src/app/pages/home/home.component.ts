import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../../models/proyect.interface';
import { ProyectsService } from '../../../services/proyects.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type SortKey = 'alfabetico' | 'terminadosPrimero' | 'enProcesoPrimero';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [RouterLink,FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  categorias: { nombre: string, cantidad: number }[] = [];
  soloTerminados = false;
  selectedSort: SortKey = 'alfabetico';

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
  onToggleTerminados(ev: Event) {
    this.soloTerminados = (ev.target as HTMLInputElement).checked;
  }

  get proyectosFiltrados(): Proyecto[] {
    return this.soloTerminados
      ? this.proyectos.filter(p => p.llega)
      : this.proyectos;
  }


  // 2) orden final mostrado en la vista
  get proyectosOrdenados(): Proyecto[] {
    const data = this.proyectosFiltrados.slice();

    const precio = (p: Proyecto) => p.precio ?? 0;
    const llegaNum = (p: Proyecto) => (p.llega ? 1 : 0);

    switch (this.selectedSort) {
      case 'terminadosPrimero':
        // Terminado (true) primero, y dentro de cada grupo, por precio
        return data.sort((a, b) =>
          (llegaNum(b) - llegaNum(a)) ||
          (precio(b) - precio(a))
        );
      case 'enProcesoPrimero':
        // En proceso (false) primero, y dentro de cada grupo, por precio
        return data.sort((a, b) =>
          (llegaNum(a) - llegaNum(b)) ||
          (precio(b) - precio(a))
        );
      case 'alfabetico':
        // Ordena por el nombre del proyecto de forma alfabética (A-Z)
        return data.sort((a, b) => a.titulo!.localeCompare(b.titulo!));
      default:
        // Más relevantes: ahora se basa solo en el precio y si está terminado
        return data.sort((a, b) =>
          (precio(b) - precio(a)) ||
          (llegaNum(b) - llegaNum(a))
        );
    }
  }
  trackById = (_: number, p: Proyecto) => p.id;




}
