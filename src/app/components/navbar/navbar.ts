import { Component,EventEmitter,Output, } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})



export class Navbar {

  public searchQuery = '';

  /** Emito el texto al padre para que filtre datos */
  @Output() search = new EventEmitter<string>();

  onSearch() {
    // Aquí emito el valor al componente que tenga la lista
    this.search.emit(this.searchQuery.trim().toLowerCase());
  }

}
