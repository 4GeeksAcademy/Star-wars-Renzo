import React,{useContext, useEffect, useState} from "react"
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const VehiculosDetalles = () =>{

    const {id} = useParams()
    const {store, actions} = useContext(Context)
    const [dataDetalles, setDataDetalles] = useState([]);

    console.log("id", id)
    console.log("detalles store", store.detallePersonajes)
    
    const CardDetalle = (props) =>{

        let urlImagen = `https://starwars-visualguide.com/assets/img/vehicles/${props.item.uid}.jpg`

        return(
            <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                <img src={urlImagen} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{props.item.properties.name}</h5>
                    <p className="card-text">{props.item.description}</p>
                </div>
                </div>
            </div>
        </div>
        )
    }

    useEffect(()=>{
        actions.fetchVehiculosDetalle(id)
    }, []);
    return(<>

            {
                store.detalleVehiculos.map((item, index)=>{
                    return(
                        <CardDetalle key={index} item={item}/>
                    )
                })  
            }    
       </>
    )
}

export default VehiculosDetalles