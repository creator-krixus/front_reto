import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert'
import EditOrder from '../orders/EditOrder';


export default function RowsTable() {

    const [datos, setDatos] = useState([]);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        axios.get('https://lumni.herokuapp.com/api/v1/orders')
        .then((res) => {
            setDatos(res.data)
        })
        .catch(error => console.log(error))
    }, []);

    const edit = (e, item) => {
        e.preventDefault();
        setEditId(item.id)
        console.log(item.id)
    }

    const refres = () => {
        window.location.reload(true);
    }
    const delet = (item) => {
        swal({
            title: "Esta seguro?",
            text: "Una vez borrado usted no puede recuperar su pedido!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios.delete(`https://lumni.herokuapp.com/api/v1/orders/${item}`)
                .then((res)=>console.log(res.data))
                .catch(error=>console.log(error))
              swal("Su pedido a sido borrado!", {
                icon: "success",
              });
              setTimeout(refres, 3000)
            } else {
              swal("Su pedido sigue igual!");
              
            }
          });
        
    }
    return (
        <div id="container">
            <table className="table table-striped table-hover mt-4">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Tiempo de fabricacion</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
               {datos.filter(item => (item.estado !== 0)).map(item => (
                <tbody>
                <Fragment>
                {editId === item.id ? (<EditOrder item={item.id}/>):(
                    <tr>
                    <th id="id">{item.id}</th>
                    <td>{item.marca}</td>
                    <td>{item.cantidad}</td>
                    <td>{item.horas} Horas</td>
                    <td>{item.fecha}</td>
                    <td><button type="button" className="btn btn-outline-dark" onClick={(e) => edit(e, item)}><FontAwesomeIcon icon={faEdit} /></button>       <button type="button" className="btn btn-outline-dark" onClick={() => delet(item.id)}><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                    </tr>
                )}
                </Fragment>
                </tbody>
                 ))}

            </table>
        </div>
    )
}
