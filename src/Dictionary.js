import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import Footer from "./Footer";
import "./Dictionary.css";

export default function Dictionary() {
	let [keyword, setKeyword] = useState(null);
	let [info, setInfo] = useState(null);
	let [photos, setPhotos] = useState(null);

	function handleResponse(response) {
		setInfo(response.data[0]);
	}

	function handlePexelsResponse(response) {
		setPhotos(response.data.photos);
	}

	function search(event) {
		//documentation https://dictionaryapi.dev/
		event.preventDefault();
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
		axios.get(apiUrl).then(handleResponse);

		const pexelsApiKey =
			"563492ad6f9170000100000192d7e9ece33e4dafa16e36e217352149";
		let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
		let headers = { Authorization: `Bearer ${pexelsApiKey}` };
		axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
	}

	function handleKeyword(event) {
		event.preventDefault();
		setKeyword(event.target.value);
	}

	return (
		<div className="Dictionary">
			<form onSubmit={search}>
				<input type="search" onChange={handleKeyword} />
			</form>
			<Results data={info} />
			<Photos photos={photos} />
			<Footer />
		</div>
	);
}
