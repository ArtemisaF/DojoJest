function verificar(numero) {
    let resultado="";
    let numeroCorrecto="1234";
    for(let i=0;i<4;i++) {
        let caraterNC= numeroCorrecto.charAt(i);
        let caraterN= numero.charAt(i);
        if(numeroCorrecto.includes(caraterN)){
            if(caraterNC===caraterN){
                resultado=resultado+"X";
            }
            else{
                resultado=resultado+"-";
            }
        }
        else{
            resultado=resultado+"_";
        }
        
    }
    return resultado;   

}
module.exports.verificar=verificar;