import React, {useState, Fragment} from 'react';
const Contador = () => {

    

    const[numero, setNumero] = useState(0);


    const aumentar = () => {
        console.log("me diceste un click")
        setNumero(numero + 1);
    }


    return ( 
        <Fragment>
        <h3>HOLA MUNDO {numero}</h3>
        <button onClick={aumentar}>Guardar</button>
        </Fragment>
     );
}
 
export default Contador;