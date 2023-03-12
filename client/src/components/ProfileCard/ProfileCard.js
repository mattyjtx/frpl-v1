import React from 'react'
import Cover from '../../img/socialmediacover.jpeg'
import Profile from '../../img/profileImg.jpeg'
import './ProfileCard.css'

const ProfileCard = () => {
  return (
    <div className='ProfileCard'>
        <div className='ProfileImages'>
            <img src={Cover} alt='' />
            <img src={Profile} alt='' />
        </div>

        <div className='ProfileName'>
            <span>Frappo Sama</span>
            <span>Junior Developer</span>
        </div>

        <div className='followStatus'>
            <hr />
            <div>
                <div className='follow'>
                    <span>333</span>
                    <span>Following</span>
                </div>
                <div className='vl'></div>
                <div className='follow'>
                    <span>69</span>
                    <span>Followers</span>
                </div>

            </div>
            <hr />
        </div>
        <span>
            My Profile 
        </span>
    </div>


  )
}

export default ProfileCard