
Como hacer un proyecto de NodeJS desde cero (typescript)

Rerequisito

1.	Importante tener instalado yarn que es una aplicación para generar las dependencias 
	de nuestro proyecto en NodeJS.
	
2.	Importante tener instalado el motor de NodeJS en nuestro computador.
	(NPM) - (YARN).
	
3.	Si deseamos manejar el gestor de dependencias YARN en nuestro proyecto, debemos instalarlo.

4.	Tener instalado un navegador web de su preferencia:
	Chrome, Edge, Firefox, etc.
	
5.	CMDer.

Pasos 

1.	Primero creamos la carpeta del proyecto (mvp-store).
	mkdir mvp-store

2.	Accedemos a la carpeta.
	cd mvp-store 
	
3.	Ejecutamos el comando para instalar typescript.
	yarn add global typescript
	
	Una vez ejecutado este comando, nuestra carpeta crea los archivos 
	necesarios para trabajar nuestro proyecto en NodeJS.
	
	a.	package.json 		Tiene la definicion del proyecto como tal.
	b.	node_modules 		Todos los fuentes de las dependencias que vamos instalando.
	
4.	Ejecutamos un comando para iniciar una estructura base de un proyecto en NodeJS usando typescript.
	yarn run tsc -- --init
	
	Una vez este comando se ejecuta, ya podríamos ejecutar el comando para convertir el codigo de typescript a javascript:
	tsc 
	
5.	El comando anterior genera un archivo llamado tsconfig.json donde está la configuración del proyecto 
	basado en typescript y las directivas mas importantes son las siguientes: 
	
	a.	outDir		Una vez el proceso de conversión de typescript a javascript se hace, en esta carpeta 
					queda el codigo convertido a javascript. 

	b.	rootDir		La carpeta donde tendrá todos los archivos typescript (ts) que tendrá nuestro proyecto.
	
6.	Ahora podemos crear nuestro archivo principal (se llamara application.ts),
	este archivo contendrá una instrucción sencilla como esta:
	
	console.log('Hola mundo');

7.	A continuación vamos a ajustar el archivo (package.json) para definir el inicio (ejecucion) del proyecto 
	y vamos a explicar algunas directivas que son importantes y son las siguientes:
	
	a.	name				Nombre de nuestro proyecto (mvp-store)
	b.	version				Numero de nuestra versión
	c.	description			Descripción de nuestro proyecto
	d.	main				Archivo principal del proyecto, en nuestro caso (application.js) 
							Es en este formato, porque primero debemos convertirlo a javascript con el comando 
							(tsc).
	e.	author				Nombre del autor del proyecto
	f.	license				Licencia del proyecto
	g.	scripts 			Son las definiciones por ambiente en las que se pueden ejecutar la aplicación,
							tanto para generar los fuentes (javascript) como para ejecutar el proyecto por ambiente,
							ejemplo:
							
							1.	start:local				Como se debe ejecutar el proyecto en un ambiente local
							2.	start:develop			Como se debe ejecutar el proyecto en un ambiente de desarrollo
							3.	start:staging			Como se debe ejecutar el proyecto en un ambiente de pruebas
							4.	start:production		Como se debe ejecutar el proyecto en un ambiente de produccion

							Entonces vamos a definir inicialmente tres:

							1.	build 					tsc
							2.	start 					node dist/application.js 
							3.	test 					echo \"Error: no test specified\" && exit 1 

	h.	dependencies		Aqui se incluyen las dependencias que se van agregando al proyecto
	
8.	Una vez ajustado el archivo mencionado en el punto anterior se haran las siguientes ejecuciones:
	a.	yarn build 			Con este comando genera los archivos javascript.
	b.	yarn start 			Aqui debería de mostrar el mensaje "Hola mundo"

9.	Ahora vamos a darle mas forma a nuestra aplicación... 
	vamos a utilizar express que es el framework mas conocido en nodejs para trabajar aplicaciones...
	
10.	Inicialmente vamos a instalar la dependencia para manejo del framework (express).
	yarn add express @types/express 
	
	a.	express 			Es la librería del framework para nodeJS.
	b.	@types/express		Esta es una extensión de dicha librería para typescript. 
	
11.	Una vez instalada la dependencia podemos usar el framework, he aquí un ejemplo básico:

	import express from 'express';

	const app = express();
	const port = 8081;

	//Definir todas las rutas que se requieran establecer...
	app.get( "/", ( req, res ) => { 
		res.status( 200 ).send( { status: 500, message: 'Esto es otra prueba mas para esta vuelta' } );
	} );

	app.get( "/message", ( req, res ) => { 
		res.status( 200 ).send( { status: 200, message: 'Un servicio diferente' } );
	} );


	//Definir el puerto por el cual la aplicacion atiende las peticiones...
	app.listen( port, () => {
		console.log( `server started at http://localhost:${ port }` );
	} );
	
12.	En el desarrollo de cualquier aplicación se requiere que pensemos en varios conceptos:
	a.	Que sea mantenible en el tiempo.
	b.	Que el codigo sea lo mas entendible posible para cualquier desarrollador que quiera mantenerlo.
	c.	¿Cuales otras me podrian decir?
	
	Debido a esto se creó un concepto que se llama "patrones de arquitectura de software", esto son una serie
	de estructuras definidas de diferentes aplicaciones según la necesidad del negocio y de desarrollo, dentro de las 
	más conocidas está:
	
	a.	Modelo vista controlador (este contempla por ejemplo el concepto de, controllers, services, views).
	b.	En pipeline.
	c.	En pares.
	d.	Orientada a servicios.
	e.	Dirigida por eventos.
	f.	Cliente-servidor.
	g.	Arquitectura en tres niveles (programación por capas).

13.	Por ende es importante mirar la arquitectura para NodeJS.
	
	a.	controllers.		Aqui van la logica que acompaña las routes.
	b.	services.			Aqui va la logica de negocio.
	c.	loaders.			Aqui van los componentes de carga del proyecto
	d.	models.				Aqui van los modelos con respecto a entidades de base de datos
	e.	middlewares.		Aqui van los middlewares (interceptores) dentro de nuestra aplicación (habrá un apartado de este tema).
	f.	api.				Aqui van matriculados los recursos (rutas) que se expondran en la aplicacion 
	g.	config.				Aqui van los parametros de configuracion de la aplicación.
	
14.	Establecemos inicialmente la capa (loaders) para indicar los modulos que se pre-cargan en nuestro 
	backend al momento de iniciarlo.
	
	a.	implementamos el de express que estará en el archivo src/loaders/express.loader.ts
	b.	implementamos el archivo index.ts.
	c.	ajustamos el archivo app.ts.
	
	
	
Websocket (tiempo real) - Java

	conceptos

	1.	Emit (Emitir información -> entregar data a alguien)
	
	Client (emit) 	- Server (on)
	Client (on) 	- Server (emit)


