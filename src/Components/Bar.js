import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Bar(props) {
  const now = props.val;
  
  return <ProgressBar className='bg-transparent  ' variant={props.variant} now={now } label={`${now}%` }  />;
}

export default Bar;