import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";

const Card = (props) =>{
	const { store, actions } = useContext(Context)

	const [dataInfo, setDataInfo] = useState([]);
	const [dataPlanetas, setDataPlanetas] = useState([])

	let dato1,dato2
	let dato3 = ""

	let urlImagen=""

	if(props.itemType == "personajes"){
		urlImagen = `https://starwars-visualguide.com/assets/img/characters/${props.item.uid}.jpg`
		dato1 = `Gender: ${dataInfo.gender}`
		dato2 = `Hair-Color: ${dataInfo.hair_color}`
		dato3 = `Eyes-Color: ${dataInfo.eyes_color}`
	}
	if(props.itemType == "planetas"){
        urlImagen = `https://starwars-visualguide.com/assets/img/planets/${props.item.uid}.jpg`
        dato1 = `Population : ${dataPlanetas.population}`
        dato2 = `Terrain: ${dataPlanetas.terrain}`
    }
	
	const handleImageError = (e) => {
		// Se evita que se llame nuevamente el evento en caso de que la imagen de placeholder también falle
		e.target.onerror = null;
		e.target.src =
		  "https://starwars-visualguide.com/assets/img/placeholder.jpg";
	};

	const getInfoPersonaje = async() =>{
		try {
			const response = await fetch(`${props.item.url}`);
			const data = await response.json()
			setDataInfo(data.result.properties)
		} catch (error) {
			console.log(error,"Error")
		}
	}

	const getInfoPlanets = async() =>{
        try {
            const response = await fetch(`${props.item.url}`)
            const data = await response.json()
            setDataPlanetas(data.result.properties)
        } catch (error) {
            console.log(error,"Error")
        }
    }
	
	useEffect(()=>{
		getInfoPersonaje()
		getInfoPlanets()
	},[]);

    return(
        <div className="col-3 mt-5 me-3">
			<div className="card">
				<img src={urlImagen} className="card-img-top" alt="..." onError={handleImageError}/>
				<div className="card-body p-4">
					<h5 className="card-title mb-3">{props.item.name}</h5>
                    <div className="text-wrap mb-3">
                        <dd>{dato1}</dd>
                        <dd>{dato2} </dd>
                        <dd>{dato3}</dd>
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

export default Card;