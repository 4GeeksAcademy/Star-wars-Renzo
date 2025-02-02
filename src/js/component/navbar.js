import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const FavoriteDropdown = () => {

	const { store } = useContext(Context);

	return (<div className="dropdown">
		<button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
		  Favorites ❤️
		</button>
		<ul className="dropdown-menu">
			{
				store.favorites && store.favorites.map( item => {
					return <li key={'favorite-'+item.id}>
						<Link className="dropdown-item" to={`/character/${item.id}`}>
							{item.name}
						</Link>
					</li>
				})
			}
		</ul>
	  </div>)
}

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" className="" style={{width:"150px"}} />
			</Link>
			<div className="ml-auto">
				<FavoriteDropdown/>
			</div>
		</nav>
	);
};
