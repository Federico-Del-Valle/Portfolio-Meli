import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes'; // Importamos las rutas

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule, // 🔹 Necesario para routerLink y routing
    Navbar,
    FormsModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected readonly title = signal('Fede-meli-portfolio');
}
