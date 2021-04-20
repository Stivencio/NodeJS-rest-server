const express = require("express");
const cors = require("cors");

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		this.usuariosPath = "/api/usuarios";

		//Middlewares
		//Son funciones que van a añadir otra funcionalidad a mi web server, es una función que siempre va a ejecutarse cuando nosotros levantemos nuestro servidor
		this.middlewares();

		//Rutas de mi aplicación
		this.routes();
	}

	middlewares() {
		//CORS
		this.app.use(cors());

		//Lectura y Parseo del body
		this.app.use(express.json());

		//Directorio público
		this.app.use(express.static("public"));
	}

	routes() {
		this.app.use(this.usuariosPath, require("../routes/usuarios"));
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log("Servidor corriendo en puerto", this.port);
		});
	}
}

module.exports = Server;
