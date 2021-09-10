import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { getAlpAsc, getAlpDes, getByContinent, getPobAsc, getPobDes } from '../../store/redux/actions/actions'
import { FilterController, FilterControllerContinent, getActividad } from './Filter-Controller';
import './Filter-Styles.css'


export default function Filtros() {
    
    //Creo estados locales...
    const [activador, setActivador] = useState('');
    const [data, setData] = useState('');
    const [render, setRender] = useState('');
    const [activador2, setActivador2] = useState('');


    //Creo constante de despacho...
    const dispatch = useDispatch()

    //Accedo a estados globales:
    const countriesbycontinent = useSelector(state=> state.countriesbycontinent);
    const alphabeticas = useSelector(state=> state.alphabeticas);
    const alphabeticdes = useSelector(state=> state.alphabeticdes);
    const poblationasc = useSelector(state=> state.poblationasc);
    const poblationdes = useSelector(state=> state.poblationdes);
    const activities = useSelector(state=> state.activities);

    //Constantes de referencias de datos...
    const dataPoblacion = useRef(null)
    const dataAlphabetic = useRef(null)
    const dataContinente = useRef(null)
    const dataActividad = useRef(null)

    //UseEffect SwicthDispatch...
    useEffect(()=>{
        SwitchDispatch(data);
        console.log(data);
        if(data.length !==0 ){setActivador2('cualquiercosa')}
    },[data])
    //UseEffect Renderizado de filtrados...
    useEffect(()=>{
        setRender(data)  
    },[activador2])

    function SwitchDispatch(data) {
        switch (data) {
            //Población
            case 'ascendente':
                return dispatch(getPobAsc());
            case 'descendente':
                return dispatch(getPobDes())
            //Alfabético    
            case 'alphaAsc':
                return dispatch(getAlpAsc())
            case 'alphaDes':
                return dispatch(getAlpDes())
            //Continente
            case 'Americas':
                return dispatch(getByContinent('Americas'))
            case 'Europe':
                return dispatch(getByContinent('Europe'))          
            case 'Africa':
                return dispatch(getByContinent('Africa'))
            case 'Asia':
                return dispatch(getByContinent('Asia'))
            case 'Oceania':
                return dispatch(getByContinent('Oceania'))
            case 'actividad':
                return setRender(data);   
            default:
                return data
        }
    }
    //Función para enviar los datos del dropdwon al estado local...
    function SubmitData(activador){
        switch (activador) {
            case 'poblacion':
                return setData(dataPoblacion.current.value)
            case 'continente':
                return setData(dataContinente.current.value)
            case 'alphabetic':
                return setData(dataAlphabetic.current.value) 
            case 'actividad':
                return setData(dataActividad.current.value);
            default:
                console.log(activador);
        }
    }
    //Seteadores del Activador...
    function porPoblacion() {
        setActivador('poblacion')
    }
    function porAlfabeto() {
        setActivador('alphabetic')
    }
    function porContinente() {
        setActivador('continente')
    }
    function porActividad() {
        setActivador('actividad')
    }

    //Selectores...
    function FilterPoblation(){
        return(
            <div className="filtradosV">
                <select className='selectors' ref={dataPoblacion}>
                    <option value="">Población</option>
                    <option value="ascendente">Ascendente</option>
                    <option value="descendente">Descendente</option>
                </select>
            </div>
        )
    }
    function FilterContinent(){
        return (
            <div className="continentes">
                <select className='selectors' ref={dataContinente}>
                    <option value="">Continente</option>
                    <option value="Africa">África</option>
                    <option value="Americas">América</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europa</option>
                    <option value="Oceania">Oceanía</option>
                </select>
            </div>
        )
    }
    function FilterAlphabetic(){
        return (
            <div className='alphabetic'>
                <select className='selectors' ref={dataAlphabetic}>
                    <option value="">Alfabético</option>
                    <option value="alphaAsc" >Alfabetico Ascendente</option>
                    <option value="alphaDes">Alfabetico Descendente</option>
                </select>
            </div>
        )
    }
    function FilterActivity(){
        return (
        <div className="activity">
            <select className='selectors' ref={dataActividad}>
                <option value="">Actividad</option>
                <option value="Esquiar" >Esquiar</option>
                <option value="Surfear">Surfear</option>
                <option value="Pescar">Pescar</option>
                <option value="Acampar">Acampar</option>
                <option value="Visitar Ciudades">Visitar Ciudades</option>
                <option value="Rafting">Rafting</option>
            </select>
        </div>
        )
    }
    function FilterHome() {
        return (
            <div className="contenedore">
                <h1 className='tit'>Opciones de Filtrados</h1>
                <h2 className='ask'>¿Cómo te gustaría filtrar los paises?</h2>
                <div className="data">
                    <button onClick={porContinente} className='activadores'><h3 className='tes'>Por continentes</h3></button>
                    <button onClick={porPoblacion} className='activadores'><h3 className='tes'>Por población</h3></button>
                    <button onClick={porAlfabeto} className='activadores'><h3 className='tes'>Por orden alfabético</h3></button>
                    <button onClick={()=>{alert('Opción deshabilitada por mantenimiento')}} className='activadores'><h3 className='tes'>Por actividades</h3></button>
                </div>
                <div class="custom-select">
                    {
                        switcher(activador)
                    }
                </div>
                <button className="as" onClick={()=>{SubmitData(activador)}} >Filtrar</button>
            </div>
        )
    }
    //Función Switch para setear el activador(estado local)...
    function switcher(activador) {
        switch (activador) {
            case 'poblacion':{
                return FilterPoblation()
            }
            case 'alphabetic':{
                return FilterAlphabetic()
            }
            case 'continente':{
                return FilterContinent()
            }
            case 'actividad':{
                return FilterActivity()
            }
            default:
                break;
        }
    }
    

    //Función switch para el renderizado de componentes filtrados...
    function SwitchComponenteFiltrados(render) {
        switch (render) {
            case 'ascendente':
                return FilterController(poblationasc)
            case 'descendente':
                return FilterController(poblationdes)    
            case 'alphaAsc':
                return FilterController(alphabeticas)
            case 'alphaDes':
                return FilterController(alphabeticdes)
            case 'Asia':
            return FilterControllerContinent(countriesbycontinent)
            case 'Oceania':
                return FilterControllerContinent(countriesbycontinent)
            case 'Europe':
                return FilterControllerContinent(countriesbycontinent)
            case 'Africa':
                return FilterControllerContinent(countriesbycontinent)
            case 'Americas':
                return FilterControllerContinent(countriesbycontinent)
            //Activities...
            case 'Esquiar':
                return getActividad(activities, 'Esquiar')
            case 'Surfear':
                return getActividad(activities, 'Surfear')
            case 'Pescar':
                return getActividad(activities, 'Pescar')
            case 'Acampar':
                return getActividad(activities, 'Acampar')
            case 'Rafting':
                return getActividad(activities, 'Rafting')
            case 'Visitar Ciudades':
                return getActividad(activities, 'Visitar Ciudades')

            default:
                return FilterHome()
        }
    }

    return (
        <div className={render==''?'':'cont'}>
            {
                SwitchComponenteFiltrados(render)
            }
        </div>
  
    )
}