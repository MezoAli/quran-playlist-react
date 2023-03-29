import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Text,
	Icon,
	useToast,
	Box,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";

import { DeleteIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import {
	removeFromFavorites,
	setActivePlayer,
} from "../redux-store/slices/favoritesSlice";

function Favorites() {
	const favoritesList = useSelector((state) => state.favorites.favoritesList);
	const activePlayer = useSelector((state) => state.favorites.activePlayer);
	const favoritesURLlist = useSelector(
		(state) => state.favorites.favoritesURLs
	);
	const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
	const audioRef = useRef();
	const dispatch = useDispatch();
	const toast = useToast();

	const handleAudioEnded = () => {
		setCurrentAudioIndex((currentAudioIndex + 1) % favoritesURLlist.length);
	};

	useEffect(() => {
		const audioUrl = audioRef?.current?.getInternalPlayer()?.src;
		dispatch(setActivePlayer({ audioUrl }));
	}, [currentAudioIndex, dispatch]);

	return (
		<>
			{favoritesList.length === 0 ? (
				<Text
					textAlign="center"
					fontSize={{ base: "20px", md: "30px" }}
					py="30px"
					color="teal.400"
				>
					{" "}
					You Don't Have Any Favorites Yet
				</Text>
			) : (
				<>
					<Text
						textAlign="center"
						p={4}
						color="teal.400"
						bg="gray.200"
						fontWeight="bold"
						fontSize={{ base: "16px", md: "22px" }}
					>
						{activePlayer?.name} / {activePlayer?.name_arabic} /{" "}
						{activePlayer?.name_simple}
					</Text>
					<Box
						display="flex"
						justifyContent="center"
						alignItems="center"
						marginBottom="20px"
						backgroundColor="gray.200"
						p={3}
					>
						<ReactPlayer
							url={favoritesURLlist[currentAudioIndex]}
							controls
							playing
							onEnded={handleAudioEnded}
							height="50px"
							ref={audioRef}
						/>
					</Box>
					<TableContainer>
						<Table variant="simple">
							<TableCaption>Favorites List</TableCaption>
							<Thead>
								<Tr>
									<Th>Reciter Name</Th>
									<Th>Chapter Name</Th>
									<Th>Chapter Name ( Arabic )</Th>
									<Th>Verses Count</Th>
									<Th>Revelation Place</Th>
									<Th>Remove</Th>
								</Tr>
							</Thead>
							<Tbody>
								{favoritesList.map((item, index) => {
									return (
										<Tr
											key={item.id}
											cursor="pointer"
											color={index === currentAudioIndex && "blue.400"}
											fontWeight={index === currentAudioIndex && "bold"}
											onClick={() => setCurrentAudioIndex(index)}
										>
											<Td>{item.name}</Td>
											<Td>{item.name_simple}</Td>
											<Td>{item.name_arabic}</Td>
											<Td>{item.verses_count}</Td>
											<Td>{item.revelation_place}</Td>
											<Td
												onClick={() => {
													dispatch(removeFromFavorites(item.id));
													toast({
														title: "Success",
														description: `successfully deleted ${item.name} / ${item.name_simple} from Favorites`,
														status: "info",
														duration: 5000,
														isClosable: true,
													});
												}}
											>
												<Icon as={DeleteIcon} color="red" />
											</Td>
										</Tr>
									);
								})}
							</Tbody>
						</Table>
					</TableContainer>
				</>
			)}
		</>
	);
}

export default Favorites;
