import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const isActive = (history, path) => {
    if(history.location.pathname === path) {
        return { color : '#e36f17' }
    }
    else {
        return { color : '#c4e317' }
    }
}

const menu = ({ history }) => (
    <div>
        <ul className='nav nav-tabs'>
            <li className='nav-item'>
                <Link className='nav-link' style={isActive(history, '/')} to='/'>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' style={isActive(history, '/signup')} to='/signup'>
                    SignUp
                </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' style={isActive(history, '/signin')} to='/signin'>
                    SignIn
                </Link>
            </li>
        </ul>
    </div>
)

export default withRouter(menu);