import React,{useContext} from "react";
import { Context } from "../store/appContext.js";

import Card from "../component/card.jsx";

const Vehiculos = () => {

    const { store, actions } = useContext(Context);

	const dataStorageVehiculos = JSON.parse(localStorage.getItem("ls-Vehiculos"))

    return(
        <div className="mt-5 mx-5">
			<h1 className="text-warning">Vehicles</h1>
			<div className="d-flex position-relative overflow-auto">
				{
					dataStorageVehiculos && dataStorageVehiculos.map( (item, index) => {
						return(
							<Card key={index} item={item} itemType="vehiculos"/> 
						)
					})
				}
			</div>

		</div>
    );
}

export default Vehiculos