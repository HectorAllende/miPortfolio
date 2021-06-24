import React, {useEffect, useState} from 'react';
import Repo from './repo';
import axios from 'axios'

const Repos = () => {

    const [repos, guardarRepos] = useState([])
 

    useEffect(() => {

        const data = sessionStorage.getItem("repos")
    
        if(data){
            let resultado = JSON.parse(data)
                      
            
            return guardarRepos(resultado.data)
            
        }

        const consultarRepos = async()=>{
            const url = 'https://api.github.com/users/hectorallende/repos'
            const resultado = await axios.get(url)
           

            sessionStorage.setItem("repos", JSON.stringify(resultado.data))
            guardarRepos(resultado.data)
        }
        consultarRepos()

        
    }, [])
    return ( 
        <div>
            <header>
                <h2>Mi trabajo en Open Source</h2>
                <p>Colaboracion y contribución de código</p>
            </header>

            <ul>
                {
                    repos.map(repo=>{
                        return <Repo 
                        key={repo.id}
                        repo={repo}/>
                 })
                }
            </ul>

         
        </div>
     );
}
 
export default Repos;