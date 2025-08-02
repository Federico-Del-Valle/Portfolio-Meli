import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected readonly title = signal('Fede-meli-portfolio');
  public instrumentos: number[] = [1,2,3,4];
  public informacionProd: String[] = ["Angular", "Typescript", "Java", "Html", "CSS", "C"];




}
