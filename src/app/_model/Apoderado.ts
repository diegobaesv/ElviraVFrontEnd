import { ApoderadoEstudiante } from './ApoderadoEstudiante';
export class Apoderado{    
    idApoderado: number;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    documentoIdentidad: string;
    correo: string;
    telefono: string;
    activo: boolean;
    estudiantes: ApoderadoEstudiante[];
}