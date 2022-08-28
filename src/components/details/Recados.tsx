import React, { useEffect } from 'react'
import axios from 'axios'


    


const Recados = ()=>{


function verificaToken(){

    const token = localStorage.getItem("Token") || ""

    console.log("token é: " + token);






    
    
    
    
    }



useEffect(()=>{
 
    verificaToken();

},[])




    return(
            <div>
                <h1>Pagina de recados</h1>
            </div>
    )
}

export default Recados