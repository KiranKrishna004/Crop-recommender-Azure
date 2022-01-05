/** @format */

import "./App.css";
import Form from "./components/Form";
import Output from "./components/Output";
import { useState } from "react";

const App = () => {
	const [n, setN] = useState("");
	const [p, setP] = useState("");
	const [k, setK] = useState("");
	const [temp, setTemp] = useState("");
	const [humidity, setHumidity] = useState("");
	const [pH, setPh] = useState("");
	const [rainfall, setRainfall] = useState("");
	const [result, setResult] = useState("");
	const updateResult = (param) => setResult(param);
	return (
		<div className="App text-white flex flex-col justify-center items-center">
			{result.length===0?null:<Output result={result} updateResult={updateResult} />}
			<br />
			<Form
				updateResult={updateResult}
				n={n}
				setN={setN}
				p={p}
				setP={setP}
				k={k}
				setK={setK}
				temp={temp}
				setTemp={setTemp}
				rainfall={rainfall}
				humidity={humidity}
				setRainfall={setRainfall}
				setHumidity={setHumidity}
				pH={pH}
				setPh={setPh}
			/>
		</div>
	);
};

export default App;
