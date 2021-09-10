import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FilterController } from './Filter-Controller';


export default function FilterResults() {

    //Accedo a estados globales...
    const countriesbycontinent = useSelector(state=> state.countriesbycontinent);
    const alphabeticas = useSelector(state=> state.alphabeticas);
    const alphabeticdes = useSelector(state=> state.alphabeticdes);
    const poblationasc = useSelector(state=> state.poblationasc);
    const poblationdes = useSelector(state=> state.poblationdes);

    
    return(
        <div className="cont">
            {
                FilterController(alphabeticas)
            }
        </div>
    )
}