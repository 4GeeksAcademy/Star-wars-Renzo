const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			urlBase: "https://www.swapi.tech/api",
			personajes: [],
			detallePersonajes: [],
			planetas: [],
			detallePlanetas: [],
			vehiculos: [],
			detalleVehiculos: [],
			favoritos: [],


		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			fetchPersonajes: async() =>{
				const store = getStore();

				const response = await fetch(`${store.urlBase}/people`)
				if(response.ok){
					const data = await response.json()
					setStore({personajes: data.results})
					localStorage.setItem("ls-Personajes",JSON.stringify(data.results))
				}
			},

			fetchPersonajesDetalle: async(uid) =>{
				const store = getStore();

				const response = await fetch(`${store.urlBase}/people/${uid}`)
				if(response.ok){
					const data = await response.json()
					setStore({detallePersonajes: [data.result]})
				}
			},

			fetchVehiculos: async() =>{
				const store = getStore();

				const response = await fetch(`${store.urlBase}/vehicles`)
				if(response.ok){
					const data = await response.json()
					setStore({vehiculos: data.results})
					localStorage.setItem("ls-Vehiculos",JSON.stringify(data.results))
				}
			},

			fetchVehiculosDetalle: async(uid) =>{
				const store = getStore();

				const response = await fetch(`${store.urlBase}/vehicles/${uid}`)
				if(response.ok){
					const data = await response.json()
					setStore({detalleVehiculos: [data.result]})
				}
			},

			fetchPlanetas: async() =>{
				const store = getStore();

				const response = await fetch(`${store.urlBase}/planets`)
				if(response.ok){
					const data = await response.json()
					setStore({planetas: data.results})
					localStorage.setItem("ls-Planetas",JSON.stringify(data.results))
				}
			},

			fetchPlanetasDetalle: async(uid) =>{
				const store = getStore();

				const response = await fetch(`${store.urlBase}/planets/${uid}`)
				if(response.ok){
					const data = await response.json()
					setStore({detallePlanetas: [data.result]})
				}
			},

			addFavoritos: async(character) =>{
				const store = getStore()

				const liked = store.favoritos.find(item => character.name == item.name)
				if(!liked){
					setStore({favoritos: [...store.favoritos, character]})
				}
			},
			removeFavoritos: async(character) =>{
				const store = getStore()

				const remover = store.favoritos.filter( item => item.name !== character.name)
				setStore({favoritos: remover})
				
			},
			
		}
	};
};

export default getState;
