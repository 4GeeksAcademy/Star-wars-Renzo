import React,{useContext, useEffect} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";

import Card from "../component/card.jsx";
import CardPlanetas from "../component/cardPlanetas.jsx";

const Planetas = ()=>{
    const { store, actions } = useContext(Context);

    return(
        <div className="mt-5 mx-5">
			<h1>Planets</h1>
			<div className="d-flex position-relative overflow-auto">
				{
					store.planetas.map( (item, index) => {
						return(
							<Card key={index} item={item} itemType="planetas"/> 
						)
					})
				}
			</div>

		</div>
    );
}

export default Planetas;