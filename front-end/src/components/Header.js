import React from 'react'
import './Header.css'
import Clock from './Clock'

import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Header() {
    const user = "User"
    return (
        <div className="app-header">
            Hello {user} 
            <Clock />
            <FontAwesomeIcon icon={faHome} />
        </div>
    )
}
