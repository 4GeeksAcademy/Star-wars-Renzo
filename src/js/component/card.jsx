import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Card = (props) =>{
	const { store, actions } = useContext(Context)

	const [dataInfo, setDataInfo] = useState([]);

	//const dataStorageInfo = JSON.parse(localStorage.getItem("ls-dataInfo"))
	//console.log(dataStorageInfo)

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
        dato1 = `Model : ${dataInfo.model}`
        dato2 = `Passengers: ${dataInfo.passengers}`
    }
	if(props.itemType == "planetas"){
        urlImagen = `https://starwars-visualguide.com/assets/img/planets/${props.item.uid}.jpg`
        dato1 = `Population : ${dataInfo.population}`
        dato2 = `Terrain: ${dataInfo.terrain}`
    }
	
	const handleImageError = (e) => {
		// Se evita que se llame nuevamente el evento en caso de que la imagen de placeholder también falle
		e.target.onerror = null;
		e.target.src = "https://pbs.twimg.com/profile_images/1634821290488938496/VGC6ZuoY_400x400.jpg";
	};

	const getInfoPersonaje = async() =>{
		try {
			const response = await fetch(`${props.item.url}`);
			const data = await response.json()
			setDataInfo(data.result.properties)
			//localStorage.setItem("ls-dataInfo", JSON.stringify(data.result.properties))
		} catch (error) {
			console.log(error,"Error")
		}
	}
	
	useEffect(()=>{
		getInfoPersonaje()
		//actions.fetchPersonajesDetalle(id)
	},[]);

    return(
        <div className="col-3 mt-5 me-3">
			<div className="card">
				<img src={urlImagen} className="card-img-top" alt="..." onError={handleImageError} />
				<div className="card-body p-4">
					<h5 className="card-title mb-3">{props.item.name}</h5>
                    <div className="text-wrap mb-3">
                        <dd>{dato1}</dd>
                        <dd>{dato2} </dd>
                        <dd>{dato3}</dd>
                    </div>
					<div className="d-flex justify-content-between">
						{
							props.itemType == "personajes" && <Link to={"/detalle-personaje/"+ props.item.uid}>
							<button type="button" class="btn btn-outline-primary">Learn more</button>
							</Link>
						}
						{
							props.itemType == "vehiculos" && <Link to={"/detalle-vehiculo/"+ props.item.uid}>
							<button type="button" class="btn btn-outline-primary">Learn more</button>
							</Link>
						}
						{
							props.itemType == "planetas" && <Link to={"/detalle-planeta/"+ props.item.uid}>
							<button type="button" class="btn btn-outline-primary">Learn more</button>
							</Link>
						}
						
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