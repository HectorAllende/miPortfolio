import React from 'react';
import Layout from '../components/layout';
import ProyectosPriview from '../components/proyectosPreview';
import styled from '@emotion/styled';
import useProyectos from '../hooks/useProyecto';
import { css } from '@emotion/react';

const ListadoProyectos = styled.ul`
  max-width: 1200px;
  width: 95%;

  margin: 4rem auto 0 auto;

  @media (min-width: 768px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }

`

const Proyectos = () => {

    const proyectos = useProyectos()

   
    return ( 

        <Layout>
            <h1
                css={css`
                   text-align: center;
                   margin-top: 2rem;
                   font-size: 3rem;
                `}
            >Proyectos</h1>

            <ListadoProyectos>
                {proyectos.map(proyecto=>(
                    <ProyectosPriview
                        key={proyecto.id}
                        proyecto={proyecto}
                    />
                ))}
            </ListadoProyectos>
         


        </Layout>
     );
}
 
export default Proyectos;