import { Grid, GridItem, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChapters } from "../redux-store/slices/chapterSlice";
import { getReciters } from "../redux-store/slices/reciterSlice";
import Chapters from "./Chapters";
import QuranPlay from "./QuranPlay";
import Reciters from "./Reciters";

function Home() {
	const activeReciter = useSelector((state) => state.reciters.activeReciter);
	const activechapter = useSelector((state) => state.chapters.activeChapter);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getReciters());
		dispatch(getChapters());
	}, [dispatch]);

	return (
		<>
			{activechapter && activeReciter ? (
				<QuranPlay
					activeChapter={activechapter}
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
					maxH={activeReciter && activechapter ? "64vh" : "78vh"}
					backgroundColor="gray.100"
				>
					<Reciters activeReciter={activeReciter} />
				</GridItem>
				<GridItem
					overflowY="scroll"
					maxH={activeReciter && activechapter ? "64vh" : "78vh"}
					backgroundColor="gray.100"
				>
					<Chapters activeChapter={activechapter} />
				</GridItem>
			</Grid>
		</>
	);
}

export default Home;
