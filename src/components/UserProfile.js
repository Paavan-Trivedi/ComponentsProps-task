import React from 'react'
import './UserProfile.css';

export default function UserProfile(props) {
  return (
    <div className='main-div'>
      <div className="name">
        {props.username}
      </div>
      <div  >
        <img className="pic" src={props.imgsrc} alt="" />
      </div>
      <div className="bio">
        <h2>Bio :-</h2>
        {props.biopic}
      </div>
    </div>
  )
}
