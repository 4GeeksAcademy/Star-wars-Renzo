import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";

const Card = (props) =>{
	const { store, actions } = useContext(Context)

	const [dataInfo, setDataInfo] = useState([]);
	const [dataPlanetas, setDataPlanetas] = useState([])
	const [dataVehicles, setDataVehicles] = useState([])

	const isSelected = store.favoritos.find( item => item.name == props.item.name)

	let dato1,dato2
	let dato3 = ""

	let urlImagen=""

	if(props.itemType == "personajes"){
		urlImagen = `https://starwars-visualguide.com/assets/img/characters/${props.item.uid}.jpg`
		dato1 = `Gender: ${dataInfo.gender}`
		dato2 = `Hair-Color: ${dataInfo.hair_color}`
		dato3 = `Eyes-Color: ${dataInfo.eyes_color}`
	}
	if(props.itemType == "vehiculos"){
        urlImagen = `https://starwars-visualguide.com/assets/img/vehicles/${props.item.uid}.jpg`
        dato1 = `Model : ${dataVehicles.model}`
        dato2 = `Passengers: ${dataVehicles.passengers}`
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
			setDataVehicles(data.result.properties)
			setDataPlanetas(data.result.properties)
		} catch (error) {
			console.log(error,"Error")
		}
	}
	
	useEffect(()=>{
		getInfoPersonaje()

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
						<button type="button" class="btn btn-outline-danger"
							onClick={()=> {
								!isSelected ? actions.addFavoritos(props.item) : actions.removeFavoritos(props.item)
							}}
						>
							<i class={isSelected ? "fa-solid fa-heart" :"fa-regular fa-heart"}></i>
						</button>
					</div>
				</div>
			</div>
		</div>
    );
}

export default Card;