import QuranPlayer from "./componenets/QuranPlayer";
import { useEffect, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Reciters from "./componenets/Reciters";
import Chapters from "./componenets/Chapters";

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
			{activeChapter && activeReciter && (
				<QuranPlayer
					playlist={playlist}
					activeChapter={activeChapter}
					activeReciter={activeReciter}
				/>
			)}
			<Grid templateColumns="repeat(2, 1fr)" gap={{ base: 0, md: 6 }}>
				<GridItem overflowY="scroll" maxH="65vh" backgroundColor="gray.100">
					<Reciters reciters={playlist} setActiveReciter={setActiveReciter} />
				</GridItem>
				<GridItem overflowY="scroll" maxH="65vh" backgroundColor="gray.100">
					<Chapters chapters={chapters} setActiveChapter={setActiveChapter} />
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
