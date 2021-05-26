import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { getActivity } from '../../store/redux/actions/actions';
import { getActividad } from './Actividad-Controller';

export default function ViewActivities() {

   const activities = useSelector(state=>state.activities);
   const dispatch = useDispatch()
   useEffect(()=>{
    dispatch(getActivity())
   },[]);

   return(
       <div className="content">
           <h1>Actividades!</h1>
           <div className='ActividadContenedor'>
               {
                   getActividad(activities)
               }
           </div>
       </div>
   )
}