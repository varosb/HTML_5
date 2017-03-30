function Aciertos(idRespuesta,idImagen)
{
	var p1,
		p2,
		imagen;

	p1 = document.getElementById(idRespuesta);
	p1.style.color = "green";
	imagen = document.getElementById(idImagen),
	imagen.serc = "imagenes/acierto.png";
	p2 = document.getElementById('Resultados');
	p2.innerHTML += "1";	
}

function Errores()

}
function Error1_1() 
{
	var p1  /* Parrafo de respuesta */
	   ,p2; /* Parrafo de resultado */

	p1 = document.getElementById('Respuesta1_1');
	p1.style.color = "red";
	imagen = document.getElementById('Imagen1');
	imagen.src = "imagenes/Error.png";
	p2 = document.getElementById('Resultados');
	p2.innerHTML += "0";
}
function Error1_3() 
{
	var p1  /* Parrafo de respuesta */
	   ,p2; /* Parrafo de resultado */

	p1 = document.getElementById('Respuesta1_3');
	p1.style.color = "red";
	imagen = document.getElementById('Imagen1');
	imagen.src = "imagenes/Error.png";
	p2 = document.getElementById('Resultados');
	p2.innerHTML += "0";
}

}
function Error2_1() 
{
	var p1  /* Parrafo de respuesta */
	   ,p2; /* Parrafo de resultado */

	p1 = document.getElementById('Respuesta2_1');
	p1.style.color = "red";
	imagen = document.getElementById('Imagen1');
	imagen.src = "imagenes/Error.png";
	p2 = document.getElementById('Resultados');
	p2.innerHTML += "0";
}
function Error2_2() 
{
	var p1  /* Parrafo de respuesta */
	   ,p2; /* Parrafo de resultado */

	p1 = document.getElementById('Respuesta2_2');
	p1.style.color = "red";
	imagen = document.getElementById('Imagen1');
	imagen.src = "imagenes/Error.png";
	p2 = document.getElementById('Resultados');
	p2.innerHTML += "0";
}
