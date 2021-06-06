import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<header className="App-header">Dictionary</header>
				<div className="App-intro">What is the meaning of ... ?</div>
				<Dictionary />
			</div>
		</div>
	);
}
