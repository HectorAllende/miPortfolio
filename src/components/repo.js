import React from 'react';

const Repo = ({repo}) => {
    return (  
        <li >
            <div>
                <h4>{repo.name}</h4>
                <p>{repo.description}</p>
            </div>
            <div>
            <a>Ver</a>
            </div>
          

        </li>
    );
}
 
export default Repo;