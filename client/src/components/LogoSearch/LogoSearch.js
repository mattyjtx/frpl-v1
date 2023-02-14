import React from 'react'
import Logo from '../../img/frapple-logo-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
        <img src={Logo} alt="frapple-logo"/>
        <div className='Search'>
            <input type="text" placeholder='#explore' />
            <div className='s-icon'>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </div>
        </div>
    </div>
  )
}

export default LogoSearch