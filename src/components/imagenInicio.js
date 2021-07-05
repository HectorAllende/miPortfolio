import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled';



const Imagen= styled(Img)`
    max-width: 250px;
    width: 95%;
    margin: 4rem auto 0 auto;
    border-radius: 50%;
    
`

const Texto= styled.div`
    
    padding-top: 2rem;
    max-width: 65rem;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
    font-family: 'PT Sans', sans-serif;
  
    

    @media (min-width: 768px){
        
        column-gap: 3rem;
    }
    p{
        line-height: 1.5;   
        text-align: justify;
        margin:2rem;
    }
    h1{
        font-size: 3rem;
        margin: 2rem;
        @media (min-width: 768px){
        
        font-size: 3.5rem;
        }
    }  
    h2{
        margin: 2rem;
    } 
    a{
        text-decoration: none;
    }
    
    
`

const ImagenInicio = () => {

    const {image}= useStaticQuery(graphql`
    query{
        image: file(relativePath:{eq: "yo2.jpg"}){
            sharp: childImageSharp{
                fluid(maxWidth:400, maxHeight:400){
                    ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `)

    return ( 
        <>

        <Imagen
        tag="section" fluid={image.sharp.fluid} fadeIn="soft"

        />

        <Texto>
            <h1>Hola, soy Héctor</h1>

            <p>Desarrollador web Frontend. 
            Terminé mi carrera de Desarrollo Web en Acámica en 2020,
            luego continué realizando cursos y varios proyectos,
             enfocados en React, utilizando Hooks, Context, Redux, Next, Gatsby, NodeJs, Firebase
            entre otros. Los ultimos 10 años me estuve desempeñando como Analista Financiero</p>

            <p>Actualmente estoy viviendo en Rosario, Argentina</p>

            <h2>Contacto</h2>

            <div
          
            >
                <div>

                    <p>Mail: hectorallende@gmail.com</p>
                    {/* <p>telefono: 351-3739857</p> */}

                    <p>Likendin: <a href="https://www.linkedin.com/in/hallende/" target="_blank" rel="noopener noreferrer">hallende</a></p>
                    <p>GitHub: <a href="https://github.com/HectorAllende" target="_blank" rel="noopener noreferrer">hectoraAllende</a></p>
              </div>

              

                <form
                        name="contact"
                        method="post"                 
                        data-netlify="true"
                        data-netlify-honeypot="botfield"   

                        css={css`
                           text-align: center ;
                           display: flex;
                           margin-bottom: 3rem;
                           margin:2rem;

                        `}
                    >
                         <input type="hidden" name="contact" aria-hidden="true" value="comentarios" />
                       
                        <textarea
                            name="comentarios"
                            placeholder="Déjame un mensaje o consulta"
                            css={css`
                                flex: auto;
                            `}
                        ></textarea>
                        <button
                            type="submit"
                        >Enviar</button>
                </form>

            </div>
               
        </Texto>

        </>

       


     );
}
 
export default ImagenInicio;