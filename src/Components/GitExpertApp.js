import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import {GifGrid} from "./GifGrid"

const  GitExpertApp = ()=>{


    const [categories, setCategories] = useState( ['Rick and Morty'])    

  /*  const handleAdd = ()=>{
       setCategories([...categories, 'Danilo']
       ) } */
        /* otra solucion es con un callback donde recibira un parametro que es el estado anterior asi:
        setCategories( cats => [...cats, 'Danilo'] */
   
    return (
        <>
        <h1> GitExpertApp </h1>
        <hr/>
       
        <AddCategory setCategories={setCategories}/>
        <ol>
            {
                categories.map( category => (
                   // <li key={category}> {category} </li>
                   <GifGrid key={category} category={category}/>
                ))
            }
        </ol>

        </>
    )
}

export default GitExpertApp; 