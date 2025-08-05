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

  public proyectos: Proyecto[] = [];

  constructor(private proySrv: ProyectsService){}

  ngOnInit(): void {
    this.proySrv.getAll().subscribe({
      next: data=> this.proyectos = data,
      error: err=> console.error('Error cargando proyectos', err)
    })

  }

}
