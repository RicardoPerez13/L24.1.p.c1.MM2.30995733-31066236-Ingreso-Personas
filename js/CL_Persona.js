export default class CL_Persona{
    constructor(n,s,i){
        this.nombre=n;
        this.sexo=s;
        this.ingreso=i;
    }

    set nombre(no){
        return this._nombre=no;
        }
        
        get nombre(){
        return this._nombre;
        }

     set sexo(se){
        return this._sexo=se;
        }
        
        get sexo(){
        return this._sexo;
        }
    
    set ingreso(ig){
        return this._ingreso=ig;
        }
            
         get ingreso(){
        return this._ingreso;
        }
}