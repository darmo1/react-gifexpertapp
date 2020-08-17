import React from 'react'

export const GifGridItems = ({id,title, url})=>{



    return (
        <div className="card animate__animated animate__bounce animate__flipInY">
            <img src={url} alt={title} />
            <p> {title} </p>
        </div>
    )
}