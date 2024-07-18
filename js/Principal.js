import CL_Persona from "./CL_Persona.js";
import CL_Personas from "./CL_Personas.js";

let perso1=new CL_Persona('Mary','F',150);
let perso2=new CL_Persona('José','M',135);
let perso3=new CL_Persona('Carlos','M',160);
let perso4=new CL_Persona('Pedro','M',75);
let perso5=new CL_Persona('Rosa','F',120);
let perso6=new CL_Persona('Carmen','F',120);

let personas= new CL_Personas();
personas.procesarpersona(perso1);
personas.procesarpersona(perso2);
personas.procesarpersona(perso3);
personas.procesarpersona(perso4);
personas.procesarpersona(perso5);
personas.procesarpersona(perso6);

let salida=document.getElementById("salida");
salida.innerHTML="Reporte";
salida.innerHTML+="<br>Promedio de ingreso de las mujeres: "+personas.promingresomujeres()+"$";
salida.innerHTML+="<br>Nombre de la persona con mayor ingreso: "+personas.auxnombremayoringre+" con un ingreso de "+personas.mayoringreso;

