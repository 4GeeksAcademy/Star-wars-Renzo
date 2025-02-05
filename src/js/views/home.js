import React from "react";
import "../../styles/home.css";

import {Personajes} from "../component/personajes.jsx"
import Planetas from "../component/planetas.jsx";
import Vehiculos from "../component/vehiculos.jsx";

import PersonajesDetalles from "../component/personajesDetalle.jsx";


export const Home = () => {

	return <>
		<Personajes />
		<Vehiculos/>
		<Planetas /> 
		
	</>
}
