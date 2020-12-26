import React from 'react'

const Resultado = ({monto,plazo,total}) => {   
    return (
        <div className="resultado">
            <p >El monto que solicito:{monto}$</p>
            <p>En el plazo:{plazo} meses</p>
            <p>EL total a pagar es:{total}</p>
            <p>el valor de cada cuota:{Number(total/plazo).toFixed(2)}</p>
        </div>
      );
}
 
export default Resultado;
