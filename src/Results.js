import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
	if (props.data) {
		return (
			<div className="Results">
				<h2 className="Results-word">{props.data.word}</h2>
				{props.data.phonetics.map(function (phonetics, index) {
					return (
						<div key={index}>
							<Phonetics phonetics={phonetics} />
						</div>
					);
				})}
				{props.data.meanings.map(function (meaning, index) {
					return (
						<div key={index}>
							<Meaning meaning={meaning} />
						</div>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
}
