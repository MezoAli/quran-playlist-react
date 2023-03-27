import { AddIcon } from "@chakra-ui/icons";
import { Box, Text, Icon, Tooltip } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../redux-store/slices/favoritesSlice";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function QuranPlay({ activeChapter, activeReciter }) {
	const audioURL = `${activeReciter.Server}/${("00" + activeChapter.id).slice(
		-3
	)}.mp3`;

	const dispatch = useDispatch();
	const toast = useToast();
	const navigate = useNavigate();
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
				<Tooltip label="Add To Favorites">
					<Icon
						as={AddIcon}
						ml="20px"
						cursor="pointer"
						onClick={() => {
							dispatch(
								addToFavorites({
									reciter: activeReciter,
									chapter: activeChapter,
								})
							);
							toast({
								title: "Success",
								description: `successfully added ${activeReciter.name} / ${activeChapter.name_simple} to Favorites`,
								status: "success",
								duration: 5000,
								isClosable: true,
							});
							navigate("/favorites");
						}}
					/>
				</Tooltip>
			</Box>
		</>
	);
}

export default QuranPlay;
