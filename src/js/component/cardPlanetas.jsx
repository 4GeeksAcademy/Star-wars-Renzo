import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";

const CardPlanetas = (props) =>{
    const { store, actions } = useContext(Context)

    const [dataPlanetas, setDataPlanetas] = useState([])

    let dato1 = ""
    let dato2 = ""
    let urlImagen=""

    if(props.itemType == "planetas"){
        urlImagen = `https://starwars-visualguide.com/assets/img/planets/${props.item.uid}.jpg`
        dato1 = dataPlanetas.population
        dato2 = dataPlanetas.terrain
    }
    
    const handleImageError = (e) => {
        // Se evita que se llame nuevamente el evento en caso de que la imagen de placeholder también falle
        e.target.onerror = null;
        e.target.src =
          "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    };

    const getInfoPlanets = async() =>{
        try {
            const response = await fetch(`${props.item.url}`)
            const data = await response.json()
            setDataPlanetas(data.result.properties)
            console.log("data",data)
        } catch (error) {
            console.log(error,"Error")
        }
    }
    
    useEffect(()=>{
        getInfoPlanets()
    },[]);
    console.log("planetas",dataPlanetas)
    return(
        <div className="col-3 mt-5 me-3">
            <div className="card">
                <img src={urlImagen} className="card-img-top" alt="..." onError={handleImageError}/>
                <div className="card-body p-4">
                    <h5 className="card-title mb-3">{props.item.name}</h5>
                    <div className="text-wrap mb-3">
                        <dd>Population: {dato1}</dd>
                        <dd>Terrain: {dato2} </dd>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="button" class="btn btn-outline-primary">Learn more</button>
                        <button type="button" class="btn btn-outline-danger"><i class="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardPlanetas;