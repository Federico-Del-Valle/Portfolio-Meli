import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio/:id', component: PortfolioComponent },
  { path: '**', redirectTo: '' }
];
