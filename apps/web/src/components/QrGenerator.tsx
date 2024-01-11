import QRCode from 'qrcode.react';
import { useState } from 'react';

// https://www.geeksforgeeks.org/how-to-generate-qr-code-using-react-qr-code-in-reactjs/
function QrGenerator() {
	const [value, setValue] = useState("");
	const [back, setBack] = useState('#FFFFFF');
	const [fore, setFore] = useState('#000000');
	const [size, setSize] = useState(512);

	return (
		<div className="App">
			<center>
				<br />
				<br />
				<input
					type="text"
					onChange={(e) => setValue(e.target.value)}
					placeholder="Value of Qr-code"
				/>
				<br />
				<br />
				<input
					type="text"
					onChange={(e) => setBack(e.target.value)}
					placeholder="Background color"
				/>
				<br />
				<br />
				<input
					type="text"
					onChange={(e) => setFore(e.target.value)}
					placeholder="Foreground color"
				/>
				<br />
				<br />
				<input
					type="number"
					onChange={(e) => setSize(e.target.value == ''? 0 : +e.target.value)}
					placeholder="Size of Qr-code"
				/>
				<br />
				<br />
				<br />
				{value && (
					<QRCode
						title="GeeksForGeeks"
						value={value}
						bgColor={back}
						fgColor={fore}
						size={size}
					/>
				)}
			</center>
		</div>
	);
}

export default QrGenerator;
