import React, {useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import  {setCountriesToDatabase} from '../store/redux/actions/actions'
import './Home.css'

export default function Home() {

    useEffect(()=>{
        return setCountriesToDatabase()
    },[])

    return (
        <div className='containerr'>
            <h1 className='titlee'>My Countries App!</h1>
                <div className='btnCont'>
                <Link to='/countries' >
                   <button className='btn'>INICIAR</button>
                </Link>
                </div>
        </div>
    )
}