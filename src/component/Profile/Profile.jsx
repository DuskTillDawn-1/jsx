import React from 'react'
import PropTypes from 'prop-types';


function Profile({fullName , bio, profession,children,handleName}) {
  return (
    <div >
<p>Profile</p>
{children}
<h2>{fullName}</h2>
<h3>{bio}</h3>
<h3>{profession}</h3>
<button onClick={handleName}>click me</button>
    </div>
  )
}
Profile.defaultProps = {
  fullName: "Rahul",
  eyeColor: "deepblue",
  age: "45"
}
Profile.propTypes = {
  fullName: PropTypes.string.isRequired
};
  


export default Profile