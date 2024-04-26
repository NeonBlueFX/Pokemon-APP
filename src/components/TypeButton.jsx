import {useState, useEffect, useRef} from 'react'
import { POKEMON_DATA_TYPE } from '../utils/constants';
import usePokemons from '../hooks/usePokemons';


function TypeButton({label,handler})
{
const POKEMON_TYPE_TOGGLE = usePokemons()
const [isToggled, setisToggled] =useState(false)
const type_ref = useRef("water")



return(
  
    //    <label className=' text-white'><input type='radio' checked={isToggled}  ref={type_ref} onChange={handler}></input>{label}</label>
    <button type='button'  className=' text-white font-bold border p-2 hover:bg-slate-600' value={isToggled}  ref={type_ref} onClick={handler}>{label}</button>

    
)
}

export default TypeButton;
