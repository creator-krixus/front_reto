
import RowsTable from './RowsTable';

export default function OrdersPending() {

    
    return (
        <div className="container">
        <div className="mb-5 mt-3">
        <h1>Vehiculos a producir hoy</h1>
            <table className="table table-striped table-hover mt-4">
                <thead>
                    <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Tiempo de fabricacion</th>
                    <th scope="col">Tiempo acumulado</th>
                    </tr>
                </thead>
{/*             {datos.filter(item => (item.estado != 0)).reduce((acc, dat) => acc+dat.horas, 0)}
            {datos.filter(item => (item.estado != 0)).reduce((acc, dat) => [...acc, dat.marca], [])} */}
            </table>  
        </div>
        <h1>Total de vehiculos a producir</h1>
            <RowsTable />
        </div>
    )
}
