import { CursoEstudiante } from './CursoEstudiante';
export class Estudiante{    
    idEstudiante: number;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    documentoIdentidad: string;
    telefono: string;
    correo: string;
    codigoEstudiante: string;
    cursos: CursoEstudiante[];
    
}