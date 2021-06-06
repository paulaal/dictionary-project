import React, { useState } from "react";

export default function Dictionary() {
	let [keyword, setKeyword] = useState(null);
	function search(event) {
		event.preventDefault();
		alert(`Searching for ${keyword} meaning`);
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
		</div>
	);
}
