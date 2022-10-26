import React from 'react';

function Heading() {
  return (
    <div className='heading'>
      <img src={require ('../assets/profile__img.png')} alt="profile" id='profile__img'/>
      <h2 id='twitter'>Omobayode6</h2>
      <h2 id='slack'>Omobayode Festus Osinubi </h2>
    </div>
  )
}

export default Heading