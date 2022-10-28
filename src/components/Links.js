import React from 'react';

const Links = ({linktrees}) => {
  return(
    <div className='link-section'>
    {
      linktrees.map((linktree, key) =>{
        return(
          <button className='btn' id={key}><a href={linktree.link} target="_blank" rel="noopener noreferrer">{linktree.name}</a></button>
        )
      })}
    </div>
  )
}

export default Links