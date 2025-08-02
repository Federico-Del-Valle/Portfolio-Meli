import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { FormsModule } from '@angular/forms';
import { Proyecto } from '../models/proyect.interface';
import { ProyectsService } from '../services/proyects.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  protected readonly title = signal('Fede-meli-portfolio');
  public proyectos: Proyecto[] = [];

  constructor(private proySrv: ProyectsService){}


  ngOnInit(): void{
    this.proySrv.getAll().subscribe({
      next: data => this.proyectos = data,
      error: err=> console.error('Error cargando proyectos', err),
    })

  }


}
