import React from 'react';

function Social() {
  return (
    <div className='social'>
      <a href="http://" target="_blank" rel="noopener noreferrer"><img src={require ('../assets/slack.png')} alt="Slack" className='slack-icon'/></a> 
      <a href="http://" target="_blank" rel="noopener noreferrer"><img src={require ('../assets/Icon.png')} alt="Slack" className='slack-icon'/></a>
    </div>
    
  )
}

export default Social