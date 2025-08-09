export interface Proyecto{
  id: number;
  titulo?: string;
  descripcion?: string;
  lenguajes?: string;
  imgPortada: string;
  cuotas?:string;
  estrellas?: number[];
  llega?: boolean;
  precio?: number;
  img?: string[];
  url?: string;
  repo?: string;
}