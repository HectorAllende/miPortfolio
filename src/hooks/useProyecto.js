import {graphql, useStaticQuery} from 'gatsby'

const useProyectos = () => {
    
    const data = useStaticQuery(graphql`
    query{allDatoCmsProyecto{
        nodes{
     		titulo
        descripcion
        slug
        imagen{
                fluid(maxWidth: 1200){
                    ...GatsbyDatoCmsFluid    
          }
        }
      }
    }}
    `)
    

    

    return data.allDatoCmsProyecto.nodes.map(proyecto=>({
        titulo: proyecto.titulo,
        id: proyecto.id,
        descripcion: proyecto.descripcion,
        imagen: proyecto.imagen,
        slug: proyecto.slug
    }));
}
 
export default useProyectos;