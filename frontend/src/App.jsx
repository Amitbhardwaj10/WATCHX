import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1 className="text-white sm:text-red-700 text-center">WATCHX</h1>
			<div className="card text-center">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p className="text-wrap">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
					necessitatibus provident nihil quo temporibus ullam sit inventore
					recusandae! Rem tenetur repellendus corporis sit reprehenderit
					officiis porro accusantium qui, sed eaque cupiditate quidem
					consequatur cum nobis minima culpa ex quis voluptatum aliquam debitis
					optio inventore. Dolorem facere minima ab corporis hic ducimus. Veniam
					cumque asperiores minus quidem voluptatum facilis vel maxime id! Id
					repellendus repudiandae magni earum doloremque vitae quibusdam ducimus
					illo aperiam, mollitia ab dolore nemo ad consequatur cum. Rem vitae
					officiis dolorem non sint dolore nobis neque sit corporis animi,
					maiores eum sed expedita autem modi illo consectetur quisquam.
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
