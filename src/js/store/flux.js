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
			planetas: [],


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
				}
			},
			fetchPlanetas: async() =>{
				const store = getStore();

				const response = await fetch(`${store.urlBase}/planets`)
				if(response.ok){
					const data = await response.json()
					setStore({planetas: data.results})
				}
			},
			
		}
	};
};

export default getState;
