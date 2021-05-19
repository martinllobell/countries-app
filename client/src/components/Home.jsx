import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

export default function Home() {
    return (
        <div className='containerr'>
            <h1 className='titlee'>My Countries App!</h1>
            
            <button className='btn'>
                <Link to='/countries'>Ver Países...</Link>
            </button>
        </div>
    )
}