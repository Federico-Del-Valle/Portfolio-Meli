import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Proyecto } from "../models/proyect.interface";
import { Habilidad } from "../models/habilidades.interface";

@Injectable({providedIn: 'root'})
export class ProyectsService{
  private url = '/assets/proyecto.json';
  private urlHab = '/assets/habilidad.json'
  constructor(private http: HttpClient){}

  getAll():Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.url);
  }
  getHabilidades():Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(this.urlHab);
  }
}