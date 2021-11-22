import React from 'react'
import car from '../../images/car.png'
import './Home.css'

export default function Home() {
    return (
        <div className="contenedor">
            <div className="contenedor__img">
                <img src={car} alt="Car" />
            </div>
            <div className="contenedor__title">
                <h1><strong className="init">x</strong>yz</h1>
                <p>Tu mejor opcion en fabricacion <br />de autos</p>
            </div> 
        </div>
    )
}
