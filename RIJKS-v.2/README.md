| METHOD | URL | DESCRIPCIÓN | PROTEGIDA | ROLES PERMITIDOS |
|---------------|---------------|---------------|---------------|---------------|
|GET|/|Página principal|False||
|GET|/registro|Sing-up|False||
|POST|/registro|Sing-up|False||
|GET|/iniciar-sesión|Log-in|True|All|
|POST|/iniciar-sesión|Log-in|True|All|
|POST|/cerrar-sesion|Log-out|True|All|
|GET|/perfil|Perfil|True|All|
|GET|/perfil/:id/editar-perfil|Editar perfil|True|User|
|POST|/perfil/:id/editar-perfil|Editar perfil|True|User|
|GET|/colecciones/permanente|Listado de obras permanentes|False||
|GET|/colecciones/temporal|Listado de obras temporales|False||
|GET|/colecciones/:id/detalles|Detalles obra|False||
|GET|/art/:id|Obtener obra de arte aleatoria|True|All| 
|POST|/art/:id/guardar|Guardar obra de arte|True|All|
|GET|/evento|Evento|True|All|
|GET|/evento/crear|Crear evento|True|All|
|POST|/evento/crear|Crear evento|True|All|
|GET|evento/:id/editar-evento|Editar evento|True|All|
|POST|evento/:id/editar-evento|Editar evento|True|All|
|POST|evento/:id/eliminar-evento|Eliminar evento|True|Admin|
|POST|/evento/:id/comentar|Comentar|True|All|
|POST|/evento/:id/eliminar-comentario|Eliminar comentario|True|Admin|
|POST|/evento/:id/unirse|Unirse a evento|True|User|
|POST|/evento/:id/des-unirse|Desunirse a evento|True|User|
|POST|/usuario/:id/eliminar-usuario|Eliminar usuario|True|Admin|
|GET|/api|Api|||