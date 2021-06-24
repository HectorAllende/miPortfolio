import React from 'react';
import {Link} from 'gatsby'
import styled from '@emotion/styled'

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
    @media(min-width: 768px){
        padding-bottom: 0;
    }
`
const NavLink= styled(Link)`
    color: #3385FB;
    font-size: 1.7rem;
    font-weight: 700;
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;

    &:last-of-type{
        margin-right: 0;
    }

    &.pagina-actual{
        border-bottom:2px solid #3385FB;
    }

`

const Navegacion = () => {
    return ( 

        <Nav>
            <NavLink to="/" activeClassName="pagina-actual">Inicio</NavLink>
            <NavLink to="/proyectos" activeClassName="pagina-actual">Proyectos</NavLink>
            <NavLink to="/repositorios"activeClassName="pagina-actual">Código GitHub</NavLink>

            

        </Nav>
     );
}
 
export default Navegacion;