import React from 'react';

const Links = ({linktrees}) => {
  return(
    linktrees.map((linktree, key) =>{
      return(
        
          <button className='btn' id={key}><a href={linktree.link} target="_blank" rel="noopener noreferrer">{linktree.name}</a></button>
        
      )
    })
  )
}

export default Links