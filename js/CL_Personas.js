export default class CL_Personas{
    constructor(){
        this.acumingresoF=0;
        this.contmujeres=0;
        this.mayoringreso=0;
        this.auxnombremayoringre="";
    }
    
    procesarpersona(pe){
        if(pe.sexo=='F'){
            this.acumingresoF+=pe.ingreso;
            this.contmujeres++
        }
      

       if(pe.ingreso>this.mayoringreso){
        this.mayoringreso=pe.ingreso
        this.auxnombremayoringre=pe.nombre
       }
    }

    promingresomujeres(){
        return this.acumingresoF/this.contmujeres;
    }
}

