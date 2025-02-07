import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const FavoriteDropdown = () => {

	const { store, actions } = useContext(Context);

	return (<div className="dropdown">
		<button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
		  Favorites {store.favoritos.length}
		</button>

		<ul className="dropdown-menu">
			{
				store.favoritos && store.favoritos.map( item => {
					return <li key={'favorite-'+item.name+item.uid} className="d-flex align-items-center">
						<Link className="dropdown-item" to={`${item.url}`}>
							{item.name}
						</Link>
						<i className="fa-regular fa-trash-can me-3" onClick={() => actions.removeFavoritos(item)}></i>
					</li>
				})
			}
		</ul> 


	  </div>)
}

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light my-3 mx-5 bg-black">
			<Link to="/">
				<img src="https://brandslogos.com/wp-content/uploads/images/large/star-wars-logo-black-and-white-outline-1.png" className="" style={{width:"150px"}} />
			</Link>
			<div className="ml-auto">
				<FavoriteDropdown/>
			</div>
		</nav>
	);
};
