import React from 'react';

function Heading() {
  return (
    <div className='heading'>
      <img src={require ('../assets/profile__img.png')} alt="profile" id='profile__img'/>
      <img src={require ('../assets/_Avatar share button.png')} className='share' alt="avatar share button"/>
      <h2 id='twitter'>Omobayode6</h2>
      <h2 id='slack'>Omobayode Festus Osinubi </h2>
    </div>
  )
}

export default Heading