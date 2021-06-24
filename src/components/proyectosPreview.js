import React from 'react';
import Image from 'gatsby-image'
import {css} from '@emotion/react'
import styled from '@emotion/styled';
import { Link } from 'gatsby';


const ProyectosPriview = ({proyecto}) => {

    const {titulo, descripcion, imagen, slug} = proyecto

 

    return ( 

        <div
            css={css`
                border: 1px solid #e1e1e1;
                margin-bottom: 2rem;
            `}
        >
            <Link to={slug} target="_blank" rel="noopener" >
            <Image
                fluid={imagen.fluid}
             
            />
            </Link>

            <div
                css={css`
                    padding: 2rem;
                `}
            >
                <h3>{titulo}</h3>

                <p
                    css={css`
                         text-align: justify;
                    `}
                >{descripcion}</p>
                

            </div>



        </div>
     );
}
 
export default ProyectosPriview;