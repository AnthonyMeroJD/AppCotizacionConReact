import React,{Fragment} from 'react';
import {cotizacion} from './utils/algoritmo.js'

const Formulario = (props) => {
    const{componente,setmonto,setplazo,monto,
        plazo,seterror,error,setcargaResultado,setTotal}=props;

    const submit=e=>{
        e.preventDefault();
       if( monto<1 || plazo===''){
           seterror(true);
           return;
        } 
        seterror(false);
        setcargaResultado(true);
        setTimeout(() => {
       
            setTotal(cotizacion(Number(monto),Number(plazo)));
            setcargaResultado(false);
            
        }, 2000);
    };           
    return ( 
        <Fragment>
            <form onSubmit={submit}>
          <div className="row container" >  
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000" 
                      onChange={e=>setmonto( e.target.value)}
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  <select 
                      className="u-full-width"
                      onChange={e=>setplazo(e.target.value)}
                  >
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                      
                  />
              </div>
              {(error)?<p className="error">llene todos los campos </p>:null}
              {componente}
          </div>
     
  </form>
   
        </Fragment>
     );
}
 
export default Formulario;