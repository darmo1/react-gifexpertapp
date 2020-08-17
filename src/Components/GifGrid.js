import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItems } from './GifGridItems';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category})=>{


const {data:images, loading} = useFetchGifs(category);



/*    const [images, setimages] = useState([])

    useEffect(()=>{
       getGifs(category)
       .then(imgs => setimages(imgs))
    },[category]) */


   




    return(
        <>
        <h3>{category}</h3>

        {loading && <p>Cargando...</p>}

        <div className="card-grid">
               {
                   images.map(img => (
                       <GifGridItems key={img.id} {...img} />
                   ))
               }
           
        </div> 
        </>
    )
}