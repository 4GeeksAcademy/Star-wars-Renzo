import React,{useContext, useEffect} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";

import CardPlanetas from "../component/cardPlanetas.jsx";

const Planetas = ()=>{
    const { store, actions } = useContext(Context);
	console.log("planetas",store.planetas)
    return(
        <div className="mt-5 mx-5">
			<h1>Planets</h1>
			<div className="d-flex position-relative overflow-auto">
				{
					store.planetas.map( (item, index) => {
						return(
							<CardPlanetas key={index} item={item} itemType="planetas"/> 
						)
					})
				}
			</div>

		</div>
    );
}

export default Planetas;