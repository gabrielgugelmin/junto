import React from 'react';

const Title = (props) => {
  return (
    <h1 class={`title ${props.class}`}>{props.children}</h1>
  )
}

export default Title;