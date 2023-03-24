import { Box, Text } from "@chakra-ui/react";
import ReactPlayer from "react-player";

function QuranPlay({ activeChapter, activeReciter }) {
	const audioURL = `${activeReciter.Server}/${("00" + activeChapter.id).slice(
		-3
	)}.mp3`;
	return (
		<>
			<Text
				textAlign="center"
				p={4}
				color="teal.400"
				bg="gray.200"
				fontWeight="bold"
				fontSize="22px"
			>
				{activeReciter.name} / {activeChapter.name_arabic} /{" "}
				{activeChapter.name_simple}
			</Text>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				marginBottom="20px"
				backgroundColor="gray.200"
				p={3}
			>
				<ReactPlayer url={audioURL} controls playing height="50px" />
			</Box>
		</>
	);
}

export default QuranPlay;
