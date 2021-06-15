import React from "react";
import "./Footer.css";

export default function Footer() {
	return (
		<p className="footer">
			This project was coded by Paula Alcorta and is{" "}
			<a
				href="https://github.com/paulaal/dictionary-project"
				target="_blank"
				rel="noreferrer"
			>
				open-sourced on GitHub
			</a>{" "}
			and{" "}
			<a
				href="https://suspicious-aryabhata-1e2a18.netlify.app"
				target="_blank"
				rel="noreferrer"
			>
				hosted on Netlify
			</a>
		</p>
	);
}
