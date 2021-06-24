import React from 'react';
import Navegacion from './navegacion';
import {css} from '@emotion/react'
import styled from '@emotion/styled'
import {Link} from 'gatsby'

const EnlaceHome = styled(Link)`
    text-align: center;
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    
`

const Header = () => {
    return ( 
        <header
            css={css`
                background-color: #ECEEEC ;
                padding: 1rem;
            `}
        >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;
                   

                    @media (min-width: 678px){
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <EnlaceHome to="/">
                <h1>Héctor Allende</h1>
                </EnlaceHome>

                <Navegacion/>

            </div>




        </header>
     );
}
 
export default Header;