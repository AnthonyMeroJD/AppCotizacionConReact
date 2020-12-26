import React, {Fragment, useState} from "react";
import "./App.css";

import Formulario from './componentes/Formulario';
import Header from './componentes/Header';
import Resultado from './componentes/Resultado';
import Mensaje from "./componentes/Mensaje";
import Spinner from "./componentes/Spinner";
function App() {
    let componente;
    const [monto, setmonto] = useState(0);
    const [plazo, setplazo] = useState('');
    const [cargaResultado, setcargaResultado] = useState(false); 
    const [error, seterror] = useState(false); 
    const [total, setTotal] = useState(0); 
    console.log(cargaResultado);
    if (cargaResultado) {
        componente=<Spinner></Spinner>
    }
   else if (total<=0) {  
        componente=<Mensaje 
        mensaje="Cotiza tu prestamo llenando el formulario de arriba aqui se mostrara el resultado"></Mensaje>        
    }else if(!error){                
            componente=<Resultado
            monto={Number(monto)}
            plazo={Number(plazo)}
            total={Number(total)}
        ></Resultado> 
    }

  return(
      <Fragment >
          <Header
          titulo="Cotiza tu prestamo"          
          ></Header>
          <Formulario
          componente={componente}
          setmonto={setmonto}
          setplazo={setplazo}
          monto={monto}
          plazo={plazo}
          seterror={seterror}
          error={error}          
          setcargaResultado={setcargaResultado}
          setTotal={setTotal}
          cargaResultado={cargaResultado}
          ></Formulario>          
      </Fragment>
  );
}

export default App;
