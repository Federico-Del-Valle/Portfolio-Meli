import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Proyecto } from "../models/proyect.interface";

@Injectable({providedIn: 'root'})
export class ProyectsService{
  private url = '/assets/proyecto.json';
  constructor(private http: HttpClient){}
  getAll():Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.url);
  }
}