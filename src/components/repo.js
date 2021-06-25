import React from 'react';
import styled from '@emotion/styled';


const Lista = styled.div`
   margin: 1rem;
   line-height: 1.5;
   font-size: 1.5rem;
    width: 50%;
    max-width: 50rem;
    margin-right: auto;
    margin-left: auto;
    align-items: center;

    a{
        text-decoration: none;
    }
    p{
        color: #5C5F5C ;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;

    }
    h3{
        color: blue;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }

`



const Repo = ({repo}) => {
    return (  
        <li>
            <Lista>
               <h3> <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h3>
                <p>{repo.description}</p>               


            </Lista>



        </li>
    );
}
 
export default Repo;