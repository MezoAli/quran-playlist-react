import { Search2Icon, AddIcon } from "@chakra-ui/icons";
import {
	List,
	ListItem,
	ListIcon,
	InputGroup,
	InputLeftElement,
	Input,
	Icon,
	Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { setActiveReciter } from "../redux-store/slices/reciterSlice";
import { searchReciter } from "../redux-store/slices/reciterSearchSlice";

function Reciters() {
	const [activeId, setActiveId] = useState();
	const [search, setSearch] = useState("");
	const dispatch = useDispatch();
	const recitersList = useSelector((state) => state.reciters.reciters);
	const loading = useSelector((state) => state.reciters.loading);
	const modifiedRecitersList = useSelector(
		(state) => state.searchReciter.modifiedRecitersList
	);

	useEffect(() => {
		dispatch(searchReciter({ reciters: recitersList, search }));
	}, [dispatch, recitersList, search]);

	let content = "";

	if (loading) {
		return (content = (
			<Text textAlign="center" color="teal.400" py="20px">
				Loading...
			</Text>
		));
	}

	if (modifiedRecitersList) {
		return (content = (
			<>
				<InputGroup>
					<InputLeftElement
						pointerEvents="none"
						children={<Search2Icon color="gray.300" />}
					/>
					<Input
						type="text"
						placeholder="Reciter Name"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</InputGroup>
				<List>
					{modifiedRecitersList.map((reciter) => {
						return (
							<ListItem
								key={reciter.id}
								py="10px"
								cursor="pointer"
								onClick={() => {
									dispatch(setActiveReciter(reciter));
									setActiveId(reciter.id);
								}}
								color={reciter.id === activeId && "blue.400"}
								fontWeight={reciter.id === activeId && "bold"}
								display="flex"
								alignItems="center"
							>
								<ListIcon as={BiUserCircle} fontSize="22px" mr="20px" />
								{reciter.name}
								<Icon as={AddIcon} display="block" ml="auto" />
							</ListItem>
						);
					})}
				</List>
			</>
		));
	}

	return { content };
}

export default Reciters;
