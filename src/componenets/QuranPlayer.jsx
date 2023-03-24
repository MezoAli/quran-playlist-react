import { Box, Flex, Icon, Progress, Stack, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import {
	AiFillPlayCircle,
	AiFillPauseCircle,
	AiFillStepForward,
	AiFillStepBackward,
} from "react-icons/ai";
function QuranPlayer({ playlist, activeChapter, activeReciter }) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [progressValue, setProgressValue] = useState(0);
	const audioURL = `${activeReciter.Server}/${("00" + activeChapter.id).slice(
		-3
	)}.mp3`;
	const audioRef = useRef();
	const progressRef = useRef();
	const handlePlaying = () => {
		setIsPlaying(!isPlaying);
	};

	const detectAudio = (e) => {
		const duration = audioRef.current.duration;
		const ct = audioRef.current.currentTime;
		const progress = (ct / duration) * 100;
		setProgressValue(progress);
	};
	console.log(audioURL);

	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play();
		} else {
			audioRef.current.pause();
		}
	}, [isPlaying]);

	return (
		<Box py="30px">
			<Flex bg="gray.200" justifyContent="center" alignItems="center" p={4}>
				<Icon
					as={AiFillStepBackward}
					fontSize="30px"
					color="teal.400"
					cursor="pointer"
				/>

				{isPlaying ? (
					<Icon
						as={AiFillPauseCircle}
						fontSize="60px"
						color="teal.400"
						onClick={handlePlaying}
						cursor="pointer"
						mx={4}
					/>
				) : (
					<Icon
						as={AiFillPlayCircle}
						fontSize="60px"
						color="teal.400"
						onClick={handlePlaying}
						cursor="pointer"
						mx={4}
					/>
				)}

				<Icon
					as={AiFillStepForward}
					fontSize="30px"
					color="teal.400"
					cursor="pointer"
				/>
			</Flex>
			<Stack spacing={5}>
				<Progress
					colorScheme="cyan"
					size="md"
					value={progressValue}
					cursor="pointer"
					zIndex="10"
					ref={progressRef}
				/>
			</Stack>
			{/* https://server6.mp3quran.net/thubti/001.mp3 */}
			<audio
				// src={`${playlist[0].Server}/${playlist[0].rewaya}/${playlist[0].count}.mp3`}
				src={audioURL}
				ref={audioRef}
				onTimeUpdate={(e) => detectAudio(e)}
			/>
		</Box>
	);
}

export default QuranPlayer;
