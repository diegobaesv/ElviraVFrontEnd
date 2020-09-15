import { Usuario } from './Usuario';
import { Apoderado } from './Apoderado';
export class RegistroApoderadoRequest{    
    apoderado: Apoderado;
    usuario: Usuario;
    codigosAlumnos: string[];
}