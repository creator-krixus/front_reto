import React, { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'

export default function Orders() {
    const [datos, setDatos] = useState({
        marca: "",
        cantidad: "",
        horas: ""
    })


    const data = (e) =>{
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value
        })
    }

    const clear = () => { 
        document.getElementById("form").reset();
      }

    const enviarDatos = (e) => {
        e.preventDefault();
        if(datos.marca === "" || datos.cantidad === ""){
            swal({
                title: 'Error',
                text: 'Debes llenar todos los campos',
                icon: 'error',
                button: 'Aceptar'
            })
            clear()

        }else{
            axios.post('https://lumni.herokuapp.com/api/v1/orders', datos)
            .then((res)=>console.log(res.data))
            .catch(error=>console.log(error))
            swal({
                title: 'Bien hecho',
                text: 'Registro exitoso',
                icon: 'success',
                button: 'Aceptar'
            })
            clear()
        }
    }

    return (
        
        <div className="container mt-5 border">
            <h1 className="mt-2 mb-4">Registrar pedido</h1>
            <form className="row g-3" id="form" onSubmit={enviarDatos}>

                <div className="col-md-4">
                    <label class="form-label">Marca</label>
                    <select className="form-select" name="marca" onChange={data} required>
                    <option>Selecciona una marca</option>
                    <option>Toyota</option>
                    <option>Renault</option>
                    <option>Ford</option>
                    <option>Chevrolet</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Cantidad</label>
                    <select className="form-select" name="cantidad" onChange={data} required>
                    <option>Cantidad a fabricar</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>

                    </select>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Horas</label>
                    <select className="form-select" name="horas" onChange={data} required>
                    <option>Tiempo de fabricacion</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>  
                    </select>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary mt-3 mb-4">Submit</button>
                </div>
            </form>
        </div>
        
    )
}
