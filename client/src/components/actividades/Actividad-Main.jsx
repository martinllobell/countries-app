import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import './Actividad-Styles.css'
import { setActivity } from '../../store/redux/actions/actions';

export default function Activdades() {

    //Datos recolectados del Formulario...
    const dataName = useRef(null)
    const dataDificultad = useRef(null)
    const dataTemporada = useRef(null)
    const dataDuracion = useRef(null)
    const dataPais = useRef(null)

    //useDispatch y useSelector...
    const setactivities = useSelector(state=> state.setactivities);
    const dispatch = useDispatch();
    console.log(setactivities);

    //Creo un Estado local...
    const [actividad, setActividad] = useState({
        name: '', dificultad: '', duracion: '', temporada: '', pais: []
    });
    //Seteo el Estado local con los nuevos datos
    function creadoraActividad() {
        setActividad({
            name: dataName.current.value,
            dificultad: dataDificultad.current.value,
            duracion: dataDuracion.current.value,
            temporada: dataTemporada.current.value,
            pais: dataPais.current.value
        })
    }        
    //Funcion despachadora...
    useEffect(async()=>{{
        console.log('PAISSSSSSSSSSSSSSAAAAAAAAAAAAAAAA', actividad.pais);
        await dispatch(setActivity(actividad))
        }
    }, [actividad])
    
    return (
        <div className="main">
            {/* <pre>{JSON.stringify(actividad)}</pre> */}
            <div className="formu">
                <form className='formular'>
                    <h1 className='titulaso'>AGREGAR NUEVA ACTIVIDAD...</h1>
                    <p className='texti'>Nombre de la Actividad</p>
                    <input type="text" ref={dataName} className='inputText' placeholder='Ingresá el nombre de la actividad...'/>
                    <p className='texti'>Nombre del País</p>
                    <input type="text" ref={dataPais} className='inputText' placeholder='Ingresá el nombre del País...'/>
                        <div className='selectore'>
                            <select className='dificultad' ref={dataDificultad}>
                                <option value="" active>Dificultad</option>
                                <option value="Facil">Fácil</option>
                                <option value="Dificil">Difícil</option>
                                <option value="Intermedio">Intermedio</option>
                            </select>  
                            <select className='temporada' ref={dataTemporada}>
                                <option value="" active>Temporada</option>
                                <option value="Invierno">Invierno</option>
                                <option value="Verano">Verano</option>
                                <option value="Otoño">Otoño</option>
                                <option value="Primavera">Primavera</option>
                            </select>
                            <select className='duracion' ref={dataDuracion}>
                                <option value="" active>Duración</option>
                                <option value="2semanas">Dos Semanas</option>
                                <option value="1mes">Un Mes</option>
                                <option value="3meses">Tres Meses</option>
                                <option value="6meses">Seis Meses</option>
                            </select>
                        </div>
                    <button className='boton' onClick={creadoraActividad}>Aceptar</button>
                </form>
                <Link path to='/countries' ><button className='volveratras'>X</button></Link>
            </div>
        </div>
    )
    
}