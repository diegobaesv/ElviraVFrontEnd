import { Apoderado } from './Apoderado';
import { Curso } from './Curso';
export class Estudiante{    
    idEstudiante: number;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    documentoIdentidad: string;
    telefono: string;
    correo: string;
    codigoEstudiante: string;
    cursos: Curso[];
    apoderados: Apoderado[];
    
}