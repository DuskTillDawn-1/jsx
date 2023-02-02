import React from 'react'

function FullName({name}) {
  return (
    <p>{name} El Jamii</p>
  )
}

FullName.defaultProps = {
  name: "Mehdi"
 };

export default FullName