import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import About from "./componenets/About";
import Home from "./componenets/Home";
import RootLayout from "./componenets/RootLayout";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
