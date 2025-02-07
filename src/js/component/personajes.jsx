import React,{useContext, useEffect} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";

import Card from "../component/card.jsx";

export const Personajes = () => {
	const { store, actions } = useContext(Context);

	const dataStoragePersonajes = JSON.parse(localStorage.getItem("ls-Personajes"))

	return <>
		<div className="mt-5 mx-5">
			<h1 className="text-warning">Characters</h1>
			<div className="d-flex position-relative overflow-auto">
				{
					dataStoragePersonajes.map( (item, index) => {
						return(
							<Card key={index} item={item} itemType="personajes"/> 
						)
					})
				}
			</div>

		</div>
		
	</>
}
