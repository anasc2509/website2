var moverHorizontalmente=0;
var moverVerticalmente=0;

function moverDerecha(){
    if( moverHorizontalmente<88){ //HEMOS UTILIZADO UN "IF" PARA ESTABLECER UN LÍMITE MÁXIMO
        moverHorizontalmente+=10;//HEMOS PUESTO UN "+" ANTES DEL "=" PARA QUE VAYA SUMANDO Y AVANZANDO EL NÚMERO QUE HEMOS PUESTO  DESPUÉS DEL "="(EL NÚMERO QUE VA DETRÁS DEL "=" SE PUEDE PONER EL QUE DESEEMOS)
        document.getElementById("pelota").style.marginLeft= moverHorizontalmente + "%";
    }
}


function moverIzquierda(){
    if( moverHorizontalmente>0){ //HEMOS UTILIZADO UN "IF" PARA ESTABLECER UN LÍMITE MÁXIMO
        moverHorizontalmente-=10;//HEMOS PUESTO UN "-" ANTES DEL "=" PARA QUE VAYA RESTANDO Y RETROCEDIENDO EL NÚMERO QUE HEMOS PUESTO  DESPUÉS DEL "="(EL NÚMERO QUE VA DETRÁS DEL "=" SE PUEDE PONER EL QUE DESEEMOS)
        document.getElementById("pelota").style.marginLeft= moverHorizontalmente + "%";
    }
}

function moverAbajo(){
    if( moverVerticalmente<38){ //HEMOS UTILIZADO UN "IF" PARA ESTABLECER UN LÍMITE MÁXIMO Y PAR QUE NO SE PIERDA HACIA ABAJO EL OBJETO, PARA ELLO HEMOS TENIDO QUE PONER UN NÚMERO QUE SEA "MENOR QUE 38"(EL NÚMERO QUE VA DETRÁS DEL "=" SE PUEDE PONER EL QUE DESEEMOS)
        moverVerticalmente+=1;
        document.getElementById("pelota").style.marginTop= moverVerticalmente + "%";
    }
} 

function moverArriba(){
    if( moverVerticalmente>0){ //HEMOS UTILIZADO UN "IF" PARA ESTABLECER UN LÍMITE MÁXIMO, PERO AQUÍ HEMOS CAMBIADO EL NÚMERO QUE TENÍAMOS ANTES POR UNO QUE SEA MAYOR QUE "0" PARA QUE ASÍ SE QUEDE EN EL MARGEN DE LA PÁGINA Y NO SIGA SUBIENDO HACIA ARRIBA Y SE PIERDA EL OBJETO (EL NÚMERO QUE VA DETRÁS DEL "=" SE PUEDE PONER EL QUE DESEEMOS)
        moverVerticalmente-=1;
        document.getElementById("pelota").style.marginTop= moverVerticalmente + "%";
    }
} 