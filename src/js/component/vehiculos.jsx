import React,{useContext} from "react";
import { Context } from "../store/appContext.js";

import Card from "../component/card.jsx";

const Vehiculos = () => {

    const { store, actions } = useContext(Context);

    return(
        <div className="mt-5 mx-5">
			<h1>Vehicles</h1>
			<div className="d-flex position-relative overflow-auto">
				{
					store.vehiculos.map( (item, index) => {
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