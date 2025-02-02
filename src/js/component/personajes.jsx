import React,{useContext, useEffect} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";

import Card from "../component/card.jsx";

export const Personajes = () => {
	const { store, actions } = useContext(Context);

	return <>
		<div className="mt-5 mx-5">
			<h1>Characters</h1>
			<div className="d-flex position-relative overflow-auto">
				{
					store.personajes.map( (item, index) => {
						return(
							<Card key={index} item={item} itemType="personajes"/> 
						)
					})
				}
			</div>

		</div>
		
	</>
}
