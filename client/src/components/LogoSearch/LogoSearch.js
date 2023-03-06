import React from 'react'
import Logo from '../../img/frapple-logo-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'

const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
        <img src={Logo} alt="frapple-logo"/>
        <div className='Search'>
            <input type="text" placeholder='#explore' />
            <div className='s-icon'>
            <UilSearch/>
            </div>
        </div>
    </div>
  )
}

export default LogoSearch