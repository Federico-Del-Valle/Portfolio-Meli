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
  public catDistintas?: number;

  public proyectos: Proyecto[] = [];

  constructor(private proySrv: ProyectsService){}

  ngOnInit(): void {
    this.proySrv.getAll().subscribe({
      next: data=> this.proyectos = data,
      error: err=> console.error('Error cargando proyectos', err)
    })
    this.catDistintas = this.contarLenguajesDistintos(this.proyectos);
  }

  public contarProyectos(proyectos: Proyecto[], buscar: any){
    return proyectos.filter(item => item === buscar).length;
  }

  contarLenguajesDistintos(proyectos: Proyecto[]): number {
    const conjuntoLenguajes = new Set<string>();

    for (let proyecto of proyectos) {
      const lenguajes = proyecto.lenguajes!
        .split(',')
        .map(l => l.trim());

      lenguajes.forEach(lenguaje => conjuntoLenguajes.add(lenguaje));
    }

    return conjuntoLenguajes.size;
  }


}
