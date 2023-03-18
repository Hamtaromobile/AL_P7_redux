import React from "react";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Nav = ({ idUser }) => {
	const isTabletOrMobile = useMediaQuery({ maxWidth: 767 });
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="header_nav">
			<nav className="container_nav">
				{isTabletOrMobile ? (
					<div>
						<span onClick={toggleMenu} className="menu_button_nav">
							{isMenuOpen ? (
								<CloseIcon className="ico_nav" />
							) : (
								<MenuIcon className="ico_nav" />
							)}
						</span>
						{isMenuOpen && (
							<ul className="menu_open_nav">
								{idUser ? (
									<>
										<li className="menu_item_nav">
											<Link
												to={{
													pathname: "/Home",
													search: `?id=${idUser}`,
												}}
												className="menu_link_nav"
											>
												Home
											</Link>
										</li>
										<li className="menu_item_nav">
											<Link
												to={{
													pathname: "/Profile",
													search: `?id=${idUser}`,
												}}
												className="menu_link_nav"
											>
												Profil
											</Link>
										</li>
										<li className="menu_item_nav">
											<Link to="/Login" className="menu_link_nav">
												Logout
											</Link>
										</li>
									</>
								) : (
									<>
										<li className="menu_item_nav">
											<Link to="/Login" className="menu_link_nav">
												Login
											</Link>
										</li>
										<li className="menu_item_nav">
											<Link to="/Signup" className="menu_link_nav">
												Signup
											</Link>
										</li>
									</>
								)}
							</ul>
						)}
					</div>
				) : (
					<div>
						<ul className="menu_nav">
							{idUser ? (
								<>
									<li className="menu_item_nav">
										<Link
											to={{
												pathname: "/Home",
												search: `?id=${idUser}`,
											}}
											className="menu_link_nav"
										>
											Home
										</Link>
									</li>
									<li className="menu_item_nav">
										<Link
											to={{
												pathname: "/Profile",
												search: `?id=${idUser}`,
											}}
											className="menu_link_nav"
										>
											Profil
										</Link>
									</li>
									<li className="menu_item_nav">
										<Link to="/Login" className="menu_link_nav">
											Logout
										</Link>
									</li>
								</>
							) : (
								<>
									<li className="menu_item_nav">
										<Link to="/Login" className="menu_link_nav">
											Login
										</Link>
									</li>
									<li className="menu_item_nav">
										<Link to="/Signup" className="menu_link_nav">
											Signup
										</Link>
									</li>
								</>
							)}
						</ul>
					</div>
				)}
			</nav>
			<div className="logo_nav">
				<img
					className="img_nav"
					src="/images/icon-left-font-monochrome-black.png"
					alt="icon-left-font-monochrome-white.png"
				/>
			</div>
		</header>
	);
};

export default Nav;
