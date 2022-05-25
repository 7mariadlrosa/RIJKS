# RIJKS 👩🏼‍🎨💛

## ABOUT 
This idea arises from the need to create a project around one of my main interests, the art world. For this I chose the API of the RIJKS Museum in Amsterdam and from it I have developed a website focused on the creation of community, with events to attend in which to learn more about the museum's collections or about some of its authors in particular. In addition to this, the user in his private profile has access to his favorite works of art, the events he will attend soon and can edit all his personal information. On the other hand, the administrator, through conditional rendering, has a series of additional functions to those of the average user, such as the ability to delete users, create events and delete artworks or add new ones. 

## LANGUAJES AND TOOLS
 <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original-wordmark.svg" title="NodeJS" alt="NodeJS" width="40" height="40"/>&nbsp;
 </div>
 
  ##
 [![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=7mariadlrosa&layout=compact&theme=vision-friendly-dark)](https://github.com/anuraghazra/github-readme-stats)
 

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
