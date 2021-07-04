import React, {useEffect, useState} from 'react';
import Repo from './repo';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import axios from 'axios'

const ListadoProyectos = styled.ul`
    margin: 4rem auto 0 auto;
    column-rule: 1px solid;
 

    /* @media (min-width: 400px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  
    } */



    @media (min-width: 768px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
   
  }

`

const Repos = () => {

    const [repos, guardarRepos] = useState([])
 

    useEffect(() => {

        const data = sessionStorage.getItem("repos")
    
        if(data){
            let resultado1 = JSON.parse(data)
                      
          
            return guardarRepos(resultado1)
            
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
                 <h2
                    css={css`
                        text-align: center;
                        margin-top: 2rem;
                    `}
                 >-Colaboración y contribución de código-</h2>
            </header>

            <ListadoProyectos>
                {
                    repos.map(repo=>{
                        return <Repo 
                        key={repo.id}
                        repo={repo}/>
                 })
                }
            </ListadoProyectos>

         
        </div>
     );
}
 
export default Repos;