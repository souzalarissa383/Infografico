/* eslint-disable no-unused-vars */
import React, {useState , useEffect} from 'react'

function Aplicacao(){  

    //armazenar dados
    const [ presidente, setPresidente] = useState([])
   
    //pega dados
    useEffect(() => {
        Dados()
        
    }, []) 

        // obtem os dados da API 
        // fetch para fazer a requisicao da API
    const Dados = async () => {
        const dadosRepo = await fetch ('https://infograficos-eleicoes-oglobo.s3.amazonaws.com/2022/1-turno/apuracao/presidente/presidente_brasil.json')
      console.log(dadosRepo);
        //converte os dados para json
        const converter = await dadosRepo.json(dadosRepo)
        console.log(converter)
        setPresidente(converter.c)
    }
    return(
        <div>
          <table>
        
          <tr>
            <th>Nome Candidato</th>
            <th >Partido</th>
            <th>Porcentagem</th>
            <th>Quantidade de Votos</th>
          </tr>
           
          <td>
            {presidente.map(candidato => (<tr key={candidato.nc}>{candidato.nc} </tr>))}  
           </td>

           <td> 
            {presidente.map(candidato => (<tr key={candidato.p}>{candidato.p}</tr>))}
          </td>
          <td > 
          {presidente.map(candidato => (<tr key={candidato.vp}>{candidato.vp} </tr>))}
          </td>

          <td > 
            {presidente.map(candidato => (<tr key={candidato.v}>{parseInt(candidato.v).toLocaleString('pt')} </tr>))}
          </td>
         
        </table>
       </div>
    )

} 


export default Aplicacao
    
