import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Home from "./componenets/Home";
import RootLayout from "./componenets/RootLayout";
import Favorites from "./componenets/Favorites";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="favorites" element={<Favorites />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
