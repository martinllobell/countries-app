import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useRouteMatch  } from 'react-router-dom';
import { searchCountries, setVerify } from '../../store/redux/actions/actions';
import './NavBar.css'


export default function NavBar() {
 

    const countriesfounded = useSelector(state=> state.countriesfounded)
    const [search, setSearch] = useState('')
    const [phone, setPhone] = useState(false)
    const [sidebar, setSidebar] = useState(false)
    const dispatch = useDispatch()

    async function SearchCountries(e) {
        e.preventDefault();
        await dispatch(searchCountries(search))
        await dispatch(setVerify('searchcountry'))
    }
    useEffect(async ()=>{
        console.log(countriesfounded)
    },[countriesfounded])
    useEffect(()=>{
        var widthBrowser = window.outerWidth;
        if (widthBrowser < 800) {
          setPhone(true)  
        }
    },[])


    return (
        <div className="header">
           <Link to='/countries' className={phone?'none':'linkk'}><h1 className='title'></h1></Link>
           <div className={phone?'sidebar':'none'} onClick={()=>{sidebar?setSidebar(false):setSidebar(true);}}>
               <section className={sidebar?'menudeploy':'none'}>
                   <div className='sidebar2'></div>
                    <ul className='linkcontsidebar'>
                        <Link path to='/countries' className='sidebarlink'>Inicio</Link>
                        <Link path to='/filtros' className='sidebarlink'>Filtrar Resultados</Link>
                        <Link path to='/activity' className='sidebarlink'>Crear Actividad</Link>
                        <Link path to='/activity/all' className='sidebarlink'>Ver Actividades</Link>
                    </ul>
               </section>
           </div>
            <form class="form-search" onSubmit={SearchCountries}>
                <i class="fas-fa-search"></i>
                <input type="text" placeholder="Buscar paises..." className='input' onChange={(e) => {setSearch(e.target.value);}}/>
            </form>
            <button type='submit' className='submitbtn' onClick={SearchCountries}></button>
            <Link path to='/filtros' className='link'>Filtrar Resultados</Link>
            <Link path to='/activity' className='link'>Crear Actividad</Link>
            <Link path to='/activity/all' className='link'>Ver Actividades</Link>
        </div>
    )

}