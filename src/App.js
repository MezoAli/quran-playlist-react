import { useEffect, useState } from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import Reciters from "./componenets/Reciters";
import Chapters from "./componenets/Chapters";
import QuranPlay from "./componenets/QuranPlay";

function App() {
	const [playlist, setPlaylist] = useState([]);
	const [chapters, setChapters] = useState([]);
	const [activeReciter, setActiveReciter] = useState(null);
	const [activeChapter, setActiveChapter] = useState(null);

	console.log(activeChapter, activeReciter);

	useEffect(() => {
		const getPaylist = async () => {
			const res = await fetch("https://mp3quran.net/api/_english.php");
			const data = await res.json();
			setPlaylist(data.reciters);
		};
		getPaylist();
	}, []);
	useEffect(() => {
		const getChapters = async () => {
			const res = await fetch("https://api.quran.com/api/v4/chapters");
			const data = await res.json();
			setChapters(data.chapters);
		};
		getChapters();
	}, []);

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
					<Reciters reciters={playlist} setActiveReciter={setActiveReciter} />
				</GridItem>
				<GridItem
					overflowY="scroll"
					maxH={activeReciter && activeChapter ? "64vh" : "78vh"}
					backgroundColor="gray.100"
				>
					<Chapters chapters={chapters} setActiveChapter={setActiveChapter} />
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
