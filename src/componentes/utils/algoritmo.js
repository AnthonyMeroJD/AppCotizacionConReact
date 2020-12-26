export const cotizacion = (monto,plazo) => {    
    const interezMonto=[0.15,0.20,0.25];
    const interezPlazo=[0.10,0.20,0.30,0.40];
    let total;
    if (monto<500) {
        total=monto+ monto*interezMonto[0];
    }else if (monto >500 && monto <1000) {
        total=monto +monto*interezMonto[1];
    }else  {
        total=monto +monto*interezMonto[2];
    }
   
    switch (plazo) {
        case 3:
            total+=monto*interezPlazo[0];
            break;
        case 6:
            total+=monto*interezPlazo[1];
            break;
        case 9:
            total+=monto*interezPlazo[2];
            break;
        case 12:
            total+=monto*interezPlazo[3];
            break;
        default:
            break;
    }
    
    return total;
}
 
