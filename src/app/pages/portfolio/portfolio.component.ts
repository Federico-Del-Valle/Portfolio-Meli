import { ProyectsService } from '../../../services/proyects.service';
import { Proyecto } from '../../../models/proyect.interface';
import { Habilidad } from '../../../models/habilidades.interface';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone:true,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{
  protected readonly title = signal('Fede-meli-portfolio');
  idProyecto!: number;
  public proyectos: Proyecto[] = [];
  public habilidades: Habilidad[] = [];

  constructor(private proySrv: ProyectsService,
    private route: ActivatedRoute
  ){}


  ngOnInit(): void{
    this.idProyecto = Number(this.route.snapshot.paramMap.get('id'));
    this.proySrv.getAll().subscribe({
      next: data => this.proyectos = data,
      error: err=> console.error('Error cargando proyectos', err),
    })
    this.proySrv.getHabilidades().subscribe({
      next:data => this.habilidades = data,
      error: err=> console.error('Error cargando habilidades', err)
    })

  }


}
