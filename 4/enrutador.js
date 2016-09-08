function enrutar(manejador, ruta, respuesta){
	console.log("Voy a enrutar algo " + ruta);

	if(typeof manejador[ruta] === 'function'){
	manejador[ruta](respuesta);
	}else{
console.log("No existe una función para la ruta: " +ruta);
}

}

exports.enrutar = enrutar;