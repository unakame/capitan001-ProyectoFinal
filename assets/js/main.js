function print1(){
  var infoQuiz = document.getElementById('info-y-quiz');
  var sPrint   = '<h5> <FONT FACE="Arial" SIZE="3">Sprint 1: Introducción a JavaScript</FONT></h5>'
  var lisTa    = '<FONT FACE="Arial" SIZE="2"><ol type= 1><li>Fundamentos de programación</li> <li>Funciones</li> <li>Arreglos</li> <li>Objetos</li></ol><FONT>'
  var quIz     = '<h7><FONT FACE="Arial" SIZE="4">Quiz</FONT></h7><p><FONT FACE="Arial" SIZE="3">Existen dos tipos de funciones</FONT></p><br><input type="radio" name="funciones" value="1">Expresadas y declaradas<br><input type="radio" name="funciones" value="2">Explícitas y declaradas<br><input type="radio" name="funciones" value="3">Expresadas y derivadas<br><p><FONT FACE="Arial" SIZE="3">Elija una propiedad de los arreglos</FONT></p><br><input type="radio" name="arreglo" value="1">Clear<br><input type="radio" name="arreglo" value="2">Pop<br><input type="radio" name="arreglo" value="3">Add<br><br><p><FONT FACE="Arial" SIZE="3">Un objeto tiene _______ y ________</FONT></p><br><input type="radio" name="objeto" value="1">números y letras<br><input type="radio" name="objeto" value="2">partes y validaciones<br><input type="radio" name="objeto" value="3">propiedades y valores<br><br><input name="" id="" type="button"  value="Enviar" onclick="">'
  return infoQuiz.innerHTML = sPrint + lisTa + "<hr>"+ quIz;
}



function print2(){
  var infoQuiz = document.getElementById('info-y-quiz');
  var sPrint   = '<h6> <FONT FACE="Arial" SIZE="3">Sprint 2: Introducción al desarrollo web y construcción de páginas web</FONT></h6>'
  var lisTa    = '<FONT FACE="Arial" SIZE="2"><ol type= 1><li>Ciclo de vide del desarrollo web y arquitectura básica cliente/servidor / Configuración del ambiente de trabajo e introducción a git</li> <li>HTMLy JavaScript en el navegador</li> <li>Manejo de comandos básicos de git en la terminal</li> <li>Pruebas unitarias</li><li>Git / Resolución de conflictos / Branching model</li><li>DOM</li></ol><FONT>'
  var quIz     = '<h7><FONT FACE="Arial" SIZE="4">Quiz</FONT></h7><form id="formu"><p><FONT FACE="Arial" SIZE="3">¿Cuál es el comando para iniciar un repositorio desde la consola?</FONT></p><br><input type="radio" name="git" value="1">Git init .<br><input type="radio" name="git" value="2">Git Init<br><input type="radio" name="git" value="3">Git Init Add<br><p><FONT FACE="Arial" SIZE="3">¿Cuál es la finalidad de hacer una prueba unitaria?</FONT></p><br><input type="radio" name="prueba" value="1">Comprobar que el código funciona correctamente<br><input type="radio" name="prueba" value="2">Darle valores a los parámetros de dichas funciones<br><input type="radio" name="prueba" value="3">No tiene ningún fin<br><br><p><FONT FACE="Arial" SIZE="3">¿Qué significa DOM?</FONT></p><br><input type="radio" name="dom" value="1">Dual Object Model<br><input type="radio" name="dom" value="2">Document Object Model<br><input type="radio" name="dom" value="3">Document Obsolet Model<br><br><input name="" id="" type="button"  value="Enviar" onclick="formLoad()"><form>'

  return infoQuiz.innerHTML = sPrint + lisTa+ "<hr>" + quIz;
}


function print3(){
  var infoQuiz = document.getElementById('info-y-quiz');
  return infoQuiz.innerHTML= '<FONT FACE="Arial" SIZE="2">No hay lecciones(Todavía)';
}

function formLoad(e){
         if(e!==2){
  return alert ("Hola")
         }

}
