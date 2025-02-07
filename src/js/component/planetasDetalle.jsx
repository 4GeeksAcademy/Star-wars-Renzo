import React,{useContext, useEffect, useState} from "react"
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const PlanetasDetalles = () =>{

    const {id} = useParams()
    const {store, actions} = useContext(Context)
    const [dataDetalles, setDataDetalles] = useState([]);
    
    const CardDetalle = (props) =>{

        let urlImagen = `https://starwars-visualguide.com/assets/img/planets/${props.item.uid}.jpg`

        return(
            <div className="pt-5 bg-black bg-gradient">
                <div className="card mb-3 mx-5" style={{border: "0"}}>
                    <div className="row g-0">
                        <div className="col-md-4 bg-dark bg-gradient">
                            <img src={urlImagen} className="img-detalle img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8 bg-dark bg-gradient">
                            <div className="card-body">
                                <h2 className="card-title text-white">{props.item.properties.name}</h2>
                                <h5 className="card-text text-white">{props.item.description}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex text-center">
                    <div className="col-4">
                        <h3 style={{color:"#ffe81f"}}>Name: {props.item.properties.name} </h3>
                    </div>
                    <div className="col-4">
                        <h3 style={{color:"#ffe81f"}}>Climate: {props.item.properties.climate} </h3>
                    </div>
                    <div className="col-4">
                        <h3 style={{color:"#ffe81f"}}>Gravity: {props.item.properties.gravity} </h3>
                    </div>
                </div>
            </div>
        )
    }

    useEffect(()=>{
        actions.fetchPlanetasDetalle(id)
    }, []);
    return(<>

            {
                store.detallePlanetas.map((item, index)=>{
                    return(
                        <CardDetalle key={index} item={item}/>
                    )
                })  
            }    
       </>
    )
}

export default PlanetasDetalles