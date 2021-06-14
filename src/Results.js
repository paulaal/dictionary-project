import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
	if (props.data) {
		return (
			<div className="Results">
				<section>
					<h2 className="Results-word">{props.data.word}</h2>
					{props.data.phonetics.map(function (phonetics, index) {
						return (
							<div key={index}>
								<Phonetics phonetics={phonetics} />
							</div>
						);
					})}
				</section>
				{props.data.meanings.map(function (meaning, index) {
					return (
						<section key={index}>
							<Meaning meaning={meaning} />
						</section>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
}
