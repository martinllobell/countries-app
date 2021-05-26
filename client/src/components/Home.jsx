import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

export default function Home() {
    return (
        <div className='containerr'>
            <h1 className='titlee'>My Countries App!</h1>
                <Link to='/countries'>
                   <button className='btn'>Ver Países...</button>
                </Link>
            
        </div>
    )
}