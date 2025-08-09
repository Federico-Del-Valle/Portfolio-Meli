export interface Proyecto{
  id: number;
  titulo?: string;
  descripcion?: string;
  lenguajes?: string;
  imgPortada: string;
  cuotas?:string;
  estrellas?: number[];
  llega?: string;
  precio?: number;
  img?: string[];
  url?: string;
  repo?: string;
}