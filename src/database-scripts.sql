INSERT INTO public.curso(
	nombre, anio,  seccion, create_at,update_at, id_docente)
	VALUES ('CIENCIA Y AMBIENTE',2020, 'QUINTO GRADO',  '13-09-2020', '13-09-2020', null);

INSERT INTO public.curso(
	nombre, anio,  seccion, create_at,update_at, id_docente)
	VALUES ('MATEMATICA',2020, 'QUINTO GRADO',  '13-09-2020', '13-09-2020', null);



INSERT INTO public.curso_estudiante(
	 activo, create_at, update_at, id_curso, id_estudiante)
	VALUES ( true, '13-09-2020', '13-09-2020', 2, 1);

INSERT INTO public.apoderado(
	 activo, apellido_materno, apellido_paterno, documento_identidad, nombre,create_at,update_at)
	VALUES ( true, 'GOMEZ', 'RUIZ',  '08663322', 'LUCAS',  '13-09-2020', '13-09-2020');

INSERT INTO public.apoderado_estudiante(
 id_apoderado, id_estudiante,create_at)
VALUES ( 1, 1,'13-09-2020');

INSERT INTO public.usuario(
	 activo, create_at,  tipo_usuario, update_at, username, clave)
	VALUES (true, '13-09-2020',  'ROLE_ESTUDIANTE', '13-09-2020', 'diegobaesv', '123');