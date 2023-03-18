import React, { useState } from "react";
import axios from "axios";

const Selector = ({ setSorting }) => {
	const [selected, setSelected] = useState({ setSorting });
	const urlGetAllPost = "http://localhost:3001/api/post/getAllPost/";
	const token = JSON.parse(localStorage.getItem("token"));

	const handleSelectDate = (option) => {
		setSelected(option);
		//	setSorting(option);
		axios
			.get(urlGetAllPost, {
				params: {
					value: -1,
				},
				headers: {
					authorization: `Bearer ${token}`,
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			})
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleSelectAuteur = (option) => {
		setSelected(option);
		//setSorting(option);
		axios
			.get(urlGetAllPost, {
				params: {
					value: 0,
				},
				headers: {
					authorization: `Bearer ${token}`,
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			})
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleSelectNbrVu = (option) => {
		setSelected(option);
		//setSorting(option);
		axios
			.get(urlGetAllPost, {
				params: {
					value: 1,
				},
				headers: {
					authorization: `Bearer ${token}`,
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			})
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="selector">
			<div
				className={`option ${selected === "date" ? "selected" : ""}`}
				onClick={() => handleSelectDate("date")}
			>
				Date
			</div>
			<div
				className={`option ${selected === "auteur" ? "selected" : ""}`}
				onClick={() => handleSelectAuteur("auteur")}
			>
				Auteur
			</div>
			<div
				className={`option ${selected === "vues" ? "selected" : ""}`}
				onClick={() => handleSelectNbrVu("vues")}
			>
				Nombre de vues
			</div>
		</div>
	);
};

export default Selector;
