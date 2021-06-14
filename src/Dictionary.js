import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
	let [keyword, setKeyword] = useState(null);
	let [info, setInfo] = useState(null);

	function handleResponse(response) {
		setInfo(response.data[0]);
	}

	function search(event) {
		//documentation https://dictionaryapi.dev/
		event.preventDefault();
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
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
		</div>
	);
}
