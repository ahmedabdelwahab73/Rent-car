import { faCar, faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const FooterMedia = () => {
  return (
    <footer>
        <NavLink to={'/'}>
            <FontAwesomeIcon icon={faHouse} />
            <p>Home</p>
        </NavLink>
        {
            window.localStorage.getItem('national') ? 
            <NavLink to={`/profile`}>
                <FontAwesomeIcon icon={faUser} />
                <p>Profile</p>
            </NavLink>
            :
            <Link to={'/login'}>
                <FontAwesomeIcon icon={faUser} />
                <p>Profile</p>
            </Link>
        }

    </footer>
  )
}

export default FooterMedia