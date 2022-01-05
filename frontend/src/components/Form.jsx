/** @format */

import axios from "axios";
const Form = ({
	updateResult,
	n,
	k,
	p,
	rainfall,
	humidity,
	temp,
	pH,
	setN,
	setK,
	setP,
	setRainfall,
	setHumidity,
	setTemp,
	setPh,
}) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post("http://127.0.0.1:5000/", [n, p, k, temp, humidity, pH, rainfall])
			.then((result1) => {
				updateResult(result1.data.result);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className=' border border-solid p-5 border-3 rounded-lg '>
			<form onSubmit={handleSubmit}>
				<table className='table-auto'>
					<tbody>
						<tr>
							<td>Enter Nitrogen : </td>
							<td>
								<input
									className='mb-1 border rounded text-black'
									type='number'
									value={n}
									onChange={(e) => setN(e.target.value)}
								/>
							</td>
						</tr>
						<br />
						<tr>
							<td>Enter Phosphorus : </td>
							<td>
								<input
									className='mb-1 border rounded text-black'
									type='number'
									value={p}
									onChange={(e) => setP(e.target.value)}
								/>
							</td>
						</tr>
						<br />
						<tr>
							<td>Enter Potassium : </td>
							<td>
								<input
									className='mb-1 border rounded text-black'
									type='number'
									value={k}
									onChange={(e) => setK(e.target.value)}
								/>
							</td>
						</tr>
						<br />
						<tr>
							<td className='pr-2'>Enter Temperature : </td>
							<td>
								<input
									className='mb-1 border rounded text-black'
									type='number'
									value={temp}
									onChange={(e) => setTemp(e.target.value)}
								/>
							</td>
						</tr>
						<br />
						<tr>
							<td>Enter Humidity : </td>
							<td>
								<input
									className='mb-1 border rounded text-black'
									type='number'
									value={humidity}
									onChange={(e) => setHumidity(e.target.value)}
								/>
							</td>
						</tr>
						<br />
						<tr>
							<td>Enter pH : </td>
							<td>
								<input
									className='mb-1 border rounded text-black' 
									type='number'
									value={pH}
									onChange={(e) => setPh(e.target.value)}
								/>
							</td>
						</tr>
						<br />
						<tr>
							<td>Enter Rainfall : </td>
							<td className='text-black'>
								<input
									className='mb-1 border rounded'
									type='number'
									value={rainfall}
									onChange={(e) => setRainfall(e.target.value)}
								/>
							</td>
						</tr>
						<br />
					</tbody>
				</table>
				<div className='flex justify-center '>
					<button className='Width mt-5 border-solid border-2 p-2 rounded-lg'>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};
export default Form;
