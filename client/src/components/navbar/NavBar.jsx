import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'


export default function NavBar() {

    return (
        <div className="header">
            <h1 className='title'><Link to='/'>Countries App</Link></h1>
            <form class="form-search">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Buscar paises..."/>
            </form>
            <div className="contenedor">
                <div class="custom-select">
                    <select className='selectors'>
                        <option value="" active>Filtrar...</option>
                        <option value="Africa">África</option>
                        <option value="Americas">América</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europa</option>
                        <option value="Oceania">Oceanía</option>
                    </select>
                </div>
            </div>
        </div>
    )

}