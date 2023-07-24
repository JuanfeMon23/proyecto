import React from 'react'
import { Link } from 'react-router-dom'

export function Navigator() {
  return (
    <nav>
      <ul>
        <li>
            <Link to="/Login"> Login </Link>
        </li>
        <li>
            <Link to="/Dashboard"> Dashboard </Link>
        </li>
      </ul>
    </nav>
  )
}


