import React /*{ useState, useEffect }*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    const {data:images, loading} = useFetchGifs(category);//renombrar data
        
    return (
        <>
        <h3 className="card animate__animated animate__fadeInDown">{category}</h3>
        {loading && <p className="card animate__animated animate__flash">cargando</p>}
        { <div className="card-grid">
                {
                    images.map(img=>(
                       <GifGridItem 
                       key={img.id}
                       {...img}/>
                    ))
                }
        </div>}
        </>
    )
}
