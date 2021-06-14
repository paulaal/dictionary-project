import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
	return (
		<div className="Meaning">
			<h3 className="Results-partOfSpeech">{props.meaning.partOfSpeech}</h3>
			{props.meaning.definitions.map(function (definition, index) {
				return (
					<div key={index}>
						<div className="Meaning-definition">{definition.definition}</div>

						<div className="Meaning-example">
							{definition.example}
							<Synonyms synonyms={definition.synonyms} />
						</div>
					</div>
				);
			})}
		</div>
	);
}
