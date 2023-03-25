import { useEffect, useState } from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import Reciters from "./componenets/Reciters";
import Chapters from "./componenets/Chapters";
import QuranPlay from "./componenets/QuranPlay";
import { useDispatch, useSelector } from "react-redux";
import { getReciters } from "./redux-store/slices/reciterSlice";
import { getChapters } from "./redux-store/slices/chapterSlice";

function App() {
	const activeReciter = useSelector((state) => state.reciters.activeReciter);
	console.log(activeReciter);

	const [activeChapter, setActiveChapter] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getReciters());
		dispatch(getChapters());
	});

	return (
		<>
			<Text
				p={4}
				textAlign="center"
				backgroundColor="blue.300"
				color="white"
				fontSize="30px"
				fontWeight="bold"
			>
				Quran Player
			</Text>
			{activeChapter && activeReciter ? (
				<QuranPlay
					activeChapter={activeChapter}
					activeReciter={activeReciter}
				/>
			) : (
				<Text fontSize="25px" color="blue.400" textAlign="center" py="10px">
					Please Select Reciter and Chapter
				</Text>
			)}
			<Grid templateColumns="repeat(2, 1fr)" gap={{ base: 0, md: 6 }}>
				<GridItem
					overflowY="scroll"
					maxH={activeReciter && activeChapter ? "64vh" : "78vh"}
					backgroundColor="gray.100"
				>
					<Reciters />
				</GridItem>
				<GridItem
					overflowY="scroll"
					maxH={activeReciter && activeChapter ? "64vh" : "78vh"}
					backgroundColor="gray.100"
				>
					<Chapters setActiveChapter={setActiveChapter} />
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
